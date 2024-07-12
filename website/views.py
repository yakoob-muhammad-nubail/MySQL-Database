from flask import Blueprint

views = Blueprint('views', __name__)

@views.route('/login')
def login():
    return "<p>login</p>"

@views.route('/logout')
def logout():
    return "<p>logout</p>"

@views.route('/sign-up')
def sign_up():
    return "<p>Sign Up</p>"

@views.route('/notes')
def home():
    return "<p>notes</p>"

@views.route('/reminders')
def notes():
    return "<p>reminders</p>"

@views.route('/labels')
def notes():
    return "<p>labels</p>"

@views.route('/archive')
def notes():
    return "<p>archive</p>"

@views.route('/trash')
def notes():
    return "<p>trash</p>"

@views.route('/home')
def notes():
    return "<p>home</p>"