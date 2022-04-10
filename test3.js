function payment(price, nums) {
  if (price < 0 || price > 100000) {
    return "price must be in the range of 0 to 100000";
  }
  if (nums <= 0 || nums > 10) {
    return "number of money must be in the range of 1 to 10";
  }
  const rupiah = [1000, 2000, 5000, 10000, 20000, 50000, 100000];
  let result = [];
  for (let i = nums; i >= 1; i--) {
    if (price > 0) {
      if (rupiah.find((e) => e === price / i)) {
        for (let j = 0; j < i; j++) {
          result.push(price / i);
        }
        price -= price * i;
      } else {
        let rupiahFiltered;
        if (price === 1000) {
          rupiahFiltered = rupiah
            .filter((e) => e <= price)
            .sort(function (a, b) {
              return a - b;
            });
        } else {
          rupiahFiltered = rupiah
            .filter((e) => e < price)
            .sort(function (a, b) {
              return a - b;
            });
        }
        result.push(rupiahFiltered[rupiahFiltered.length - 1]);
        price -= rupiahFiltered[rupiahFiltered.length - 1];
      }
    }
  }

  if (price > 0) {
    const temp = price + result.pop();
    result.push(rupiah.find((e) => e > temp));
  }

  return result;
}

console.log(payment(17000, 1));
console.log(payment(24000, 2));
console.log(payment(23000, 4));
console.log(payment(10000, 5));
