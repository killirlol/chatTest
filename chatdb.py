import sqlite3


con = sqlite3.connect("chat.db3") # подключаемся к базе данных и складываем её в объект conn


# con.execute("DROP TABLE register_users")

con.execute("""CREATE TABLE IF NOT EXISTS register_users(
    username TEXT PRIMARY KEY,
    name TEXT,
    password TEXT
)""")


# создать запрос для вставления строчки в тэйбл
try:   
    cur = con.cursor()
    cur.execute("""INSERT OR  ABORT INTO register_users (username, name, password)
                VALUES (?, ?, ?)""", ("StackBack", "Dima", "StackBack_Dima"))
    con.commit()
except sqlite3.IntegrityError as e:
    print(e)

cur = con.cursor()
cur.execute("""SELECT * FROM register_users""")
print(cur.fetchall())

#создаем запрос для изменению пароля по юзер нейму или именни
cur.execute("""UPDATE OR FAIL register_users SET name = ?
            WHERE username = ?""", ("gg", "ert"))
con.commit()

cur.execute("""SELECT * FROM register_users""")
print(cur.fetchall())

# достать мои мозги: достать информацию о пользователе по юзер нейму
cur.execute("""SELECT * FROM register_users WHERE username = ? """, ("StackBack", ))
con.commit()
print(cur.fetchall())