const client = require('./connectionDB');

const WellData = () => {
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


const ResData = () => {
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



const UpdateWellData=(a,b)=>{

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



const UpdateResData=(a,b)=>{

    return new Promise((resolve, reject) => {
        // client.connect();
        console.log(a,b)
        client.query(`update Res set resval=$1 where resname=$2`,[a,b],(err, data) => {
            if (err) {
                reject(err); 
                console.log('message err');
            } else {
                resolve(data); 
                console.log('message sucess');
            }
        });
    });
}




module.exports={ WellData, ResData , UpdateWellData , UpdateResData}