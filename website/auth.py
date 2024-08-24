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
def notes():
    return "<p>notes</p>"

@auth.route('/reminders')
def reminders():
    return "<p>reminders</p>"

@auth.route('/labels')
def labels():
    return "<p>labels</p>"

@auth.route('/archive')
def archive():
    return "<p>archive</p>"

@auth.route('/trash')
def trash():
    return "<p>trash</p>"

@auth.route('/')
def home():
    return "<p>home</p>"

@auth.route('/about')
def about():
    return "<p>about</p>"

@auth.route('/account')
def account():
    return "<p>account</p>"

# test route
@auth.route('/index')
def index():
    return "<p>index</p>"