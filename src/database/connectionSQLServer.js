import mssql from "mssql"

const connectionSettings = {
    server: "localhost",
    database: "node_restapi",
    user: "admin",
    password: "admin",
    options:{
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConnection(){
    try {
        return await mssql.connect(connectionSettings);
    } catch (error) {
        console.log(error);
    }
}

export {mssql}