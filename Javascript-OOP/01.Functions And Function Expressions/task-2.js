/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(from, to) {
	var primes = [];

	if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
		throw 'Error';
	}
	
	from = +from;
	to = +to;

	if (isNaN(from) || isNaN(to)) {
		throw 'Error';
	}

	var j;

	function isPrime(num) {

		if (num < 2) {
			return false;
		}

		var i,
			prime = true;

		for (i = 2; i <= Math.sqrt(num); i += 1) {
			if (num % i == 0) {
				prime = false;
			}
		}

		return prime;
	}

	for (j = from; j <= to; j += 1) {

		if (isPrime(j)) {
			primes.push(j);
		}
	}

	return primes;
}

module.exports = findPrimes;