// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.

<<<<<<< HEAD
=======

>>>>>>> 90587210c21fbb12efae0ebe41a9322713bc306c
function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){
<<<<<<< HEAD
   
   var result = {};
   
   result.upper=upperbound;
   result.rand=randInt(upper)
   result.counter=0
   result.numOfGuesses=numOfGuesses
   result.giveUp=giveUp
  result.counter++;
  return result
    
}
 var guessMyNumber=function(n){
      this.counter++;
      if (n > this.upper) {
        return "Out of bounds! Please try a number between 0 and " + this.upper+ ".";
      } else if (n === this.rand) {
        return "You guessed my number!";
      }
      return "Nope! That wasn't it!";
    };
      var giveUp=function(){
      return this.rand;
    };
     var numOfGuesses=function(){
      return this.counter;
    }
=======
  var upper=upperbound;
  var rand=randInt(upper)
  var counter=0;
  return {
  	guessMyNumber:function(n){
  		counter++;
	    if (n > upper) {
	      return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
	    } else if (n === rand) {
	      return "You guessed my number!";
	    }
	    return "Nope! That wasn't it!";
  	},
  	giveUp:function(){
    	return rand;
  	},
  	numOfGuesses:function(){
    	return counter;
  	}
  }
}
>>>>>>> 90587210c21fbb12efae0ebe41a9322713bc306c
