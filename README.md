# MySQL-Database
# First database setup using local server host

# flask installs - linux

pip install flask

pip install flask-login

pip install flask-sqlalchemy

pip install requests

pip install requests bs4

# install virtualization - linux

python3 -m venv venv (or python depends on os)

# to fix errors in activate file - linux

go to same folder in terminal

sudo apt-get install dos2unix

dos2unix Scripts/activate

sed -i 's/\r$//' Scripts/activate

source Scripts/activate

# initializing database - linux
in terminal run main.py using shell

python3 

<pre>
>>>from main import app, db
>>>with app.app_context():
...     db.create_all()
...
</pre>


# currently two setups are here which will be migrated to two seperate repositories including this one

python app.py to run (similar to all python files, python3 in ubuntu)

app.py (standalone script using flask and no venv)

main.py (uses init, auth, models, views)