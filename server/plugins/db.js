const { createPool } = require('mysql2')

const pool = createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'moba'
})

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, result) => {
          if(err) {
            reject(err)
          } else {
            resolve(result)
          }

          connection.release()
        })
      }
    })
  })
}

module.exports = query
