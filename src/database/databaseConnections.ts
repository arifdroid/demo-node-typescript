
const models = require('./models');

let cached: any;

/**
 * Initializes the connection to the Database
 */
export function databaseInit() {
  // if (cached) {
  //   return cached;
  // }

  return models;
}