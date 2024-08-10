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
    title = db.Column(db.String(100), nullable=False, unique=True)
    text = db.Column(db.String(100), nullable=False)
    deleted = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return '<Id %r Email %r Password %r Date %r>' % (self.accountId, self.noteId, self.title, self.text, self.deleted)
    
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

@app.route('/notes', methods=['POST'])
def notesPageAdd():
    title = request.form['title']
    text = request.form['text']
    account_id = request.form.get('accountId')

    if account_id is None:
        current_app.logger.error('Account ID not provided')
        return render_template('notes.html', error="Account ID not provided")
    else: 
        new_note = Notes(accountId=account_id, title=title, text=text)

        db.session.add(new_note)
        db.session.commit()

        return render_template('notes.html', message="Note added successfully")

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
    notes_data = [{'noteId': note.noteId, 'title': note.title, 'text': note.text, 'deleted': note.deleted} for note in notes]
    
    return render_template('notes.html', notes=notes_data, user_id = user_id)

if __name__ == '__main__':
    app.run(debug=True)