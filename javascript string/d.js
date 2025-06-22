q1=function is_string(input) {
  return typeof input === 'string' || input instanceof String;
}
console.log(is_string('w3resource'));  
console.log(is_string([1, 2, 4, 0]));

q2=function is_Blank(input) {
  return input === '';
}
console.log(is_Blank(''));     
e

q3=function string_to_array(str) {
  return str.trim().split(" ");
}
console.log(string_to_array("Ujjwal Singh Pundir"));


q4= function truncate_string(str, num) {
  return str.substring(0, num);
}
console.log(truncate_string("Ujjwal", 4));"

q5=function abbrev_name(name) {
  let parts = name.split(' ');
  if(parts.length === 1) return parts[0];
  return parts[0] + ' ' + parts[1][0] + '.';
}
console.log(abbrev_name("Ujjwal Pundir"));
q6=function protect_email(email) {
  let [user, domain] = email.split('@');
  let hiddenUser = user.slice(0, 5) + '...';
  return hiddenUser + '@' + domain;
}

console.log(protect_email("robin_singh@example.com"));  // "robin...@example.com"


q7=function string_parameterize(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');  
}
console.log(string_parameterize("Robin Singh from USA."));


q8=function capitalize(str) {
  if (!str) return '';
  return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalize('js string exercises'));

q9=function capitalize_Words(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}
console.log(capitalize_Words('js string exercises'));


q10=function swapcase(str) {
    return str.split('').map(function(char) {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}
console.log(swapcase('AaBbc'));

q13=function repeat(str, n = 1) {
  return str.repeat(n);
}

q15=function humanize_format(num) {
  if (num % 100 >= 11 && num % 100 <= 13) return num + 'th';

  switch (num % 10) {
    case 1: return num + 'st';
    case 2: return num + 'nd';
    case 3: return num + 'rd';
    default: return num + 'th';
  }
}
