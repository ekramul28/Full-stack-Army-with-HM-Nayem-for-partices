{
  let arr = [];
  for (let i = 0; i < 5000000; i++) {
    arr.push({
      id: i,
      value: i,
    });
  }

  console.time("time");
  let id = 499999;
  const obj = arr.find((item) => item.id === id);
  obj.value = 555;
  console.timeEnd("time");

  //object
  let arrToObject = {};
  for (let i = 0; i < 5000000; i++) {
    arrToObject[i] = {
      id: i,
      value: i,
    };
  }
  console.time("time");
  arrToObject[id].value = 555;
  console.timeEnd("time");
}
