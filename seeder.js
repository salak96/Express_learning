//import connection dengan require
const pool = require('./connection');
const fs = require('fs');
// // //user dan format dengan utf-8
// const userData = fs.readFileSync('./data/user.json', 'utf-8');
// //task
//  const tasksData = fs.readFileSync('./data/tasks.json', 'utf-8');
//  console.log(tasksData); //data dari file masih dalam bentuk string
// //JSON
// // const users = JSON.parse(userData); // data bentuk JSON
// const tasks = JSON.parse(tasksData); 
// // //cetak di console
// //  console.log(users);
//  console.log(tasks);


// // // Membuat array dari data yang ingin dimasukkan ke dalam database
// // const userValues = users.map((user) => {
// //     return `('${user.fullName}', '${user.gender}', '${user.email}')`;
// // }).join(', \n');
// // console.log(userValues);

// // // // Query untuk memasukkan data ke dalam tabel "Users"
// // const query = `
// //     INSERT INTO "Users" ("fullName", "gender", "email")
// //     VALUES ${userValues}
// // `;
// // //push ke database dummy data
// // pool.query(query, (err, res) => {
// //     if (err) {
// //         console.error(err);
// //     } else {
// //         console.log(res.rows);
// //         console.log("Data users inserted successfully");
// //     }
// //     pool.end();
// // });

// //TASK map
// // Membuat array dari data yang ingin dimasukkan ke dalam database
// const taskUser = tasks.map((task) => {
//     return `('${task.title}', '${task.status}', '${task.deadline}', '${task.priority}', '${task.userId}')`;
// })
//  console.log(taskUser);

//  // // // Query untuk memasukkan data ke dalam tabel "Tasks"
// const query = `
//     INSERT INTO "Tasks" ("title", "status", "deadline", "priority", "userId")
//     VALUES ${taskUser}
// `;
// //push ke database dummy data
// pool.query(query, (err, res) => {
    
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(res.rows);
//         console.log("Data tasks inserted successfully");
//     }
// pool.end();
// });
