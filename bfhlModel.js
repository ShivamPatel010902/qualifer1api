exports.processData = async (data) => {
    const numbers = [];
    const alphabets = [];
    const highestLowercaseAlphabet = [];
    let isPrimeFound = false;
  
    data.forEach((item) => {
      if (!isNaN(item)) {
        numbers.push(item);
        if (isPrime(Number(item))) {
          isPrimeFound = true;
        }
      } else {
        alphabets.push(item);
        if (item === item.toLowerCase() && item.charCodeAt(0) > highestLowercaseAlphabet.charCodeAt(0)) {
          highestLowercaseAlphabet.push(item);
        }
      }
    });
  
    return {
      is_success: true,
      user_id: 'john_doe_17091999',
      email: 'john@xyz.com',
      roll_number: 'ABCD123',
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet,
      is_prime_found: isPrimeFound,
    };
  };
  
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };
  