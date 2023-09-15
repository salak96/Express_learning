const express = require('express')
const app = express()
const port = process.env.PORT || 3000 // Menggunakan port yang tersedia atau default ke 3000
const User = require('./User')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//get all users
app.get('/users', (req, res) => {
  User.findAll((err, users) => {
    if (err) console.log(err)
    else res.send(users)
  })
})
//get by id
app.get('/users/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    const id = req.params
    if (err) console.log(err)
    else res.send(user)
  })
})

app.get('/tasks', (req, res) => {
  res.send('Tasks')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
