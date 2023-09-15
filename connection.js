const { Pool } = require('pg')
//configurasi DB
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'to-do',
  password: 'root',
  port: 5432,
  idleTimeoutMillis: 100,
})
//Cek koneksi db dengan waktu sekarang
// pool.query('SELECT NOW()', (err, res) => {
//     if(err)console.log(err)
//     console.log(res.rows[0].now)
// })

module.exports = pool
