/*
 * @Author: vigorzhang
 * @Date: 2019-12-21 14:08:28
 * @LastEditors  : vigorzhang
 * @LastEditTime : 2019-12-21 15:20:20
 * @Description: 
 */
// var getInd = function (arr, target) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j< arr.length; j++) {
//             if (arr[i] + arr[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// }
// var getInd=function(arr,target){
//     var newset=new Set(arr)
//     for(var i=0;i<arr.length;i++){
//         var temp=target-arr[i]
//         var t2=arr.indexOf(temp)
//        if( newset.has(temp)&&i!=t2){
//         //    return newset[temp]
//            return [i,t2]
//        }
//     }
// }
// var nums = [2, 7, 11, 15],
//     target = 26
// console.log(getInd(nums, target))
var time= new Date().getTime()
time=new Date(time)
console.log(time.getUTCFullYear())