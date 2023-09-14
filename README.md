# Project ToDoList NodeJs express
Node.js To-Do List adalah aplikasi web sederhana yang dibangun menggunakan teknologi Node.js. Aplikasi ini digunakan untuk membuat, mengelola, dan mengorganisasi daftar tugas atau aktivitas yang perlu dilakukan.

## Authors

- [@salak96](https://github.com/salak96)


## Installation project

-  Install my-project with npm

```bash
 npm init -y
```

- Install Postgres node-postgres

```bash
npm i pg
```
- install express
```bash
npm express
```

- install nodemoon
```bash
npm i nodemon
```
## Programmatic DB
-   Create file Connection.js

```bash
touch connection.js
```
- Isi file Connection.js

```bash
const {Pool} = require('pg')
# configurasi DB
const pool = new Pool({
    user: 'postgres',   #Sesuaikan
    host: 'localhost',  #Sesuaikan
    database: 'to-do',  #Sesuaikan 
    password: 'root',   #Sesuaikan
    port: 5432,         #Sesuaikan
    idleTimeoutMillis: 100  #biar tidak pull.end()
})
# Cek koneksi db dengan waktu sekarang
 pool.query('SELECT NOW()', (err, res) => {
     if(err)console.log(err)
     console.log(res.rows[0].now)
 })

module.exports = pool;

```
-  Check Koneksi db dengan query tanggal sekarang

```bash
node connection.js
```
- export pool

```bash

module.exports = pool;
```

-   buat file migration

```bash
touch migration.js
```

-   isi file migration buat table

```bash
const pool = require('./connection');
# create table users
pool.query(`
    CREATE TABLE IF NOT EXISTS "Users"(
        "id" SERIAL PRIMARY KEY,
        "fullName" VARCHAR(255) NOT NULL,
        "gender" VARCHAR(255) NOT NULL,
        "email" VARCHAR(255) NOT NULL UNIQUE
    )
`, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Table 'Users' created successfully");
    }
    pool.end();
});

#   create table tasks
pool.query(`
CREATE TABLE IF NOT EXISTS "Tasks"(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "deadline" DATE NOT NULL,
    "priority" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL REFERENCES "Users"
)
`, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Table 'Tasks' created successfully");
    }
    pool.end();
});


```

-   Jalan migration.js dan cek di dbBwear atau navicat

```bash
node migration.js

```
-   Buat dumyData Seeder

```bash
touch seeder.js
```

-   Buat folder Data menampung datanya

```bash
mkdir data
```




    
