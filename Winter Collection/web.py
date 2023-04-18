from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/contact")

def contact():
    return render_template("contacts.html")
    

app.run(debug=True)
