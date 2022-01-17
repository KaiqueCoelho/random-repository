function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
describe ('Removes an array item', () =>{
  it('Removes 3 from the array 1 2 3 4', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  })
  it('Removes 3 from the array 1 2 3 4 and doesnt return 1 2 3 4', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
  })
  it('Removes 5 from the array 1 2 3 4', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  })

})