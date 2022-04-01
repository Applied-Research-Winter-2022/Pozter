const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  connectionString:
    process.env.CONNECTION ||
    "postgres://xeuoitdfbajouc:d0b1660244fb5a8d483ec3f4b6d197e512130b1df4dd75081cb0edeb70d7191f@ec2-52-21-136-176.compute-1.amazonaws.com:5432/dcgmcvbt1bt1gp",
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
