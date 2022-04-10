import fetch from "node-fetch";

function convertCurrency(array) {
  let result = Promise.all(
    array.map(async (e) => {
      const resp = await fetch(`https://api.frankfurter.app/latest?amount=${e.amount}&from=${e.currency}&to=USD`, { method: "GET" });
      const result = await resp.json();
      return result.rates.USD;
    })
  );
  return result;
}

convertCurrency([
  { amount: 15000.0, currency: "IDR" },
  { amount: 3.1, currency: "EUR" },
]).then((data) => {
  console.log(data);
});
