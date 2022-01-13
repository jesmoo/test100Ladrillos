function dataCenter(area) {
  if (area === 0) {
    return 0;
  }
  if (typeof area !== 'number') {
    return 'It must be a number';
  }

  let height = 0;
  let base = 0;
  let perimeter = 0;

  for (let i = 0; i <= Math.floor(Math.sqrt(area)); i++) {
    if (area % i === 0) {
      height = i;
      base = area / i;
    }
    perimeter = 2 * height + 2 * base;
  }
  return perimeter;
}

module.exports = dataCenter;
