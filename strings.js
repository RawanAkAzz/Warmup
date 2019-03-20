// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		
     var string = "";

      while (n > 0) { 
 
      string += s; 
       n--; 
  }
  
  return string; 
}

repeatStr("hello", 3);//your code is here
	}