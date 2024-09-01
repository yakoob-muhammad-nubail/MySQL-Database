from flask import Blueprint, render_template

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return render_template("log_in.html")

@auth.route('/logout')
def logout():
    return render_template("log_out.html")

@auth.route('/sign_up')
def sign_up():
    return render_template("sign_up.html")

@auth.route('/notes')
def notes():
    return render_template("notes.html")

@auth.route('/reminders')
def reminders():
    return "<p>reminders</p>"

@auth.route('/labels')
def labels():
    return "<p>labels</p>"

@auth.route('/archives')
def archive():
    return "<p>archive</p>"

@auth.route('/trash')
def trash():
    return "<p>trash</p>"

@auth.route('/')
def home():
    return render_template("home.html")

@auth.route('/about')
def about():
    return render_template("about.html")

@auth.route('/account')
def account():
    return render_template("account.html")

# test route
# @auth.route('/index_account')
# def index():
#     return render_template("index_account.html")

# test route
# @auth.route('/index_user')
# def index():
#     return render_template("index_user.html")