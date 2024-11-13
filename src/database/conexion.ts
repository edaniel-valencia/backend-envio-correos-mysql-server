import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1004-TSE',
    database: 'email-send'
});

const connection = pool.promise();

export default connection;



// import mysql from 'mysql2';


// // Crear una conexión única en lugar de un pool
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1004-TSE',
//     database: 'email-send'
// });

// export default connection.promise(); 