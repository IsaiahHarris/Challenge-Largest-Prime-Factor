'use strict'
exports.largestPrimeFactor = function (n) {
  var primeNumber = 0;
  let primeFactors = [];

  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      primeFactors.push(i);
      n /= i;
    }
  }

  if (n > 0) {
    primeFactors.push(n);
  }

  primeNumber = primeFactors.pop();

  return primeNumber;
};