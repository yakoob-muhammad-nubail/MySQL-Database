from website import create_app
from flask import render_template, request
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
    
@app.route('/', methods=['POST'])
def signinPage():
    email = request.form['email']
    password = request.form['password']

    new_account = Accounts(email = email, password = password)

    db.session.add(new_account)
    db.session.commit()
    return render_template('log_in.html', email = email, password = password)

if __name__ == '__main__':
    app.run(debug=True)