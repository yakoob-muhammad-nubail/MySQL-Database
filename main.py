from website import create_app
from flask import render_template, request, jsonify, current_app, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = create_app()

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///accounts.db'

db = SQLAlchemy(app)

class Accounts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Id %r Email %r Password %r Date %r>' % (self.id, self.email, self.password, self.date_added)
    
class Notes(db.Model):
    accountId = db.Column(db.Integer, primary_key=True)
    noteId = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    text = db.Column(db.String(100), nullable=False)
    deleted = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return '<AccountId %r NoteId %r Title %r Text %r Deleted %r>' % (self.accountId, self.noteId, self.title, self.text, self.deleted)
    
@app.route('/sign-in', methods=['POST'])
def signupPage():
    email = request.form['email']
    password = request.form['password']

    if Accounts.query.filter_by(email=email).first():
        current_app.logger.error(f'Account with email {email} already exists')
        return render_template('sign_up.html', error="Account already exists")
    
    new_account = Accounts(email=email, password=password)

    db.session.add(new_account)
    db.session.commit()

    return redirect(url_for('getIdByEmail'))

@app.route('/add_note', methods=['POST'])
def add_note():
    try:
        data = request.json
        note_id = data.get("noteId")
        account_id = data.get('accountId')
        title = data.get('title') or ' '
        text = data.get('entry') or ' '

        current_app.logger.info(f"Received data: {data}")
        current_app.logger.info(f"Note ID: {note_id}, Account ID: {account_id}, Title: '{title}', Text: '{text}'")

        # Check for existing note
        existing_note = Notes.query.filter_by(accountId=account_id, noteId=note_id).first()
        if existing_note:
            current_app.logger.error(f'Note with ID {note_id} already exists for Account ID: {account_id}')
            return jsonify({'status': 'error', 'message': 'Note with this title already exists'}), 400

        # Create and add the new note
        new_note = Notes(accountId=account_id, noteId=note_id, title=title, text=text, deleted=False)
        
        current_app.logger.info(f"Creating new note: {new_note}")

        db.session.add(new_note)
        db.session.commit()

        current_app.logger.info(f"Note added successfully with ID: {new_note.noteId}")

        return jsonify({'status': 'success', 'note_id': new_note.noteId}), 201

    except Exception as e:
        current_app.logger.error(f"Error occurred while adding note: {e}")
        return jsonify({'status': 'error', 'message': 'Internal Server Error'}), 500

@app.route('/login', methods=['POST'])
def getIdByEmail():
    email = request.form['email']
    password = request.form['password']

    user = Accounts.query.filter_by(email=email).first()
    
    if user and user.password == password:
        return redirect(url_for('check_notes', user_id=user.id))
    else:
        current_app.logger.error(f'Failed login attempt for email: {email}')
        return render_template('log_in.html', error="Invalid email or password")

@app.route('/notes/check-notes/<int:user_id>', methods=['GET'])
def check_notes(user_id):
    notes = Notes.query.filter_by(accountId=user_id).all()
    user = Accounts.query.filter_by(id=user_id).first()
    
    # # Set the deleted status for the first three notes based on their position to test the db
    # for index, note in enumerate(notes):
    #     if index < 2:
    #         note.deleted = False
    #         current_app.logger.error(f'Note {index+1} deleted status set to: {note.deleted}')
    #     elif index == 2:
    #         note.deleted = True
    #         current_app.logger.error(f'Note {index+1} deleted status set to: {note.deleted}')
    #     else:
    #         break  # Exit the loop after the third note is processed

    # db.session.commit() 

    # Initialize a counter for the notes
    # note_count = 0
    
    # Loop through the notes to count them
    # for note in notes:
    #     note_count += 1
    #     current_app.logger.error(f'Notes counter: {note_count}')

    notes_data = [{'accountId': note.accountId, 'noteId': note.noteId, 'title': note.title, 'text': note.text, 'deleted': note.deleted} for note in notes]

    user_data = [{'accountId' : user.id}]

    current_app.logger.info(f'User data is as follows: {user.id}')

    current_app.logger.info(f'User data is as follows: {user_data}')
    
    return render_template('notes.html', notes = notes_data, userData = user_data)

@app.route('/delete_note', methods=['POST'])
def delete_note():
    data = request.json
    note_id = data.get('note_id')
    account_id = data.get('account_id')

    # Perform the deletion from the database
    note = Notes.query.filter_by(noteId=note_id, accountId=account_id).first()

    if note:
        note.deleted = True
        db.session.commit()
        return jsonify({"status": "success", "message": "Note deleted successfully"}), 200
    else:
        return jsonify({"status": "error", "message": "Note not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)