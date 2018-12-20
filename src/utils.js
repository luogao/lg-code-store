const arrayItemsOperational = operational => array =>
  array.slice(1).reduce(operational, array[0])
