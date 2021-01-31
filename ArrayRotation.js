/*
The functions rotate(arr[], d, n) in this file rotates arr[] of size n by d elements.
*/

function rotatingArrayMethod1(arr, d, n) {

    /*
    This method is using temp array:
    Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7
    1) Store the first d elements in a temp array
        temp[] = [1, 2]
    2) Shift rest of the arr[]
        arr[] = [3, 4, 5, 6, 7, 6, 7]
    3) Store back the d elements
        arr[] = [3, 4, 5, 6, 7, 1, 2]
    Time complexity : O(n)
    Auxiliary Space : O(d)
    */

    // Check if arr is defined or not.
    if (arr == undefined)
        throw "Your input array has not been defined!"

    // Check if arr is empty or not.
    if (arr.length == 0)
        throw "Your input array is empty!"
        
    // Check if d and/ or n is negative.
    if (d < 0 || n < 0) 
        throw "Input numbers cannot be negative!"

    // Check if n is different from the length of the array.
    if (n != arr.length)
        throw "The third input is not the correct size of the array!"

    /* 
    When d != n, we need to set the value of d to d % n.
    This is for some cases when d > n.
    */
    if (d != n)
        d = d % n;
    else
        return;

    // Declare temp to store the first d elements.
    var temp = [];
    for (var i = 0; i < d; i++) 
        temp[i] = arr[i];

    // Shift the rest of the array to new positions.
    for (var i = 0; i < n-d; i++) 
        arr[i] = arr[i+d];

    // Strore back d elements from temp.
    for (var i = 0; i < d; i++) 
        arr[n-d+i] = temp[i];
}

/*
*********************************************************************************************************************
*/

function rotatingArrayMethod2(arr, d, n) {
    
    /*
    This method is to rotate the array one by one.
    To rotate by one, store arr[0] in a temporary variable temp, 
        move arr[1] to arr[0], arr[2] to arr[1] …and finally temp to arr[n-1].
    Time complexity : O(n * d)
    Auxiliary Space : O(1)
    */

    // Check if arr is defined or not.
    if (arr == undefined)
        throw "Your input array has not been defined!"

    // Check if arr is empty or not.
    if (arr.length == 0)
        throw "Your input array is empty!"

    // Check if d and/ or n is negative.
    if (d < 0 || n < 0)
        throw "Input numbers cannot be negative!"

    // Check if n is different from the length of the array.
    if (n != arr.length)
        throw "The third input is not the correct size of the array!"

    /* 
    When d != n, we need to set the value of d to d % n.
    This is for some cases when d > n.
    */
    if (d != n)
        d = d % n;
    else
        return;
    
    // Create temp array to store one element from arr.
    var temp;

    // This for loop is to do the inner loop d times.
    for (var i = 0; i < d; i++) {

        // Set the value of temp to arr[0].
        temp = arr[0];

        // This for loop is to move all element of arr to the left by one position.
        for (var j = 0; j < n - 1; j++) 
            arr[j] = arr[j+1];
        
        // Set the value of last element of arr to temp.
        arr[n-1] = temp;
    }
}

/*
*********************************************************************************************************************
*/

function rotatingArrayMethod3(arr, d, n) {

    /*
    This is an extension of method 2. Instead of moving one by one, divide the array in different sets
    where number of sets is equal to GCD of n and d and move the elements within sets.
    If GCD is 1 as is for the above example array (n = 7 and d =2), then elements will be moved within one set only, 
        we just start with temp = arr[0] and keep moving arr[I+d] to arr[I] and finally store temp at the right place.
    */

    // Check if arr is defined or not.
    if (arr == undefined)
        throw "Your input array has not been defined!"

    // Check if arr is empty or not.
    if (arr.length == 0)
        throw "Your input array is empty!"

    // Check if d and/ or n is negative.
    if (d < 0 || n < 0)
        throw "Input numbers cannot be negative!"

    // Check if n is different from the length of the array.
    if (n != arr.length)
        throw "The third input is not the correct size of the array!"

    /* 
    When d != n, we need to set the value of d to d % n.
    This is for some cases when d > n.
    */
    if (d != n)
        d = d % n;
    else
        return;

    // Define i,j,k to store the index when swapping the elements.
    var i,j,k;

    // Define temp to strore tye element that need to be swapped.
    var temp;

    // Define gcd as the Greatest Common Divisor of d and n using the FindGCD function.
    var gcd = findGCD(d, n);

    // Use the for-loop to swap the elements in the array gcd times.
    for (i = 0; i < gcd; i++) {

        // Store arr[i] to temp.
        temp = arr[i];

        // Let j be the index of the element that needs to be swapped.
        j = i;

        // Swaps the elements arr[i], arr[i+d], arr[i+2d], ... .
        while (true) {

            // Store the index of next element to k.
            k = j + d;

            // When k is out of index, we come back to the beginning.
            if (k >= n)
                k = k - n;
            
            // When k = i, meaning we finished swapping, break the while loop.
            if (k == i)
                break;
            
            // Swap arr[j] to arr[j+d] aka arr[k].
            arr[j] = arr[k];

            // After swapping, change j to the index of the next element that need to be swapped.
            j = k; 
        }

        // temp (arr[i]) value is finally set for arr[j].
        arr[j] = temp;
    }
}

