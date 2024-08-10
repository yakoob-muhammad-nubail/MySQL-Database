from website import create_app
from flask import render_template, request, jsonify, current_app
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

    new_account = Accounts(email = email, password = password)

    db.session.add(new_account)
    db.session.commit()

    return render_template('log_in.html')

@app.route('/notes', methods=['POST'])
def notesPageAdd():
    accountId = id
    title = request.form['title']
    text = request.form['text']

    new_note = Notes(title = title, text = text)

    db.session.add(new_note)
    db.session.commit()

    return render_template('log_in.html',title = title, text = text)

@app.route('/login', methods=['POST'])
def getIdByEmail():
    email = request.form['email']
    password = request.form['password']

    user = Accounts.query.filter_by(email = email).first()
    
    if user and user.password == password:
        return render_template('notes.html')
    else:
        current_app.logger.error(f'Failed login attempt for email: {email}')
        return render_template('log_in.html', error="Invalid email or password")

if __name__ == '__main__':
    app.run(debug=True)