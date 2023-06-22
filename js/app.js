function SameElements(arr){
    let duplicates = [];
   for( let i = 0; i<arr.length; i++){
       for( let j = i+1; j<arr.length; j++){
        if(arr[i] === arr[j]){
            duplicates.push(arr[i]);
            count++;
        }
       }
   }
   console.log(duplicates)
}

let array = [1,2,3,4,5,4,4,2,3,]

SameElements(array)