/*
This function takes two integer a and b as input and return their Greatest Common Divisor.
*/
function findGCD(a, b) {

    /*
    This function uses recursive method. It keeps devide a by b and let the reminder be the parameter
        of the next recursion until that result become 0. 
    */

    // Check if a and/or b is integers.
    if (a !== parseInt(a, 10) || (b !== parseInt(b, 10))) 
        throw "Your input must be two integers!"

    // Base case: when b = 0.
    if (b == 0)
        return a;
    
    // Recursive case.
    else 
        return findGCD(b, a % b); 
}

/*
*********************************************************************************************************************
*/

function rotatingArrayMethod4(arr , d, n) {

    /*
    This method reserves the parts of array and the array to get the rotated one.
    Let AB are the two parts of the input array where A = arr[0..d-1] and B = arr[d..n-1]. The idea of the algorithm is : 
        Reverse A to get ArB, where Ar is reverse of A.
        Reverse B to get ArBr, where Br is reverse of B.
        Reverse all to get (ArBr) r = BA.
    Example : 
        Let the array be arr[] = [1, 2, 3, 4, 5, 6, 7], d =2 and n = 7 
        A = [1, 2] and B = [3, 4, 5, 6, 7] 
        Reverse A, we get ArB = [2, 1, 3, 4, 5, 6, 7]
        Reverse B, we get ArBr = [2, 1, 7, 6, 5, 4, 3]
        Reverse all, we get (ArBr)r = [3, 4, 5, 6, 7, 1, 2]
    */

    // Check if arr is defined or not.
    if (arr == undefined)
        throw "Your input array has not been defined!"

    // Check if arr is empty or not.
    if (arr.length == 0)
        throw "Your input array is empty!"

    // Check if d and/ or n is negative.
    if (d < 0 || n < 0)
        throw "Input numbers cannot be negative!"

    // Check if n is different from the length of the array.
    if (n != arr.length)
        throw "The third input is not the correct size of the array!"

    /* 
    When d != n, we need to set the value of d to d % n.
    This is for some cases when d > n.
    */
    if (d != n)
        d = d % n;
    else
        return;
    
    // When d = 0, we don't need to rotate the array.
    if (d == 0)
        return;
    
    /*
    arr is now divided into two part : A: from arr[0] to arr[d-1] and
        B: from arr[d] to arr[n-1].
    */
    // Reverse A to get ArB, where Ar is reverse of A.
    reverseArray(arr, 0, d-1);

    // Reverse B to get ArBr, where Br is reverse of B.
    reverseArray(arr, d, n-1);

    // Reverse all to get (ArBr) r = BA.
    reverseArray(arr, 0, n-1);
}

/* 
This function reverse part of an array from given starting index to given ending index.
*/
function reverseArray(arr, start, end) {

    // Check if start and end are integers.
    if (start !== parseInt(start, 10) || end !== parseInt(end, 10))
        throw "Your input numbers must be integers!"

    // Check if 0 <= start < end.
    if (start < 0 || end <= 0 || end < start)
        throw "Input numbers must follow this rule: 0 <= starting index < ending index!" 
    
    // Defind temp to store elements when swapping.
    var temp;

    // Reserve the array:
    while (start < end) {
        
        // Store the first element to temp.
        temp = arr[start];

        // Swap the last element to the begginging.
        arr[start] = arr[end];
        
        // Swap the first element to the end.
        arr[end] = temp;

        // Increase start and decrease end.
        start++;
        end--;
    }
}

/*
*********************************************************************************************************************
*/

function rotatingArrayMethod5(arr, index, d, n) {
    /*
    Block swap algorithm for array rotation.
    Initialize A = arr[0..d-1] and B = arr[d..n-1]
    1) Do following until size of A is equal to size of B

    a)  If A is shorter, divide B into Bl and Br such that Br is of same 
        length as A. Swap A and Br to change ABlBr into BrBlA. Now A
        is at its final place, so recur on pieces of B.  

    b)  If A is longer, divide A into Al and Ar such that Al is of same 
        length as B Swap Al and B to change AlArB into BArAl. Now B
        is at its final place, so recur on pieces of A.

    2)  Finally when A and B are of equal size, block swap them.
    */
    // Check if arr is defined or not.
    if (arr == undefined)
        throw "Your input array has not been defined!"

    // Check if arr is empty or not.
    if (arr.length == 0)
        throw "Your input array is empty!"

    // Check if d and/ or n is negative.
    if (d < 0 || n < 0 || index < 0)
        throw "Input numbers cannot be negative!"

    /* 
    When d != n, we need to set the value of d to d % n.
    This is for some cases when d > n.
    */
    if (d != n)
        d = d % n;
    else
        return;

    if (d === 0) {
        return;
    }

    /*
    Create A : a[0,d-1], B: a[d,n-1]
    Case: A is shorter than B:
    if d < n-d then
        B: Bl: a[d,n-d-1] and Br: a[n-d,n-1]
        Swap A with Br: swap(a, index, n-d+index, d)
        Recur on B: BrBl  method5(a, index, d, n-d)
    */
    if (d < n - d) {
        swap(arr, index, n - d + index, d);
        rotatingArrayMethod5(arr, index, d, n-d);
    }

    /*
     Case: A is longer than B:
    else if d > n-d then
        A: Al: a[0,n-d-1] and Ar: a[n-d,d-1]
        Swap B with Al: swap(a, index, d, n-d)
        Recur on A: ArAl  method5(a[n-d,n-1], n-d+index, 2 * d - n, d)
    */
    else if (d > n-d) {
        swap(arr, index, d, n-d);
        rotatingArrayMethod5(arr, n - d + index, 2 * d - n, d);
    }

    /* 
    Case A = B
    else
        swap A with B: swap(a, index, n-d+index, d)
    */
    else 
        swap(arr, index, n -d + index, d);
}

