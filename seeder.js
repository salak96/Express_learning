const pool = require('./connection');
const fs = require('fs');
// //user
// const userData = fs.readFileSync('./data/user.json', 'utf-8');
//task
const tasksData = fs.readFileSync('./data/tasks.json', 'utf-8');

//JSON
// const users = JSON.parse(userData);
const tasks = JSON.parse(tasksData);
// console.log(users);
console.log(tasks);


// // Membuat array dari data yang ingin dimasukkan ke dalam database
// const userValues = users.map((user) => {
//     return `('${user.id}', '${user.fullName}', '${user.gender}', '${user.email}')`;
// }).join(', \n');

// // Query untuk memasukkan data ke dalam tabel "Users"
// const query = `
//     INSERT INTO "Users" ("id", "fullName", "gender", "email")
//     VALUES ${userValues}
// `;
// //push ke database dummy data
// pool.query(query, (err, res) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(res.rows);
//         console.log("Data users inserted successfully");
//     }
//     pool.end();
// });

//TASK
// // Membuat array dari data yang ingin dimasukkan ke dalam database
const taskUser = tasks.map((task) => {
    return `('${task.title}', '${task.status}', '${task.deadline}', '${task.priority}', '${task.userId}')`;
})

console.log(taskUser);
// // Query untuk memasukkan data ke dalam tabel "Tasks"
const query = `
    INSERT INTO "Tasks" ("title", "status", "deadline", "priority", "userId")
    VALUES ${taskUser}
`;
//push ke database dummy data
pool.query(query, (err, res) => {
    
    if (err) {
        console.error(err);
    } else {
        console.log(res.rows);
        console.log("Data tasks inserted successfully");
    }
pool.end();
});
