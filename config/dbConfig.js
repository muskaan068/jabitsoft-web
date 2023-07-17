const {createConnection}= require('mysql');

const conn=createConnection({
    host:'localhost',
    user:'root',
    password:'Anish@2022',
    port:3306,
    database:'jabitsoft_db'
})

conn.connect((error)=>{
    if(error){
        console.log("Connection error")
    }else{
        console.log("Db Connection created")
    }
})

const executeQuery=(query,arrParam)=>{
    return new Promise((resolve,reject)=>{
        try {
            conn.query(query,arrParam,(error,data)=>{
                if(error){
                    console.log("error in executing query");
                    reject(error)
                }
                resolve(data)
               

            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports={executeQuery};