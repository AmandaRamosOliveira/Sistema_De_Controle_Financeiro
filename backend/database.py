import mysql.connector

def get_db():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="sistemadecontrolefinanceiro"
    )
    return conn
