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




module.exports={ message1, message2 }