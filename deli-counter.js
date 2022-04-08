// 1. Write your functions here


// 2. Example Usage

const katzDeli = []
function takeANumber(customerList, name){
    let str = ''
    customerList.push(name)
    customerList.forEach(function (element, position){
        str = `Welcome, ${element}. You are number ${position + 1} in line.`
    })
    console.log(str)
}
takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

//console.log(katzDeli)

function line(customerList){
    let msg = ''
    if(customerList.length > 0){
        customerList.forEach(function (element, position){
            msg = `The line is currently: ${position + 1}. ${element}`
            console.log(msg)
        })
    }
    else{
        console.log("The line is currently empty.")
    }
    
}
line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

function nowServing(customerList){
    for(let i = 0; i < customerList.length; i++){
        console.log(`Currently serving: ${customerList[i]}`)
        customerList.shift()
        return line(customerList)
    }
    
}

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"