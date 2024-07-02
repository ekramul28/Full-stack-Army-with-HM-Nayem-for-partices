{
  //map
  const mapNumber = [1, 2, 3];
  const strs = mapNumber.map((v) => v.toString());
  //filter
  const filterNumber = [1, 2, 3, 4, false, "", NaN, 5, 6];
  const filtered1 = filterNumber.filter((v) => v);
  console.log(filtered1);
  //console log=[ 1, 2, 3, 4, 5, 6 ] filter only return true value
  const filtered2 = filterNumber.filter((v) => !v);
  console.log(filtered2);
  //console log=[ false, '', NaN ] filter only return false value

  //reduce
  const sum = mapNumber.reduce((a, b) => a + b);
  console.log(sum); //output 6

  /**
   * Map =return []
   * Filter =return[with filter item]
   * Reduce =know one knows(only i know)
   */
  const reduceArray = [1, 4, 5, 6, 7, 89, 97, 5, 3, 23];
  const sum2 = reduceArray.reduce((a, b) => a + b);
}
