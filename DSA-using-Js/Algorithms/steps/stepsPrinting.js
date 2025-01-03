function steps(n) {
  for (let row = 0; row < n; j++) {
    let stairs = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stairs += "#";
      } else {
        stairs += " ";
      }
    }
  }
}

