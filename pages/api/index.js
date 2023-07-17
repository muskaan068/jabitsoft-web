import conn from '../../config/dbConfig'
export default function hello(req, res) {
    conn.query('select * from admin_user',[], function (error, results, fields) {
        if (error) throw error;
        res.send(results)
      });
  }