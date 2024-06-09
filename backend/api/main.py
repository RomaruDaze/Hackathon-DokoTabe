from fastapi import FastAPI
import sqlite3

app = FastAPI()

def get_db_connection():
    conn = sqlite3.connect('shop.db')
    conn.row_factory = sqlite3.Row
    return conn


@app.get("/shops/all")
async def read_shops():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM shop")
    shops = cursor.fetchall() 
    conn.close()
    if shops:
        return [dict(shop) for shop in shops] 
    else:
        return {"error": "No shops found"}, 404


@app.get("/menu/{shopid}")
async def read_menu(shopid: int):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM menu where shopid = ?", (shopid,))
    menu_items = cursor.fetchall()
    conn.close()
    if menu_items:
        return [dict(item) for item in menu_items]  
    else:
        return {"error": "Menu not found for the specified shop"}, 404
    

  
