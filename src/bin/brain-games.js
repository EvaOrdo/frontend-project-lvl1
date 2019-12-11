#! /home/ann/.nvm/versions/node/v13.3.0/bin/node
import { getName } from '../index.js';

console.log('Welcome to the Brain Games!');
const name = getName();
const greeting = `Hello, ${name}`;
console.log(greeting);
