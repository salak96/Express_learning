const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/users', (req, res) => {
  res.send('Users')

})
app.get('/tasks', (req, res) => {
    res.send('Tasks')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

