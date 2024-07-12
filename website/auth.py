from flask import Blueprint

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return "<p>login</p>"

@auth.route('/logout')
def logout():
    return "<p>logout</p>"

@auth.route('/sign-up')
def sign_up():
    return "<p>Sign Up</p>"

@auth.route('/notes')
def home():
    return "<p>notes</p>"

@auth.route('/reminders')
def notes():
    return "<p>reminders</p>"

@auth.route('/labels')
def notes():
    return "<p>labels</p>"

@auth.route('/archive')
def notes():
    return "<p>archive</p>"

@auth.route('/trash')
def notes():
    return "<p>trash</p>"

@auth.route('/home')
def notes():
    return "<p>home</p>"