function calculateMean(nums) {
  let total = 0;
  nums.forEach((element) => {
    total += element;
  });
  return total / nums.length;
}

function calculateMedian(nums) {
  let result = 0;
  // if the length is even
  if (nums.length % 2 === 0) {
    result = (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
  }
  // if the length is odd
  else {
    result = nums[Math.floor(nums.length / 2)];
  }
  return result;
}

function calculateAll(nums) {
  let result = [];
  let temp = [];

  // separate each part
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      temp.push(nums[i]);
    } else {
      temp.push(nums[i]);
      result.push(temp);
      temp = [];
    }
  }

  // calculate mean and median for each part
  let final = result.map((el) => {
    let obj = {
      mean: calculateMean(el),
      median: calculateMedian(el),
    };
    return obj;
  });
  return final;
}

console.log(calculateAll([3, 4, 6, 17, 25, 21, 23]));
