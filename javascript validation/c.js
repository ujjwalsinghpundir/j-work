q1=function isBoolean(value) {
  return typeof value === 'boolean';
}

console.log(isBoolean(true));    
console.log(isBoolean(false));   
console.log(isBoolean(0));       
console.log(isBoolean('true'));  

q2=function isError(value) {
  return value instanceof Error;
}

q3=function isNaNValue(value) {
  return typeof value === 'number' && Number.isNaN(value);
}

q4=function isNull(value) {
  return value === null;
}

q5=function isNumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}


q6=function isObject(value) {
  return value !== null && typeof value === 'object';
}


q8=function isRegExp(value) {
  return value instanceof RegExp;
}


q9=function isChar(value) {
  return typeof value === 'string' && value.length === 1;
}

q10=function areSameType(val1, val2) {
  return typeof val1 === typeof val2;
}
