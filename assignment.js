// forEach()
function myEach(callbackFunc, arr){
    for(let i =0; i<arr.length;i++){
        callbackFunc(arr[i]);
    }
}

// map()
function myMap(callbackFunc, arr){
    let temp = [];
    for(let i =0; i<arr.length;i++){
        temp[i]=callbackFunc(arr[i]);
    }
    return temp

}

// filter()
function myFilter(callbackFunc,arr){
    let temp = [];
    j=0
    for(let i =0; i<arr.length;i++){
        if(callbackFunc(arr[i])){
            temp[j++]=arr[i]; 
        }
    }
    return temp;
}

// some() (aka any())
function mySome(callbackFunc,arr){
    for(let i =0; i<arr.length;i++){
        if(callbackFunc(arr[i])){
            return true; 
        }
    }
    return false; 
}

// every()
function myEvery(callbackFunc,arr){
    for(let i =0; i<arr.length;i++){
        if(!callbackFunc(arr[i])){
            return false; 
        }
    }
    return true; 
}

// reduce()
function myReduce(callbackFunc,arr,initialValue = 0){
    let total = initialValue
    for(let i =0; i<arr.length;i++){
        total+=arr[i]
    }
    return total; 
}

// includes()
function myIncludes(target, arr){
    for(let i=0; i<arr.length;i++){
        if(arr[i]===target){
            return true;
        }
    }
    return false;
}

// indexOf()
function myIndexOf(target, arr){
    for(let i=0; i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

// push()
function myPush(arr, ...addValue){
    for(let i=0;i<addValue.length;i++){
        if(addValue[i]){
            arr[arr.length]=addValue[i]
        }
    }
    return arr.length;
}

// lastIndexOf()
function myLastIndexOf(target, arr, startPosition=arr.length) {
    for(let i=startPosition; i>0;i--){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}
// Object.keys()
function grabKeys(obj){
    let temp=[]
    let i=0
    for(const key in obj){
        temp[i++]=key
    }
    return temp;
}

// Object.values()
function grabValues(obj){
    let temp = [];
    let i=0;
    for(const key in obj){
        temp[i++]=obj[key]
    }
    return temp;
}

//range()
function myRange(start, end, step=1){
    if((end>start&&step<0)||(end<start&&step>0)){
        let temp = end;
        end = start;
        start = temp;
    }
    for(let i=start; (i<=end && i >=start) || (i>=end && i<=start);i=i+step){
        temp[j++]=i;
    }
    return temp;
}

//sum()
function mySum(values){
    let total = 0;
    for(let i=0;i<values.length;i++){
        total=total+values[i]
    }
    return total;
}

// Reversing an Array
function reverseArray(arr){
    let temp = []
    for(const index in arr){
        temp[arr.length-index-1]=arr[index]
    }
    return temp;
}
function reverseArrayInPlace(arr){
    let temp
    for(let i =0; i<arr.length/2;i++){
        temp = arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1] = temp
    }
    return arr;

}

// A List
function listNode(val, nextNode=null){
    var node ={ value: val, next: nextNode }
    return node
}

function arrayToList(arr,node = listNode){
    var start = node(0);
    var temp = start;
    for(const index in arr){
        temp.next = node(arr[index])
        temp = temp.next
    }
    return start.next;
}

function listToArray(list){
    let temp = list;
    let temp2=[]
    let i=0
    while(true){
        temp2[i++]=temp.value;
        temp = temp.next
        if(temp==null){
            break
        }
    }
    return temp2
}

// returns the entered list with the value added in the entered position
// returns undefined it unvalid postion is entered
function prepend(list, value, position=0, node=listNode){
    if(position === 0){
        let temp = node(value, list)
        return temp
    }
    let priorPosition = list;
    for(let i = 0; i<position-1;i++){
        priorPosition = priorPosition.next;
        if(priorPosition==null){
            return undefined
        }
    }
    let temp = listNode(value,priorPosition.next)
    priorPosition.next = temp;
    return list;
}

// Deep Comparison
function deepEqual(val1, val2){
    if(typeof(val1)!=typeof(val2)){
        return false;
    }
    return val1 == val2
}

// move zeros
function moveZeros(nums){
    let i=0;
    let key = 0;
    let addend = 1;
    while(key<arr.length){
        if(key+i<arr.length){
            if(nums[key]===0 ){
                i++;
                addend = 0;
            }
            key+=addend;
            nums[key]=nums[key+i]
            addend=1;
        }
        else{
            nums[key]=0
            key++;
        }
    }
    return nums;
}

