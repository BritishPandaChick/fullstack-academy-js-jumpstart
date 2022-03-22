var str = 'The morning is upon us.';

str.indexOf('m');
str.slice(4);
//return 'morning is upon us'
console.log(str);

str.indexOf('s');
str.slice(0, 14);
//return 'The morning is'

//Challenge

//beginSlice(-) ===> str.length = beginSlice
//endSlice (-) ===> str.length + endSlice

str.length + -1
str.slice(-1);

str.length + -1;
22

//4 and 19
str = str.slice(-19, -4);
console.log(str);

//str.length + -4;

//str.length + -19;
