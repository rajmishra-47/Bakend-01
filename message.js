const client = require('./connectionDB');

const message1 = () => {
    return new Promise((resolve, reject) => {
        client.connect();
        client.query(`SELECT * FROM wellsinfo`, (err, data) => {
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
        client.connect();
        client.query(`SELECT * FROM ReservoirInfo`, (err, data) => {
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
        client.connect();
        client.query(`update wellsinfo set wellsdata= $1 where wellsdata=$2`,[a,b],(err, data) => {
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
        client.connect();
        client.query(`update ReservoirInfo set resdata= $1 where resdata=$2`,[a,b],(err, data) => {
            if (err) {
                reject(err); 
            } else {
                resolve(data); 
            }
        });
    });
}




module.exports={ message1, message2 , message3 , message4}