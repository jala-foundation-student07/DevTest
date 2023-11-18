const { Client } = require("pg");
const pool = require("../db");

const client = new Client({
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: 5432,
});

async function createDB(){
  await client.connect();

  await client.query("CREATE DATABASE testdb;");
  console.log("DB created!");

  await client.end();

  pool.query("CREATE TABLE tasks(ID SERIAL PRIMARY KEY, DEADLINE DATE, CATEGORY TEXT, STATUS TEXT, DESCRIPTION TEXT, DELETE_STATUS BOOLEAN NOT NULL, LAST_UPDATE DATE NOT NULL);", (error, results) => {
    if(error) throw error;
    console.log("Table created!");
  })
}

createDB();
