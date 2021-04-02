const mysql = require('mysql2')

module.exports = app => {

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xdq971102.',
    database: 'moba'
  })
  
  connection.connect(err => {
    if(err) {
      console.error(err)
    } else {
      console.log('success')
    }
  })

  // connection.query('create database moba', (err, result, fields) => {
  //   if(err) throw err
  //   console.log(result)
  // })

}
