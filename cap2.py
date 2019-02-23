from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/chs.html')
def chs():
    return render_template('chs.html')


if __name__ == '__main__':
    app.run(debug=True)