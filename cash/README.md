# cash

## Installation


* To use index.js you need to intall node.js (if you don't have this download on yhis link: https://nodejs.org/en/download/)
* We use npm to install the other librairies
So write this in the CMD :
```
> npm install con
> npm install chalk
> npm install update-notifier
> npm install got
> npm install money
> npm install ora
```


* To check if index.js open the folder with cash.js and execute this:
```
> cd C:\User\Username\Document\3-musketters\cash\bin
> node index.js

$ node bin/index.js 1 usd

$ node bin/index.js 1 usd eur pln aud

$ node bin/index.js --save usd eur pln aud

$ node bin/index.js --help
```

## Usage
Cash is used to know the value of a sum of money from one currency to another.

* After the command index.js you can indicate the amount ou money and the currencie like this.
```
> node index.js 45 usd

√ 45.00 (USD) US Dollar
√ 36.23 (EUR) Euro
√ 152.31 (PLN) Polish Zloty
√ 57.65 (AUD) Australian Dollar
```
So here the program convert 45$ in the most used currencies.


* you can indicate the currencies that you want in a third argument like this:
```
> node index.js 45 usd eur

√ 36.23 (EUR) Euro

> node index.js 45 usd eur  cad

√ 36.23 (EUR) Euro

√ 58.13 (CAD) Canadian Dollar
```
* You can save you result with add '--save' before the arguments.
```
> node index.js --save 45 usd eur  cad

Saved default currencies to C:\Users\adela\AppData\Local\cash-nodejs\Config\config.json
```
You can open the json file in the path.


if you don't find a command you can execute the helper
```
> node index.js --help

$ node bin/index.js 1 usd

$ node bin/index.js 1 usd eur pln aud

$ node bin/index.js --save usd eur pln aud

$ node bin/index.js --help
```