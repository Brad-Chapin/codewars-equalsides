function findEvenIndex (arr) {
  for (let i = 0; i < arr.length; i++) {
    let left, right, leftSum, rightSum;
    if ( i == 0) {
      left = arr.slice(0, 1);
    } else {
      left = arr.slice(0, i);
    }
    right = arr.slice(i + 1);
    leftSum = left.reduce(function(a,b){
      return a+b;
    }, 0);
    rightSum = right.reduce(function(a,b){
      return a+b;
    }, 0);
    if (leftSum == rightSum) {
      return i;
    }
  }
  return -1;
  }
console.log((findEvenIndex([1,2,3,4,3,2,1]))); //3
console.log((findEvenIndex([1,100,50,-51,1,1]))); //1
console.log((findEvenIndex([1,2,3,4,5,6]))); //-1
