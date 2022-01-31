const getPosition = (latitude, longitude) => ({
  latitude,
  longitude
});

console.log(getPosition(-19.8157, -43.9542));


const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));