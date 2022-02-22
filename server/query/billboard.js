const db = require("../connection/pg");
const express = require("express");
const router = express.Router();
const Joi = require("joi");

module.exports = {
  async fetchById(id) {
    const billboard = await db.query(`SELECT * FROM billboards WHERE billboard_id = '${id}'`);
    return billboard;
  },

  async fetchAll() {
    const billboards = await db.query(`SELECT * FROM billboards`);
    return billboards;
  },
};
