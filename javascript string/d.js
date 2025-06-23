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

function case_insensitive_search(str, searchStr) {
  if (str.toLowerCase().includes(searchStr.toLowerCase())) {
    return "Matched";
  } else {
    return "Not Matched";
  }
}
console.log(case_insensitive_search('JavaScript Exercises', 'exercises')); 
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises')); 
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));


q37-=function compare_strings(str1, str2) {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  return lowerStr1 === lowerStr2;
}
console.log(compare_strings('abcd', 'AbcD')); // true
console.log(compare_strings('ABCD', 'Abce')); // false

q35=function strip_html_tags(str) {
  return str.replace(/<[^>]*>/g, '');
}
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));

q34=function sentenceCase(str) {
  return str
    .toLowerCase()
    .split('. ') 
    .map(sentence => {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    })
    .join('. ');     "
}
console.log(sentenceCase('PHP exercises. python exercises.'));


q33-function remove_non_word(str) {
  return str.replace(/[^\w\s-]+/g, '');
}
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));

q30= function string_endsWith(str, suffix) {
  if (suffix === '') return false;
  return str.endsWith(suffix);
}
console.log(string_endsWith('JS PHP PYTHON', 'PYTHON'));  
console.log(string_endsWith('JS PHP PYTHON', ''));

q28=function hexToAscii(hex) {
  let ascii = '';
  for (let i = 0; i < hex.length; i += 2) {
    let hexPair = hex.substr(i, 2);
    let decimal = parseInt(hexPair, 16);
    ascii += String.fromCharCode(decimal);
  }

  return ascii;
}

console.log(hexToAscii('48656c6c6f'));       
console.log(hexToAscii('4a5320526f636b73'));

q26=function removeFirstOccurrence(str, search) {
  return str.replace(search, '');
}
console.log(removeFirstOccurrence('The quick brown fox jumps over the lazy dog', 'the'));

console.log(removeFirstOccurrence('Hello world, hello again!', 'hello'));


q25=function alphabetize_string(str) {
  return str.replace(/\s+/g, '')  
            .split('')            
            .sort()               
            .join('');            
}
console.log(alphabetize_string('JavaScript'));  
console.log(alphabetize_string('web dev'));


q24=function truncate(str, numWords) {
  const words = str.split(' ');
  const truncated = words.slice(0, numWords);

  return truncated.join(' ');
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));


q23=function strip(str) {
  return str.trim();
}
console.log(strip('w3resource ')); 
console.log(strip(' w3resource')); 
console.log(strip(' w3resource '));

q37-=function compare_strings(str1, str2) {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  return lowerStr1 === lowerStr2;

  q35=function strip_html_tags(str) {
  return str.replace(/<[^>]*>/g, '');
}
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));


  q34=function sentenceCase(str) {
  return str
    .toLowerCase()
    .split('. ') 
    .map(sentence => {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    })
    .join('. ');     "
}
console.log(sentenceCase('PHP exercises. python exercises.'));

q33-function remove_non_word(str) {
  return str.replace(/[^\w\s-]+/g, '');
}
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));

  q30= function string_endsWith(str, suffix) {
  if (suffix === '') return false;
  return str.endsWith(suffix);
}
console.log(string_endsWith('JS PHP PYTHON', 'PYTHON'));  
console.log(string_endsWith('JS PHP PYTHON', ''));


  q28=function hexToAscii(hex) {
  let ascii = '';
  for (let i = 0; i < hex.length; i += 2) {
    let hexPair = hex.substr(i, 2);
    let decimal = parseInt(hexPair, 16);
    ascii += String.fromCharCode(decimal);
  }

  return ascii;
}

console.log(hexToAscii('48656c6c6f'));       
console.log(hexToAscii('4a5320526f636b73'));

q26=function removeFirstOccurrence(str, search) {
  return str.replace(search, '');
}
console.log(removeFirstOccurrence('The quick brown fox jumps over the lazy dog', 'the'));

console.log(removeFirstOccurrence('Hello world, hello again!', 'hello'));

q25=function alphabetize_string(str) {
  return str.replace(/\s+/g, '')  
            .split('')            
            .sort()               
            .join('');            
}
console.log(alphabetize_string('JavaScript'));  
console.log(alphabetize_string('web dev'));

q24=function truncate(str, numWords) {
  const words = str.split(' ');
  const truncated = words.slice(0, numWords);

  return truncated.join(' ');
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

q23=function strip(str) {
  return str.trim();
}
console.log(strip('w3resource ')); 
console.log(strip(' w3resource')); 
console.log(strip(' w3resource '));
  
  
  
  
  
}
console.log(compare_strings('abcd', 'AbcD')); // true
console.log(compare_strings('ABCD', 'Abce')); // false


