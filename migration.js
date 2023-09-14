const pool = require('./connection');
//create table users
// pool.query(`
//     CREATE TABLE IF NOT EXISTS "Users"(
//         "id" SERIAL PRIMARY KEY,
//         "fullName" VARCHAR(255) NOT NULL,
//         "gender" VARCHAR(255) NOT NULL,
//         "email" VARCHAR(255) NOT NULL UNIQUE
//     )
// `, (err, res) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("Table 'Users' created successfully");
//     }
//     pool.end();
// });

///CREATE TABLE TASK
// pool.query(`
// CREATE TABLE IF NOT EXISTS "Tasks"(
//     "id" SERIAL PRIMARY KEY,
//     "title" VARCHAR(255) NOT NULL,
//     "status" VARCHAR(255) NOT NULL,
//     "deadline" DATE NOT NULL,
//     "priority" VARCHAR(255) NOT NULL,
//     "userId" INTEGER NOT NULL REFERENCES "Users"
// )
// `, (err, res) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("Table 'Tasks' created successfully");
//     }
//     pool.end();
// });