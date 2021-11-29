let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < array.length; index += 1) {
    if (array[index+1] == undefined) {
        array2[index] = array[index] * 2;
    }

    else {
    array2[index] = array[index] * array[index+1];
    }
}
console.log(array2);
