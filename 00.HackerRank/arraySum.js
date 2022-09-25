//$$$$$$$$$$$$$$$$$$$$$$$$$$ First Problem $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//Given an array of integers, find the sum of its elements. Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

function simpleArraySum(ar) {
    let result;
	for(let i=0; i<ar.length; i++){
   		 result = result+ar[i]
	}
return result;
}

