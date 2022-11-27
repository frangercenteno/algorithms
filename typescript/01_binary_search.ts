function searchBinary(list: Array<number>, elem: number) {
  let low: number = 0;
  let high: number = list.length - 1;
  
  
  while (low <= high) {
     const medium: number = (low + high) / 2;
     let estimate: number = list[Math.round(medium)];    
      if (estimate === elem) {
        return estimate;
      }
    
      if (estimate > elem) {
        high = medium - 1;
      } else {
        low = medium + 1;
      }
  }
  
  return null;

}

const mylist: Array<number> = [1, 3, 5, 7, 9];
  
console.log(searchBinary(mylist, 3));
console.log(searchBinary(mylist, -1));