/**
 * getFactorial: GIven a number, 5, it should return its factorial = 5*4*3*2*1
 */
function getFactorial(number){
    if (number == 0) {
        return 1;
    } else {
        return number * getFactorial(number-1);
    }
}
getFactorial(5); // Output : 120

/**
 * getCommonGreaterDivisor: Given two positive numbers, i should return their commont greater division
 */
function getCommonGreaterDivisor(a, b) {
    if ( ! b) {
        return a;
    }

    return getCommonGreaterDivisor(b, a % b);
};
getCommonGreaterDivisor(10, 140); // Output : 10


/**
 * getIntegersBetweenNumbers: Given two positive numbers, i should return an array with all the integers in between
 */
function getIntegersBetweenNumbers(a, b) {
    if (a == b-1) {
        return [];
    } else {
        let list = getIntegersBetweenNumbers(a, b-1)
        list.push(b-1);
        return list
    }
};
getIntegersBetweenNumbers(10, 16); // Output : [ 11, 12, 13, 14, 15 ]


/**
 * sumIntegersInArray: Given an array of positive numbers, return the sum of all of them
 */
function sumIntegersInArray(array) {
    if (!array.length) {
        return 0;
    } else {
        return array[0] + sumIntegersInArray(array.splice(1))
    }
};
sumIntegersInArray([1, 2, 3, 4, 5]); // Output : 15

/**
 * getExponentialNumber: Given a number and a certain exponent, give the result of number**exponent
 */
function getExponentialNumber(number, exponent) {
    if (exponent === 1) {
        return number;
    } else {
        return number * getExponentialNumber(number, exponent-1)
    }
};
getExponentialNumber(2, 2); // Output : 4


/**
 * getFibonacciNumbers: Given a number n, return the first n numbers in fibonaccis series
 */
function getFibonacciNumbers(n) {
    if (n === 2) {
        return [0, 1]
    } else {
        let fibonacciArray = getFibonacciNumbers(n-1);
        fibonacciArray.push(fibonacciArray[n-2] + fibonacciArray[n-3]);
        return fibonacciArray;
    }
};
getFibonacciNumbers(12); // Output : [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

/**
 * binarySearch: Given a numberToFind return its index in the array
 */
Array.prototype.binarySearch = function(numberToFind) {
    let halfLength = parseInt(this.length / 2);
    let halfArrayLeft  = this.slice(0, halfLength);
    let halfArrayRight = this.slice(halfLength);

    if (halfArrayLeft.length == 1 && halfArrayLeft[0] === numberToFind ) {
        return 0; //Nothing to sum
    }

    if (halfArrayRight.length == 1 && halfArrayRight[0] === numberToFind) {
        return 1; //Nothing to sum
    }

    if (halfArrayRight[0] > numberToFind) {
        return halfArrayLeft.binarySearch(numberToFind);
    } else {
        return halfLength + halfArrayRight.binarySearch(numberToFind);
    }
};
[0,1,2,3].binarySearch(3); // Output : 3 (index at 3 in array this)


/**
 * mergeSort: When called mergeSort from an array it returns that same array in order, doing a merge sort algorythm
 */
Array.prototype.mergeSort = function() {
    let halfLength = parseInt(this.length / 2);
    let halfArrayLeft  = this.slice(0, halfLength);
    let halfArrayRight = this.slice(halfLength);

    if (halfArrayLeft.length === 1 && halfArrayRight.length === 1) {
        if (halfArrayLeft[0] > halfArrayRight[0]) {
            return [ ...halfArrayRight, ...halfArrayLeft ]
        } else {
            return [ ...halfArrayLeft, ...halfArrayRight ]
        }
    }

    let leftOrderedList;
    if (halfArrayLeft.length > 1) {
        leftOrderedList = halfArrayLeft.mergeSort();
    } else {
        leftOrderedList = halfArrayLeft;
    }

    // We want to call merge sort until we get each half of length 1 [1,2] => halfLeft [1] && halfRight [2]
    let rightOrderedList;
    if (halfArrayRight.length > 1) {
        rightOrderedList = halfArrayRight.mergeSort();
    } else {
        rightOrderedList = halfArrayRight;
    }

    let smallerList = leftOrderedList.length < rightOrderedList.length ? leftOrderedList : rightOrderedList;
    let largerList  = leftOrderedList.length >= rightOrderedList.length ? leftOrderedList : rightOrderedList;

    let orderedList = [ ...largerList ];

    // We iterate over each element in the smallerList and insert it into the `orderedList` array
    smallerList.forEach((smallerElem) => {
        const nextPosition = orderedList.findIndex((largerElem) => smallerElem <= largerElem);
        if (nextPosition < 0) {
            orderedList = [ ...orderedList, smallerElem ]
        } else {
            orderedList = [
                ...orderedList.slice(0, nextPosition),
                smallerElem,
                ...orderedList.slice(nextPosition)
            ]
        }
    })
    return orderedList
};

[4, 2, 1, 6, 5, 3].mergeSort();