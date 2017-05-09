function noTeenSum( a,  b, c) {
  a = fixTeen(a);
  b = fixTeen(b);
  c = fixTeen(c);

  return a + b + c;
}

  function fixTeen(n){

  if (n>=13 && n <= 19 && !(n==15 || n==16))
  {
    return 0;
  }

  else
  {
     return n;
  }

}
console.log("Hello"+noTeenSum(2,15,14));

