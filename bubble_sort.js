// function bubble_sort(arr){
//     for(var i=0; i <arr.length-1; i++){
//         for(var j =0; j<arr.length-i-1;j++){
//             if( arr[j] > arr[j+1] ){
//                 //swap
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1]= temp
                 
//             }

//         }
//     }
//     console.log(arr)
// }



arr = [234, 43, 55, 63, 5, 6, 235, 547];
//bubble_sort(arr)
bubble_sort_opt(arr)

//optimized bubble 

function bubble_sort_opt(arr){
   let IsSwapped;

    for(var k=0; k<arr.length-1; k++){
    IsSwapped = false;
        for(l=0; l<arr.length-1;l++){
            //check
            if( arr[l]>arr[l+1] ){
            //swap
            [arr[l] , arr[l+1]] = [arr[l+1] , arr[l]]
            IsSwapped = true;
            //console.log("inside loop j",IsSwapped );
            }
        }

    //if there is no swap operation performed in inner loop then our array is alreay sorted
    //console.log("break",IsSwapped );
    if(!IsSwapped)
    break; 
    } 
    console.log("optimized",arr)

}