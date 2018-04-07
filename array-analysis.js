const avg = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

const arrayAnalysis = (arr) => ({
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length,
  average: avg(arr)
});

module.exports = arrayAnalysis;
