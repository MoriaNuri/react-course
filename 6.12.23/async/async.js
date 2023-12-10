
var res=sum(1,2)
console.log(res)
function sum(num1,num2){
    return num1+num2
}

function sumWithCallback(num1,num2,callback){
    const sum=num1+num2
    callback(sum)
}

sumWithCallback(1,2,(res)=>console.log(res))

function asyncWithDelay(num1,num2,callback){
    setTimeout(()=>{
        const res=num1+num2
        callback(res)
    },2500)
}  

// console.log('Hello');

asyncWithDelay(1,2,(res)=>console.log(' async res',res))

function doTask(effortLevel){
    if (effortLevel>10){
       return "Task is done"
    } else{
        return "Task is not done"
    }
}
function doTaskPromise(effortLevel){
    return new Promise((resolve,reject)=>{
        if (effortLevel>10){
            resolve("Task is done")
         } else{
             reject("Task is not done")
         }
    })
}

// console.log(doTaskPromise(12))
doTaskPromise(12).then((res)=>console.log(res))
.catch((err)=>console.log(err))
