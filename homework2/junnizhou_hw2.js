/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
  ];


  const geneDouble = itemsObject.map((ele) => {
    return {quantity: ele.quantity * 2, price: ele.price * 2};
  });
  console.log(geneDouble);
  

  const geneLarger = itemsObject.filter((ele) => {
    return ele.quantity > 2 && ele.price > 300;
  });
  console.log(geneLarger);


  const geneSum = itemsObject.reduce((acc, ele) => {
    return acc + ele.quantity * ele.price;
  }, 0);
  console.log("total sum is " + geneSum);



  
  /*
  Question 2
  Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
  */
  
  const string =
    ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ';
  
  const expectedReturnString =
    'perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array';
  
    const resultString = string.trim().replace(/(\s)+[^a-zA-Z0-9]/g, " ").toLowerCase();

    console.log(resultString);

  /*
  Question 3
  Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
  */
  
  const first = [
    { uuid: 2, name: 'test' },
    { uuid: 5, name: 'test5' },
    { uuid: 3, name: 'test3' },
  ];
  
  const second = [
    { uuid: 6, role: 'pm' },
    { uuid: 4, role: 'engineer' },
    { uuid: 1, role: 'manager' },
    { uuid: 2, role: 'associate' },
  ];
  
  const expectedReturnArray = [
    { uuid: 1, role: 'manager', name: null },
    { uuid: 2, role: 'associate', name: 'test' },
    { uuid: 3, role: null, name: 'test3' },
    { uuid: 4, role: 'engineer', name: null },
    { uuid: 5, role: null, name: 'test5' },
    { uuid: 6, role: 'pm', name: null },
  ];


  function mergeArray (first, second) {
    const uuidSet = new Set([...first, ...second].map(arr => arr.uuid));
    const merged = [];

    for (let uuid of uuidSet) {
      const getFirst = first.find(arr => arr.uuid === uuid);
      const getSecond = second.find(arr => arr.uuid === uuid);

      merged.push({
        uuid: uuid,
        role: getSecond?.role || null,
        name: getFirst?.name || null
      });
    }

    merged.sort((a, b) => a.uuid - b.uuid);
    return merged;
  };

  console.log(mergeArray(first, second));

