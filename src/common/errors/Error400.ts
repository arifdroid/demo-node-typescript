// import { i18n, i18nExists } from '../i18n';

/**
 * Error with code 400
 */
export default class Error400 extends Error {
  code: Number;

  constructor(messageCode?: any, ...args: any) {
    let message;


    message =messageCode;

    super(message);
    this.code = 400;
  }
}
