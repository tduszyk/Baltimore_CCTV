import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker 
from sqlalchemy import create_engine, inspect
# from sqlalchemy_utils import get_tables, database_exists
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################
DB_URL = "postgresql://postgres:chumwater@localhost/baltimore_cctv_db"
# app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:chumwater@localhost/baltimore_cctv_db"
# db = SQLAlchemy(app)

engine = create_engine(DB_URL)
conn = engine.connect()

# engine = create_engine("postgresql://postgres:chumwater@localhost/baltimore_cctv_db")
# inspector = inspect(engine)


# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(db.engine, reflect=True)

# # Save references to each table
# census_data= Base.classes.bpd_cctv_census

# base = declarative_base()
# Session = sessionmaker(db)
# session = Session()


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/bubble")
# create function to call in db and jsonify the data

def census():
    # if database_exists(DB_URL):
    #     print(get_tables(DB_URL))
    # stmt = SQLAlchemy.Table('bpd_cctv_census', autoload=True, autoload_with=db)
    # print(stmt)
    # df = pd.read_sql_query(stmt, db.session.bind)
    df = pd.read_sql("SELECT * FROM bpd_cctv_census", conn)
    output_json = df.to_json(orient='records')
    return output_json


# @app.route("/metadata/<sample>")
# def sample_metadata(sample):
#     """Return the MetaData for a given sample."""
#     sel = [
#         Samples_Metadata.sample,
#         Samples_Metadata.ETHNICITY,
#         Samples_Metadata.GENDER,
#         Samples_Metadata.AGE,
#         Samples_Metadata.LOCATION,
#         Samples_Metadata.BBTYPE,
#         Samples_Metadata.WFREQ,
#     ]

#     results = db.session.query(*sel).filter(Samples_Metadata.sample == sample).all()

#     # Create a dictionary entry for each row of metadata information
#     sample_metadata = {}
#     for result in results:
#         sample_metadata["sample"] = result[0]
#         sample_metadata["ETHNICITY"] = result[1]
#         sample_metadata["GENDER"] = result[2]
#         sample_metadata["AGE"] = result[3]
#         sample_metadata["LOCATION"] = result[4]
#         sample_metadata["BBTYPE"] = result[5]
#         sample_metadata["WFREQ"] = result[6]

#     print(sample_metadata)
#     return jsonify(sample_metadata)


# @app.route("/samples/<sample>")
# def samples(sample):
#     """Return `otu_ids`, `otu_labels`,and `sample_values`."""
#     stmt = db.session.query(Samples).statement
#     df = pd.read_sql_query(stmt, db.session.bind)

#     # Filter the data based on the sample number and
#     # only keep rows with values above 1
#     sample_data = df.loc[df[sample] > 1, ["otu_id", "otu_label", sample]]

#     # Sort by sample
#     sample_data.sort_values(by=sample, ascending=False, inplace=True)

#     # Format the data to send as json
#     data = {
#         "otu_ids": sample_data.otu_id.values.tolist(),
#         "sample_values": sample_data[sample].values.tolist(),
#         "otu_labels": sample_data.otu_label.tolist(),
#     }
#     return jsonify(data)


if __name__ == "__main__":
    app.run()
