
function isOldEnoughToVote(age) {

    if(age >= 18){
        return true;
    }else{
        return false;
    }
}

function getProperty(obj, key) {
    return obj[key];
}

function addProperty(obj, key) {
    obj.myProperty = true;
}

function removeProperty(obj, key) {
    delete obj[key];
}

function isEven(num) {
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function isOdd(num) {
    if(num % 2 != 0){
        return true;
    } else {
        return false;
    }
}

function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
}

function addToBack(arr, element) {
    arr.push(element);
    return arr;
}

function joinArrays(arr1, arr2) {
    var newarr = arr1.concat(arr2);
    return newarr;
}

function getAllWords(str) {
    if(str.length == 0){
        return str.split("");
    } else {
        return  str.split(" ");
    }

}

function extend(obj1, obj2) {
    for(var key in obj2){
        if(!obj1.hasOwnProperty(key)){
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

function removeStringValues(obj) {
    for(var key in obj){
        if(typeof obj[key] == 'string'){
            delete obj[key];
        }
    }
}

function getIndexOf(char, str) {
    for(var i = 0; i<str.length; i++){
        if(str[i] == char){
            return i;
        }
    }
    return -1;
}

function keep(array, keeper) {
    outputArray = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] == keeper){
            outputArray.push(keeper);
        }
    } return outputArray;
}

function getLargestElementAtProperty(obj, key) {
    var largest = 0;
    if(obj.key === undefined || obj[key].length === 0 || !Array.isArray(obj[key])){
        return undefined;
    }
    for(var i = 0; i< obj[key].length;i++){
        if(obj[key][i] > largest){
            largest = obj[key][i];
        }
    }
    return largest;
}

function calculateBillTotal(preTaxAndTipAmount) {
    var salesTax = preTaxAndTipAmount * 0.095;
    var tip = preTaxAndTipAmount * 0.15;
    var total = preTaxAndTipAmount + tip + salesTax;
    return total;
}

function sumDigits(num) {
    var numString = num.toString();
    var output = 0;
    for(var i = 0; i < numString.length; i++){
        if(numString[i] == "-"){
            output-= parseInt(numString[i+1]);
            i++
        } else {
            output += parseInt(numString[i]);
        }
    }
    return output;
}

function listAllValues(obj) {
    var arr = [];
    for(var key in obj){
        arr.push(obj[key]);
    }
    return arr;
}

function detectOutlierValue(string){
    var evenCount = 0;
    var oddCount = 0;
    var split = string.split(" ");
    for(var i = 0; i < split.length; i++){
        if(parseInt(split[i]) % 2 === 0){
            evenCount++;
        } else {
            oddCount++;
        }
    }
    var outlier = (evenCount > oddCount)? 1 : 0;
    for(var x = 0;x < split.length;x++){
        if(parseInt(split[x]) % 2 == outlier){
            return x+1;
        }
    }
}
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

function search(array, value) {
    var addIndex = 0;
    while(array.length>1){
        if(array[Math.floor(array.length/2)]>value){
            array= array.slice(0,Math.floor(array.length/2));

        }else
        if(array[Math.floor(array.length/2)]<value){
            addIndex += Math.floor(array.length/2) + 1;
            array = array.slice((Math.floor(array.length/2)+1));
        }
    }
    if(array.length==1 && array[Math.floor(array.length/2)]!= value){
        return null;
    }
    return addIndex;
}