function swap(arr, fi, si, d) {
    /*
    This function swaps d elements starting at index fi with 
        d elements starting at index si.
    */
    // Check if fi and si are integers.
    if (fi !== parseInt(fi, 10) || si !== parseInt(si, 10))
        throw "Your input numbers must be integers!"

    // Check if 0 <= fi < si.
    if (fi < 0 || si <= 0 || si < fi)
        throw "Input numbers must follow this rule: 0 <= first index < second index!"
   
   for (var i = 0; i < d; i++) {
       // Create variable temp to store arr[fi+i].
       var temp = arr[fi+i];

       // Swap arr[si+i] to the position of arr[fi+i].
       arr[fi+i] = arr[si+i];
       
       // Swap arr[fi+i] that is stored in temp to the position of arr[si+i].
       arr[si+i] = temp;
   }
}

/*
*********************************************************************************************************************
*/
function rotateArrayByOne(arr) {
    /*
    Given an array, cyclically rotate the array clockwise by one.
    Following are steps.
        1) Store last element in a variable say x.
        2) Shift all elements one position ahead.
        3) Replace first element of array with x.
    */

    // Check if arr is defined or not.
    if (arr == undefined)
        throw "Your input array has not been defined!"

    // Check if arr is empty or not.
    if (arr.length == 0)
        throw "Your input array is empty!"

    // Store last element in a variable say temp.
    var temp = arr[arr.length-1];

    // Shift all elements one position ahead.
    for (var i = arr.length-1; i > 0; i--)
        arr[i] = arr[i-1];
    
    // Replace first element of array with temp.
    arr[0] = temp;
}

/*
*********************************************************************************************************************
*/
/*
Tests for rotatingArrayMethod1.
*/
/* 
Test with input array = [1, 2, 3, 4, 5, 6, 7], 3, 7.
Expected output: [4, 5, 6, 7, 1, 2, 3].
*/

