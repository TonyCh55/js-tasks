const invert = (obj) => {
  const inverted = {};

  for (const key in obj) {
    inverted[obj[key]] = key;
  }
  return inverted;
};

console.log(invert({ a: "some", b: "object", c: 1 }));
