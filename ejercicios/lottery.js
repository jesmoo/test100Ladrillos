function loterry(num) {
  if (typeof num !== 'number') {
    return 'It must be a number';
  }
  if (num < 0) {
    return 'You cannot withdraw money if you owe the bank';
  }
  if (num === 0) {
    return 0;
  }

  const bills = [100, 20, 10, 5, 1];
  let count = 0;
  let bill = 0;

  while (num !== 0) {
    if (num >= bills[count]) {
      bill++;
      num = num - bills[count];
    } else {
      count++;
    }
  }
  return bill;
}

module.exports = loterry;