function rotatingArrayMethod1Test1() {

    console.log("rotatingArrayMethod1Test1");

    // Create the inputArray.
    var inputArray = [1, 2, 3, 4, 5, 6, 7];

    // Run rotatingArrayMethod1.
    try {
        rotatingArrayMethod1(inputArray, 3, 7);
        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (i <= 3) {
                if (inputArray[i] != i + 4)
                    console.log(false); 
            }
            else {
                if (inputArray[i] != i - 3)
                    console.log(false);
            }
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
Test with d < 0.
Expected output: Input numbers cannot be negative!
*/
function rotatingArrayMethod1Test2() {

    console.log("rotatingArrayMethod1Test2");

    // Run the rotatingArrayMethod1 function.
    try {
        rotatingArrayMethod1([1, 2, 3], -5, 3);
    } catch (err) {
        if (err == "Input numbers cannot be negative!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with n < 0.
Expected output: Input numbers cannot be negative!
*/
function rotatingArrayMethod1Test3() {

    console.log("rotatingArrayMethod1Test3");

    // Run the rotatingArrayMethod1 function in try.
    try {
        rotatingArrayMethod1([1, 2, 3], 2, -3);
    } catch (err) {
        if (err == "Input numbers cannot be negative!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with input array = undefinded.
Expected output: Your input array has not been defined!
*/
function rotatingArrayMethod1Test4() {

    console.log("rotatingArrayMethod1Test4");

    // Run the rotatingArrayMethod1 function in try.
    try {
        var inputArray;
        rotatingArrayMethod1(inputArray, 2, 5);
    } catch (err) {
        if (err == "Your input array has not been defined!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with empty input array.
Expected output: Your input array is empty!
*/
function rotatingArrayMethod1Test5() {

    console.log("rotatingArrayMethod1Test5");

    // Run the rotatingArrayMethod1 function in try.
    try {
        var inputArray = [];
        rotatingArrayMethod1(inputArray, 2, 5);
    } catch (err) {
        if (err == "Your input array is empty!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with n != the length of input array.
Expected output: The third input is not the correct size of the array!
*/
function rotatingArrayMethod1Test6() {

    console.log("rotatingArrayMethod1Test6");

    // Run the rotatingArrayMethod1 function in try.
    try {
        var inputArray = [1, 2, 3];
        rotatingArrayMethod1(inputArray, 2, 5);
    } catch (err) {
        if (err == "The third input is not the correct size of the array!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with d = 10 > n = 7, input array = [1, 2, 3, 4, 5, 6, 7].
Expected output: [3, 4, 5, 6, 7, 1, 2].
*/
function rotatingArrayMethod1Test7() {

    console.log("rotatingArrayMethod1Test7");

    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run rotatingArrayMethod1.
        rotatingArrayMethod1(inputArray, 10, 7);

        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (i <= 3) {
                if (inputArray[i] != i + 4)
                    console.log(false); 
            }
            else {
                if (inputArray[i] != i - 3)
                    console.log(false);
            }
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
Test with d = 0, input array = [1, 2, 3, 4, 5, 6, 7]
Expected output: input array = [1, 2, 3, 4, 5, 6, 7]
*/
function rotatingArrayMethod1Test8() {

    console.log("rotatingArrayMethod1Test8");

    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run rotatingArrayMethod1.
        rotatingArrayMethod1(inputArray, 0, 7);

        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (inputArray[i] != i + 1)
                console.log(false);
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
*********************************************************************************************************************
*/

/*
Tests for rotatingArrayMethod2.
*/
/* 
Test with input array = [1, 2, 3, 4, 5, 6, 7], 3, 7.
Expected output: [4, 5, 6, 7, 1, 2, 3].
*/

function rotatingArrayMethod2Test1() {

    console.log("rotatingArrayMethod2Test1");

    try { 
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run rotatingArrayMethod1.
        rotatingArrayMethod2(inputArray, 3, 7);

        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (i <= 3) {
                if (inputArray[i] != i + 4) {
                    console.log(false); 
                    return;
                }
            }
            else {
                if (inputArray[i] != i - 3) {
                    console.log(false);
                    return;
                }
            }
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
Test with d < 0.
Expected output: Input numbers cannot be negative!
*/
function rotatingArrayMethod2Test2() {

    console.log("rotatingArrayMethod2Test2");

    // Run the rotatingArrayMethod1 function in try.
    try {
        rotatingArrayMethod2([1, 2, 3], -5, 3);
    } catch (err) {
        if (err == "Input numbers cannot be negative!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with n < 0.
Expected output: Input numbers cannot be negative!
*/
function rotatingArrayMethod2Test3() {

    console.log("rotatingArrayMethod2Test3");

    // Run the rotatingArrayMethod1 function in try.
    try {
        rotatingArrayMethod2([1, 2, 3], 2, -3);
    } catch (err) {
        if (err == "Input numbers cannot be negative!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with input array = undefinded.
Expected output: Your input array has not been defined!
*/
function rotatingArrayMethod2Test4() {

    console.log("rotatingArrayMethod2Test4");

    // Run the rotatingArrayMethod1 function in try.
    try {
        var inputArray;
        rotatingArrayMethod2(inputArray, 2, 5);
    } catch (err) {
        if (err == "Your input array has not been defined!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with empty input array.
Expected output: Your input array is empty!
*/
function rotatingArrayMethod2Test5() {

    console.log("rotatingArrayMethod2Test5");

    // Run the rotatingArrayMethod1 function in try.
    try {
        var inputArray = [];
        rotatingArrayMethod2(inputArray, 2, 5);
    } catch (err) {
        if (err == "Your input array is empty!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with n != the length of input array.
Expected output: The third input is not the correct size of the array!
*/
function rotatingArrayMethod2Test6() {

    console.log("rotatingArrayMethod2Test6");

    // Run the rotatingArrayMethod1 function in try.
    try {
        var inputArray = [1, 2, 3];
        rotatingArrayMethod2(inputArray, 2, 5);
    } catch (err) {
        if (err == "The third input is not the correct size of the array!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with d = 10 > n = 7, input array = [1, 2, 3, 4, 5, 6, 7].
Expected output: [3, 4, 5, 6, 7, 1, 2].
*/
function rotatingArrayMethod2Test7() {

    console.log("rotatingArrayMethod2Test7");

    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run rotatingArrayMethod1.
        rotatingArrayMethod2(inputArray, 10, 7);

        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (i <= 3) {
                if (inputArray[i] != i + 4) {
                    console.log(false); 
                    return;
                }
            }
            else {
                if (inputArray[i] != i - 3) {
                    console.log(false);
                    return;
                }
            }
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
Test with d = 0, input array = [1, 2, 3, 4, 5, 6, 7]
Expected output: input array = [1, 2, 3, 4, 5, 6, 7]
*/
function rotatingArrayMethod2Test8() {

    console.log("rotatingArrayMethod2Test8");

    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run rotatingArrayMethod1.
        rotatingArrayMethod2(inputArray, 0, 7);

        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (inputArray[i] != i + 1) {
                console.log(false);
                return;
            }
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
*********************************************************************************************************************
*/

/*
Tests for FindGCD function.
*/
/*
Test with input 3, 7.
Expected output: 1.
*/
function findGCDTest1() {

    console.log("findGCDTest1");

    try {
        // Run findGCD function and store in output.
        var output = findGCD(3, 7);

        // Check output.
        if (output == 1)
            console.log(true);
        else
            console.log(false);
    } catch (err) {
        console.log(err);
    }
}

/*
Test with input 54646455, 354555.
Expected output: 1.
*/
function findGCDTest2() {

    console.log("findGCDTest2");

    try {
        // Run findGCD function and store in output.
        var output = findGCD(54646455, 354555);

        // Check output.
        if (output == 15)
            console.log(true);
        else
            console.log(false);
    } catch (err) {
        console.log(err);
    }
}

/* Test with input 3.5, 5.
Expected output: Your input must be two integers!
*/
function findGCDTest3() {

    console.log("findGCDTest3");

    try {
        // Run findGCD function and store in output.
        var output = findGCD(3.5, 5);

    } catch (err) {
        if (err == "Your input must be two integers!")
            console.log(true);
        else
            console.log(false);
    }
}

/* Test with input 35, 5.89.
Expected output: Your input must be two integers!
*/
function findGCDTest4() {

    console.log("findGCDTest4");

    try {
        // Run findGCD function and store in output.
        var output = findGCD(35, 5.89);

    } catch (err) {
        if (err == "Your input must be two integers!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
*********************************************************************************************************************
*/

/*
Tests for rotatingArrayMethod3.
*/
/* 
Test with input array = [1, 2, 3, 4, 5, 6, 7], 3, 7.
Expected output: [4, 5, 6, 7, 1, 2, 3].
*/

function rotatingArrayMethod3Test1() {

    console.log("rotatingArrayMethod3Test1");

    // Create the inputArray.
    var inputArray = [1, 2, 3, 4, 5, 6, 7];

    // Run rotatingArrayMethod3.
    try {
        rotatingArrayMethod3(inputArray, 3, 7);
        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (i <= 3) {
                if (inputArray[i] != i + 4) {
                    console.log(false);
                    return;
                }
            }
            else {
                if (inputArray[i] != i - 3) {
                    console.log(false);
                    return;
                }
            }
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
Test with d < 0.
Expected output: Input numbers cannot be negative!
*/
function rotatingArrayMethod3Test2() {

    console.log("rotatingArrayMethod3Test2");

    try {

        // Run the rotatingArrayMethod3 function.
        rotatingArrayMethod3([1, 2, 3], -5, 3);

    } catch (err) {
        if (err == "Input numbers cannot be negative!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with n < 0.
Expected output: Input numbers cannot be negative!
*/
function rotatingArrayMethod3Test3() {

    console.log("rotatingArrayMethod3Test3");

    try {

        // Run the rotatingArrayMethod3 function in try.
        rotatingArrayMethod3([1, 2, 3], 2, -3);

    } catch (err) {
        if (err == "Input numbers cannot be negative!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with input array = undefinded.
Expected output: Your input array has not been defined!
*/
function rotatingArrayMethod3Test4() {

    console.log("rotatingArrayMethod3Test4");

 
    try {

        // Create input array.
        var inputArray;
        
        // Run the rotatingArrayMethod3 function 
        rotatingArrayMethod3(inputArray, 2, 5);

    } catch (err) {
        if (err == "Your input array has not been defined!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with empty input array.
Expected output: Your input array is empty!
*/
function rotatingArrayMethod3Test5() {

    console.log("rotatingArrayMethod3Test5");

    try {

        // Create input array.
        var inputArray = [];

        // Run the rotatingArrayMethod3 function.
        rotatingArrayMethod1(inputArray, 2, 5);

    } catch (err) {
        if (err == "Your input array is empty!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with n != the length of input array.
Expected output: The third input is not the correct size of the array!
*/
function rotatingArrayMethod3Test6() {

    console.log("rotatingArrayMethod3Test6");

    // Run the rotatingArrayMethod3 function.
    try {

        // Create input array.
        var inputArray = [1, 2, 3];

        // Run the rotatingArrayMethod3 function.
        rotatingArrayMethod1(inputArray, 2, 5);

    } catch (err) {
        if (err == "The third input is not the correct size of the array!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with d = 10 > n = 7, input array = [1, 2, 3, 4, 5, 6, 7].
Expected output: [3, 4, 5, 6, 7, 1, 2].
*/
function rotatingArrayMethod3Test7() {

    console.log("rotatingArrayMethod3Test7");

    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run rotatingArrayMethod3.
        rotatingArrayMethod3(inputArray, 10, 7);

        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (i <= 3) {
                if (inputArray[i] != i + 4) {
                    console.log(false); 
                    return
                }
            }
            else {
                if (inputArray[i] != i - 3) {
                    console.log(false);
                    return;
                }
            }
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
Test with d = 0, input array = [1, 2, 3, 4, 5, 6, 7]
Expected output: input array = [1, 2, 3, 4, 5, 6, 7]
*/
function rotatingArrayMethod3Test8() {

    console.log("rotatingArrayMethod3Test8");

    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run rotatingArrayMethod3.
        rotatingArrayMethod3(inputArray, 0, 7);

        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (inputArray[i] != i + 1) {
                console.log(false);
                return;
            }
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
*********************************************************************************************************************
*/
/*
Tests for function reverseArray.
*/
/*
Test with inputArray = [1, 2, 3, 4, 5, 6, 7], start = 2, end = 5.
Expected output = [1, 2, 6, 5, 4, 3, 7].
*/
function reverseArrayTest1() {
    console.log("reverseArrayTest1");

    // Run the function in try/ catch.
    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run the function.
        reverseArray(inputArray, 2, 5);

        // Check the output.
        // Check the elements that have not changed position.
        if (inputArray[0] !== 1 || inputArray[1] !== 2 || inputArray[6] !== 7) {
            console.log(false);
            return;
        }

        // Check the elements that have changed position.
        else if (inputArray[2] !== 6 || inputArray[3] !== 5 || inputArray[4] !== 4 ||
            inputArray[5] !== 3) {
                console.log(false)
                return;
            }

        else {
            console.log(true);
        }
    } catch (err) {
        console.log(err);
    }
}

/*
Test with inputArray = [1, 2, 3, 4, 5, 6, 7], start = 2.5, end = 5.
Expected output: Your input numbers must be integers! 
*/
function reverseArrayTest2() {
    console.log("reverseArrayTest2");

    // Run the method in try.
    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run the function.
        reverseArray(inputArray, 2.5, 5);
    } catch(err) {
        if (err === "Your input numbers must be integers!")
            console.log(true);
        
        else
            console.log(false);
    }
}

/*
Test with inputArray = [1, 2, 3, 4, 5, 6, 7], start = -2, end = -5.
Expected output: Input numbers must follow this rule: 0 <= starting index < ending index!
*/
function reverseArrayTest3() {
    console.log("reverseArrayTest3");

    // Run the method in try.
    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run the function.
        reverseArray(inputArray, -2, -5);
    } catch(err) {
        if (err === "Input numbers must follow this rule: 0 <= starting index < ending index!")
            console.log(true);
        
        else 
            console.log(false);
    }
}

/*
*********************************************************************************************************************
*/
/*
Tests for method 4.
*/
/* 
Test with input array = [1, 2, 3, 4, 5, 6, 7], 3, 7.
Expected output: [4, 5, 6, 7, 1, 2, 3].
*/

function rotatingArrayMethod4Test1() {

    console.log("rotatingArrayMethod4Test1");

    // Create the inputArray.
    var inputArray = [1, 2, 3, 4, 5, 6, 7];

    // Run rotatingArrayMethod4.
    try {
        rotatingArrayMethod4(inputArray, 3, 7);
        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (i <= 3) {
                if (inputArray[i] != i + 4) {
                    console.log(false);
                    return;
                }
            }
            else {
                if (inputArray[i] != i - 3) {
                    console.log(false);
                    return;
                }
            }
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
Test with d < 0.
Expected output: Input numbers cannot be negative!
*/
function rotatingArrayMethod4Test2() {

    console.log("rotatingArrayMethod4Test2");

    try {

        // Run the rotatingArrayMethod4 function.
        rotatingArrayMethod4([1, 2, 3], -5, 3);

    } catch (err) {
        if (err == "Input numbers cannot be negative!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with n < 0.
Expected output: Input numbers cannot be negative!
*/
function rotatingArrayMethod4Test3() {

    console.log("rotatingArrayMethod4Test3");

    try {

        // Run the rotatingArrayMethod4 function in try.
        rotatingArrayMethod4([1, 2, 3], 2, -3);

    } catch (err) {
        if (err == "Input numbers cannot be negative!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with input array = undefinded.
Expected output: Your input array has not been defined!
*/
function rotatingArrayMethod4Test4() {

    console.log("rotatingArrayMethod4Test4");

 
    try {

        // Create input array.
        var inputArray;
        
        // Run the rotatingArrayMethod4 function 
        rotatingArrayMethod4(inputArray, 2, 5);

    } catch (err) {
        if (err == "Your input array has not been defined!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with empty input array.
Expected output: Your input array is empty!
*/
function rotatingArrayMethod4Test5() {

    console.log("rotatingArrayMethod4Test5");

    try {

        // Create input array.
        var inputArray = [];

        // Run the rotatingArrayMethod4 function.
        rotatingArrayMethod4(inputArray, 2, 5);

    } catch (err) {
        if (err == "Your input array is empty!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with n != the length of input array.
Expected output: The third input is not the correct size of the array!
*/
function rotatingArrayMethod4Test6() {

    console.log("rotatingArrayMethod4Test6");

    // Run the rotatingArrayMethod4 function.
    try {

        // Create input array.
        var inputArray = [1, 2, 3];

        // Run the rotatingArrayMethod4 function.
        rotatingArrayMethod4(inputArray, 2, 5);

    } catch (err) {
        if (err == "The third input is not the correct size of the array!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with d = 10 > n = 7, input array = [1, 2, 3, 4, 5, 6, 7].
Expected output: [3, 4, 5, 6, 7, 1, 2].
*/
function rotatingArrayMethod4Test7() {

    console.log("rotatingArrayMethod4Test7");

    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run rotatingArrayMethod4.
        rotatingArrayMethod4(inputArray, 10, 7);

        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (i <= 3) {
                if (inputArray[i] != i + 4) {
                    console.log(false); 
                    return
                }
            }
            else {
                if (inputArray[i] != i - 3) {
                    console.log(false);
                    return;
                }
            }
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
Test with d = 0, input array = [1, 2, 3, 4, 5, 6, 7]
Expected output: input array = [1, 2, 3, 4, 5, 6, 7]
*/
function rotatingArrayMethod4Test8() {

    console.log("rotatingArrayMethod4Test8");

    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run rotatingArrayMethod4.
        rotatingArrayMethod4(inputArray, 0, 7);

        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (inputArray[i] != i + 1) {
                console.log(false);
                return;
            }
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
*********************************************************************************************************************
*/
/*
Tests for function swap.
*/
/*
Test with inputArray = [1, 2, 3, 4, 5, 6, 7], fi = 2, si = 4, d = 2.
Expected output = [1, 2, 5, 6, 3, 4, 7].
*/
function swapTest1() {
    console.log("swapTest1");

    // Run the function in try/ catch.
    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run the function.
        swap(inputArray, 2, 4, 2);

        // Check the output.
        // Check the elements that have not changed position.
        if (inputArray[0] !== 1 || inputArray[1] !== 2 || inputArray[6] !== 7) {
            console.log(false);
            return;
        }

        // Check the elements that have changed position.
        else if (inputArray[2] !== 5 || inputArray[3] !== 6 || inputArray[4] !== 3 ||
            inputArray[5] !== 4) {
                console.log(false)
                return;
            }

        else {
            console.log(true);
        }
    } catch (err) {
        console.log(err);
    }
}

/*
Test with inputArray = [1, 2, 3, 4, 5, 6, 7], si = 2.5, fi = 5, d = 1.
Expected output: Your input numbers must be integers! 
*/
function swapTest2() {
    console.log("swapTest2");

    // Run the method in try.
    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run the function.
        swap(inputArray, 2.5, 5, 1);
    } catch(err) {
        if (err === "Your input numbers must be integers!")
            console.log(true);
        
        else
            console.log(false);
    }
}

/*
Test with inputArray = [1, 2, 3, 4, 5, 6, 7], si = -2, fi = -5, d = 1.
Expected output: Input numbers must follow this rule: 0 <= first index < second index!
*/
function swapTest3() {
    console.log("swapTest3");

    // Run the method in try.
    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run the function.
        swap(inputArray, -2, -5, 1);
    } catch(err) {
        if (err === "Input numbers must follow this rule: 0 <= first index < second index!")
            console.log(true);
        
        else 
            console.log(false);
    }
}

/*
*********************************************************************************************************************
*/
/* 
Tests for method 5.
*/
/* 
Test with input array = [1, 2, 3, 4, 5, 6, 7], 0, 2, 7.
Expected output: [4, 5, 6, 7, 1, 2, 3].
*/

function rotatingArrayMethod5Test1() {

    console.log("rotatingArrayMethod5Test1");

    // Create the inputArray.
    var inputArray = [1, 2, 3, 4, 5, 6, 7];

    // Run rotatingArrayMethod5.
    try {
        rotatingArrayMethod5(inputArray, 0, 2, 7);

        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (i <= 4) {
                if (inputArray[i] != i + 3) {
                    console.log(false);
                    return;
                }
            }
            else {
                if (inputArray[i] != i - 4) {
                    console.log(false);
                    return;
                }
            }
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
Test with d < 0.
Expected output: Input numbers cannot be negative!
*/
function rotatingArrayMethod5Test2() {

    console.log("rotatingArrayMethod5Test2");

    try {

        // Run the rotatingArrayMethod4 function.
        rotatingArrayMethod5([1, 2, 3], 0, -5, 3);

    } catch (err) {
        if (err == "Input numbers cannot be negative!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with n < 0.
Expected output: Input numbers cannot be negative!
*/
function rotatingArrayMethod5Test3() {

    console.log("rotatingArrayMethod5Test3");

    try {

        // Run the rotatingArrayMethod5 function in try.
        rotatingArrayMethod5([1, 2, 3], 0, 2, -3);

    } catch (err) {
        if (err == "Input numbers cannot be negative!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with input array = undefinded.
Expected output: Your input array has not been defined!
*/
function rotatingArrayMethod5Test4() {

    console.log("rotatingArrayMethod5Test4");

 
    try {

        // Create input array.
        var inputArray;
        
        // Run the rotatingArrayMethod5 function 
        rotatingArrayMethod5(inputArray, 0, 2, 5);

    } catch (err) {
        if (err == "Your input array has not been defined!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with empty input array.
Expected output: Your input array is empty!
*/
function rotatingArrayMethod5Test5() {

    console.log("rotatingArrayMethod5Test5");

    try {

        // Create input array.
        var inputArray = [];

        // Run the rotatingArrayMethod5 function.
        rotatingArrayMethod5(inputArray, 0, 2, 5);

    } catch (err) {
        if (err == "Your input array is empty!")
            console.log(true);
        else
            console.log(false);
    }
}

/*
Test with d = 9 > n = 7, input array = [1, 2, 3, 4, 5, 6, 7], index = 0.
Expected output: [3, 4, 5, 6, 7, 1, 2].
*/
function rotatingArrayMethod5Test7() {

    console.log("rotatingArrayMethod5Test7");

    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run rotatingArrayMethod5.
        rotatingArrayMethod5(inputArray, 0, 9, 7);

        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (i <= 4) {
                if (inputArray[i] != i + 3) {
                    console.log(false); 
                    return
                }
            }
            else {
                if (inputArray[i] != i - 4) {
                    console.log(false);
                    return;
                }
            }
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
Test with d = 0, input array = [1, 2, 3, 4, 5, 6, 7]
Expected output: input array = [1, 2, 3, 4, 5, 6, 7]
*/
function rotatingArrayMethod5Test8() {

    console.log("rotatingArrayMethod5Test8");

    try {
        // Create the inputArray.
        var inputArray = [1, 2, 3, 4, 5, 6, 7];

        // Run rotatingArrayMethod5.
        rotatingArrayMethod5(inputArray, 0, 0, 7);

        // Check if the output is correct.
        for (var i = 0; i < 7; i++) {
            if (inputArray[i] != i + 1) {
                console.log(false);
                return;
            }
        }
        console.log(true);
    } catch (err) {
        console.log(err);
    }
}

/*
*********************************************************************************************************************
*/
/*
Tests for function rotateArrayByOne.
*/
/*
Test with inputArray = [0, 1, 2, 3, 4, 5, 6].
Expected output = [6, 0, 1, 2 , 3, 4, 5].
*/
function rotateArrayByOneTest1() {
    console.log("rotateArrayByOneTest1");

    // Run the method in try.
    try {
        // Create the inputArray.
        var inputArray = [0, 1, 2, 3, 4, 5, 6];

        // Run the function.
        rotateArrayByOne(inputArray);

        // Check the output.
        for (var i=0; i < 6; i++) {
            if (inputArray[i+1] !== i) {
                console.log(false);
                return;
            }
        }

        if (inputArray[0] !== 6) {
            console.log(false);
            return;
        }

        console.log(true);
    } catch(err) {
        console.log(err);
    }
}

/*
Test with inputArray = [].
Expected output: Your input array is empty!
*/
function rotateArrayByOneTest2() {
    console.log("rotateArrayByOneTest2");

    // Run the method in try.
    try {
        // Create the inputArray.
        var inputArray = [];

        // Run the function.
        rotateArrayByOne(inputArray);
    } catch(err) {
        if (err === "Your input array is empty!") 
            console.log(true);
        else   
            console.log(false);
    }
}

/*
Test with inputArray = undefined.
Expected output: Your input array has not been defined!
*/
function rotateArrayByOneTest3() {
    console.log("rotateArrayByOneTest3");

    // Run the method in try.
    try {
        // Create the inputArray.
        var inputArray;

        // Run the function.
        rotateArrayByOne(inputArray);
    } catch(err) {
        if (err === "Your input array has not been defined!") 
            console.log(true);
        else   
            console.log(false);
    }
}

/*
*********************************************************************************************************************
*/

// // Run tests of method 1.
// rotatingArrayMethod1Test1();
// rotatingArrayMethod1Test2();
// rotatingArrayMethod1Test3();
// rotatingArrayMethod1Test4();
// rotatingArrayMethod1Test5();
// rotatingArrayMethod1Test6();
// rotatingArrayMethod1Test7();
// rotatingArrayMethod1Test8();

// // Run tests for method 2.
// rotatingArrayMethod2Test1();
// rotatingArrayMethod2Test2();
// rotatingArrayMethod2Test3();
// rotatingArrayMethod2Test4();
// rotatingArrayMethod2Test5();
// rotatingArrayMethod2Test6();
// rotatingArrayMethod2Test7();
// rotatingArrayMethod2Test8();

// // Run tests for findGCD.
// findGCDTest1();
// findGCDTest2();
// findGCDTest3();
// findGCDTest4();

// // Run tests for method 3.
// rotatingArrayMethod3Test1();
// rotatingArrayMethod3Test2();
// rotatingArrayMethod3Test3();
// rotatingArrayMethod3Test4();
// rotatingArrayMethod3Test5();
// rotatingArrayMethod3Test6();
// rotatingArrayMethod3Test7();
// rotatingArrayMethod3Test8();

// // Run tests for function reverseArray.
// reverseArrayTest1();
// reverseArrayTest2();
// reverseArrayTest3();

// // Run tests for method 4.
// rotatingArrayMethod4Test1();
// rotatingArrayMethod4Test2();
// rotatingArrayMethod4Test3();
// rotatingArrayMethod4Test4();
// rotatingArrayMethod4Test5();
// rotatingArrayMethod4Test6();
// rotatingArrayMethod4Test7();
// rotatingArrayMethod4Test8();

// // Run tests for function swap.
// swapTest1();
// swapTest2();
// swapTest3();

// // Run tests for method 5.
// rotatingArrayMethod5Test1();
// rotatingArrayMethod5Test2();
// rotatingArrayMethod5Test3();
// rotatingArrayMethod5Test4();
// rotatingArrayMethod5Test5();
// rotatingArrayMethod5Test7();
// rotatingArrayMethod5Test8();

// Run tests for function rotateArrayByOne.
rotateArrayByOneTest1();
rotateArrayByOneTest2();
rotateArrayByOneTest3();

