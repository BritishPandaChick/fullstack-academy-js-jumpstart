function truthyOrFalsy(val){
  console.log(val);
  if (val) {
    return "The value is truthy";
  } else {
    return "The value is falsy";
  }
}

truthyOrFalsy(NaN);
truthyOrFalsy(); //console log says undefined and will say false
truthyOrFalsy("javascript"); //return as truthy 
