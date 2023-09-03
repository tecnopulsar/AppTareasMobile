import mysql from 'mysql2/promise'
import {config} from './config.js'

export const connectDB = async () =>{
    return await mysql.createConnection(config);
}


