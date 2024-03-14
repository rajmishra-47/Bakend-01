const client = require('./connectionDB');

const message1 = () => {
    return new Promise((resolve, reject) => {
        // client.connect();
        client.query(`select * from Wells order by Wname`, (err, data) => {
            if (err) {
                reject(err); 
            } else {
                resolve(JSON.stringify(data.rows)); 
            }
        });
    });
};


const message2 = () => {
    return new Promise((resolve, reject) => {
        // client.connect();
        client.query(`select * from Res order by ResName`, (err, data) => {
            if (err) {
                reject(err); 
            } else {
                resolve(JSON.stringify(data.rows)); 
            }
        });
    });
};



const message3=(a,b)=>{

    return new Promise((resolve, reject) => {
        // client.connect();
        client.query('update Wells set wval=$1 where wname=$2',[a,b],(err, data) => {
            if (err) {
                reject(err); 
            } else {
                resolve(data); 
            }
        });
    });
}



const message4=(a,b)=>{

    return new Promise((resolve, reject) => {
        // client.connect();
        console.log(a,b)
        client.query(`update Res set resval=$1 where resname=$2`,[a,b],(err, data) => {
            if (err) {
                reject(err); 
            } else {
                resolve(data); 
            }
        });
    });
}




module.exports={ message1, message2 , message3 , message4}