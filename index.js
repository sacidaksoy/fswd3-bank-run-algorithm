const k = 400;
const amounts = [300, 500, 100];

const getFinalOrder = (limit, badges) => {
  var orders = [];
  var query = [];

  for (let i = 0; i < badges.length; i++) {
    orders.push([i + 1, badges[i]]);
  }

  while (orders.length !== 0) {
    for (let i = 0; i < orders.length; i++) {
      for (let j = 0; j < orders[i]?.length; j++) {
        if (limit >= orders[i][j + 1]) {
          query.push(orders[i][j]);
          orders.splice(i, 1);
        } else if (limit < orders[i][j + 1]) {
          orders[i][j + 1] = orders[i][j + 1] - limit;
          orders.push(orders.splice(i, 1)[0]);
        }
      }
    }
  }

  return query

};

console.log(getFinalOrder(k, amounts));
