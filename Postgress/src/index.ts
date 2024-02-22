// WRITE A FUNCTION TO CREATE A USERS TABLE IN YOUR DB
import { Client } from 'pg'
 
const client = new Client({
  connectionString:"postgresql://radhasharma2786:kNxApf4G9VUS@ep-lingering-wildflower-a5tnj8s9.us-east-2.aws.neon.tech/First-Db?sslmode=require"
})



async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

async function insertData() {
    const result = await client.query(`
    INSERT INTO users(username , email , password)
    VALUES("Radha","radhasharma2786@gmail.com",12345678);
    `);
    console.log("user data inserted successfully",result);
}

createUsersTable();