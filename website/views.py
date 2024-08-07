from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/login')
def login():
    return render_template("log_in.html")

@views.route('/logout')
def logout():
    return render_template("log_out.html")

@views.route('/sign-up')
def sign_up():
    return render_template("sign_up.html")

@views.route('/notes')
def notes():
    return render_template("notes.html")

@views.route('/reminders')
def reminders():
    return "<p>reminders</p>"

@views.route('/labels')
def labels():
    return "<p>labels</p>"

@views.route('/archive')
def archive():
    return "<p>archive</p>"

@views.route('/trash')
def trash():
    return "<p>trash</p>"

@views.route('/')
def home():
    return render_template("home.html")

@views.route('/about')
def about():
    return "<p>about</p>"

@views.route('/account')
def account():
    return "<p>account</p>"