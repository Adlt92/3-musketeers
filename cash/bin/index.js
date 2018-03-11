#!/usr/bin/env node
/** Import the librairie */
const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();
/**keep the command line and select the second part with the arguments*/
const argv = process.argv.slice(2);

/**
 * @param {string} argv it's the command 
 */
helpers(argv);
/** divise arguments in a json format
 * @param {json} command 
 * @param {float} amount is required, it is a  float
 * @param {string} from is the origin currencie by default usd 
 * @param {string} to it's currencies for the output
 * if thenre is no currencies for the output the default currencies are usd eur gpb
 */
const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP'])
};

/** We start cash 
 * @param {json} command It's the arguments of the command line
*/
cash(command);
