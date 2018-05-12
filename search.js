
function search(arr, query) {

  let flat = [].concat.apply([], arr);
  let col = flat.indexOf(query);
  let row = -1;
  if (col != -1)
    while (arr[++row].length <= col)
      col -= arr[row].length

  return [row, col]
}

exports.search = search;