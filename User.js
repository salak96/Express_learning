const pool = require('./connection')

class User {
  constructor(id, name, email, password) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }
  //Query GET ALLDD
  static findAll(cb) {
    pool.query(`SELECT * FROM "Users"`, (err, res) => {
      console.log(res)
      if (err) {
        cb(err)
      } else {
        cb(null, UserFactory.createBulkUsers(res.rows))
      }
    })
  }

  //QuER GET BY ID

  static findById(id, cb) {
    pool.query(
      `SELECT * FROM "Users" 
    WHERE id = $1`,
      [id],
      (err, res) => {
        if (err) {
          cb(err)
          console.log(err)
        } else {
          cb(
            null,
            UserFactory.createUser(
              res.rows[0].id,
              res.rows[0].name,
              res.rows[0].email,
              res.rows[0].password,
            ),
          )
        }
      },
    )
  }
}
class UserFactory {
  static createUser(id, name, email, password) {
    return new User(id, name, email, password)
  }

  static createBulkUsers(data) {
    return data.map((data) => {
      const { id, name, email, password } = data
      return new User(id, name, email, password)
    })
  }
}

module.exports = User
