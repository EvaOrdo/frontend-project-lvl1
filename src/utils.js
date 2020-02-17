export const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);

export const isEven = (num) => num % 2 === 0;

export const isPrime = (num) => {
    for (let i = 2; i < Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

export const getGcd = (a, b) => {
    while (a !== b) {
        if (a > b) {
          a -= b;
        } else {
          b -= a;
        }
      }
    return a.toString();  
};  

export const calcExpression = (num1, num2, sign) => {
  switch(sign) {
    case '+':  
    return (num1 + num2).toString();
    break;
    case '-':
    return (num1 - num2).toString();
    break;
    case '*':
    return (num1 * num2).toString();
    break;
  }
};
