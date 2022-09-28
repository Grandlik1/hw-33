'use strict';

// Написать функцию generateList(array),
// которая принимает массив из чисел и массивов чисел (например [1,2,3]) и генерирует список из элементов:
// А если в массиве встречается массив (например, [1,2, [1.1,1.2,1.3] ,3])
// то делать вложенный список. Для проверки на массив используйте Array.isArray()

const array = [ 1 , 2 ,[ 1 , 2 , 3, 4, 5], 3, 4, 5]
function generateList(array) {

    let ul = document.createElement('ul');
    document.body.append(ul)

    const generateListTwo = (array , list) => {
        for (let i = 0; array.length > i; i += 1){

            let li = document.createElement('li')

            if(Array.isArray(array[i])){
                let liUl = document.createElement('ul');
                li.append(generateListTwo(array[i], liUl));
            }
            else {
                li.innerHTML = array[i];
            }

            list.append(li)
        }
        return list
    }
 return generateListTwo(array, ul)
}
generateList(array)