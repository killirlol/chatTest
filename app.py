from flask import Flask, render_template, request, redirect, abort, url_for
# import chatdb
import sqlite3

app = Flask(__name__)

@app.route("/", methods=["GET"])
def buy_world():
    return """<h1>byu, world!</h1><a href="http://localhost:80/chat">chatttttttttttttt</a>
    <br><a href="http://localhost:80/register">register</a><br><a href="http://localhost:80/login">login</a><a href="http://localhost:80/password"></a>"""

# @app.route("/")
# def register():
#     return '<a href="http://localhost:5000/register">register</a>'

def otpravca(gmail, user, pasword):
    with sqlite3.connect("chat.db3") as db:
        db.execute("INSERT INTO register_users (username, name, password) VAlUES (?, ?, ?)", (gmail, user, pasword))
        print("Отправка произошла чекай SQL")

@app.route("/register", methods=["POST", "GET"])
def reg_page():
    if request.method == "POST":
        # abort(401)
        user_login_reg = request.form.get("user_name")
        user_login = request.form.get("User")
        user_password = request.form.get("user_password")
        print(user_login, user_password)
        otpravca(user_login_reg, user_login, user_password)
        return redirect(url_for('chat_func'))
    elif request.method == "GET":
        return render_template('b.html')
    
    
@app.route("/chat")  # создаем чат страница http://localhost:5000/chat
def chat_func():
    return render_template('a.html')

@app.route("/login", methods=["POST", "GET"])
def login_func():
    if request.method == "POST":
        if url_for('chat_func'):
            return render_template("a.html")
        elif url_for('reg_page'):
            return render_template("b.html")
        elif url_for('password'):
            return render_template("d.html")
    elif request.method == "get":
        return render_template("c.html")
        

@app.route("/password")
def password():
    return render_template('d.html')

@app.route("/<name>") # создаем страницу которая будет отвечать на запросы по адресу http://localhost:5000/<все что угодно> 6 балов
def other_pages(name):
    return name



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True)