/*
 * @Author: vigorzhang
 * @Date: 2020-03-24 22:45:27
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-31 22:58:14
 * @Description: 
 */

function sum() {
    var args = Array.from(arguments)
    var total = 0
    var add = function () {
        args=[Array.from(arguments),...args]
        return add
    }
    add.toString=function(){
        args.forEach(el=>{
            total+=el
        })
        return total
    }
    return add
}
console.log(sum(4)(8)(9))
