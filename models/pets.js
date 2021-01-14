/* eslint-disable class-methods-use-this */
var knexClass = require('knex');
var Config = require('../knex');
const Model = require('objection').Model;

const dbConfig = Config.development;

const knex = knexClass(dbConfig);
Model.knex(knex);

class Pets extends Model {
  static get tableName() {
    return 'pets';
  }

}

module.exports = Pets;
