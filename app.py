#!/usr/bin/env python
# coding: utf-8

# In[ ]:


# 1. import Flask
import os
from flask import Flask, jsonify, render_template

# 2. Create an app, being sure to pass __name__
static_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)))
app = Flask(__name__)


# 3. Define what to do when a user hits the index route
@app.route('/' )
def serve_dir_directory_index():
    return render_template('index.html')

@app.route('/larceny' )
def serve_dir_directory_index():
    return render_template('larceny.html')

# 4. Define what to do when a user hits the /about route
#@app.route("/about")
#def about():
 #   print("Server received request for 'About' page...")
  #  return "Welcome to my 'About' page!"


if __name__ == "__main__":
    app.run(debug=True)

