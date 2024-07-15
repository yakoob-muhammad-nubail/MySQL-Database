from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/hello', methods=['GET'])
def hello():
    return jsonify({'message':'Hello World'})

if __name__ == '__main__':
    app.run(debug=True)