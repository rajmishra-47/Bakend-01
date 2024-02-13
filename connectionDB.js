const PG=require('pg').Pool
const env=require('dotenv').config()

const client=new PG({    
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    host:process.env.HOST,
    port:process.env.PORT2
})


module.exports=client