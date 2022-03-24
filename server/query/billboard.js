const db = require("../connection/pg");
const Joi = require("joi");

const idSchema = Joi.object().keys({
  id: Joi.string().guid().required(),
});

module.exports = {
  async fetchById(id) {
    const validation = idSchema.validate({ id });
    if (validation.error) {
      console.error(validation.error);
      return validation.error;
    } else {
      const billboard = await db.query(`SELECT * FROM billboards WHERE id = '${id}'`);
      return billboard.rows;
    }
  },

  async fetchAll() {
    const billboards = await db.query(`SELECT * FROM billboards`);
    return billboards.rows;
  },
};
