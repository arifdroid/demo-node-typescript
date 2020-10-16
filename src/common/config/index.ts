require('dotenv').config();

export function getConfig(): any {
    return process.env;
  }