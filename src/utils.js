const arrayItemsOperational = operational => array =>
  array.slice(1).reduce(operational, array[0])

// About 1.5x faster than the two-arg version of Array#splice().
export function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k]
  list.pop()
}
