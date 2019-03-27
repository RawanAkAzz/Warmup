/* 
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
You may assume that each input would have exactly one solution.
Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/


function twoSum(nums,target) { //creat function
 var arr=[];
 for (var i =0;i<arr.length; i++){ // creat two loops the first one to check index and the scound one for element 
   for (var j =0; j<arr.length; j++) { // and use if statment to compare between sumation and target and after that push the result to array
 	 if(nums+nums===target){ // return arr
 	 	arr.puh(nums[i]);
 	 	arr.puh(nums[j]);
 	 }
 	}
 return arr;
 }
}
var a=twoSum(nums,9); 