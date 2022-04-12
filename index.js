const limit = 2;
const amounts = [8, 6, 4,2];


const getFinalOrder = (limit, badges) => {
  var query = [];

  let orders = badges.map((item, index) => {
    return {number:item,order:index+1};
  });
  console.log('hello from orders ',{orders})

  // get orders query 

  const queue = [];

  while (orders.length > 0) {
    let firstElem= orders.shift();
    if (firstElem.number > limit) {
      orders.push({number:firstElem.number-limit,order:firstElem.order});
    } else {
      queue.push(firstElem.order);
    }
  }

  return queue;
};


let example1 = [2,4,6,8]
  let example2 = [8,6,4,2]
  let example3 = [4,6,8,2]
  let example4 = [4444,6666,8888,2222]
  let example5 = [5,55,6,24]
console.log(getFinalOrder(2, example1)) // ==> [1 , 2 , 3 , 4]
console.log(getFinalOrder(2, example2)) // ==> [4 , 3 , 2 , 1]
console.log(getFinalOrder(4, example3))  // ==> [1 , 4 , 2 , 3]
console.log(getFinalOrder(2, example4))  // ==> [4 , 1 , 2 , 3]
console.log(getFinalOrder(12, example5))  // ==> [1 , 3 , 4 , 2]
