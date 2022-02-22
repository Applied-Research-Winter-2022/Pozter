const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  connectionString:
    process.env.CONNECTION ||
    "postgres://suouuqmdojtfaq:d7f5cd84f990774134883a897e3f2f2d175c3cfe89cc85da646fc09c098956d9@ec2-52-204-196-4.compute-1.amazonaws.com:5432/dab8ot0tk1fuod",
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
