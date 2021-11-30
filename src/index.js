import { todoFactory } from './todoFactory.js';

const newtodo = todoFactory('wash dogs', 'tomorrow', 'big priority');

console.log(newtodo.title);
console.log(newtodo.date);