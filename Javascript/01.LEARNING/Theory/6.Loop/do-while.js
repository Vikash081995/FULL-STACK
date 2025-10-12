function printArray(a) {
  let len = a.length,
    i = 0;

  if (len === 0) {
    console.log("Empty array");
  } else {
    do {
      console.log(a[i]);
      i++;
    } while (i < len);
  }
}
