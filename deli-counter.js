// 1. Write your functions here

// Name: Habtamu Debele
console.log("\n")
const katzDeli = []
function takeANumber(customerList, name){
    let str = ''
    customerList.push(name)
    customerList.map(function (element, position){
        str = `Welcome, ${element}. You are number ${position + 1} in line.`
    })
    console.log(str)
}
takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.
console.log("\n")
//console.log(katzDeli)

function line(customerList){
    if(customerList.length > 0){
        const customerPosition = customerList.map(function (customerList, position){
           return ` ${position + 1}.${customerList}`
        })
        console.log(`The line is currently: ${customerPosition}`)
    }
    else{
        console.log("The line is currently empty.")
    }
}
line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"
console.log("\n")

function nowServing(customerList){
    if(customerList.length > 0){
        for(let i = 0; i < customerList.length; i++){
            console.log(`Currently serving: ${customerList[i]}`)
            customerList.shift()
            return line(customerList)
        }
    }
    else{
        console.log(`"There is nobody waiting to be served!"`)
    }
    
}
nowServing(katzDeli) //=> "Currently serving Ada."
console.log("\n")
// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.
console.log("\n")
line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"
console.log("\n")
nowServing(katzDeli) //=> "Currently serving Grace."
console.log("\n")
nowServing(katzDeli) //=> "Currently serving Kent."
console.log("\n")
nowServing(katzDeli) //=> "Currently serving Matz."
console.log("\n")
nowServing(katzDeli) //"There is nobody waiting to be served!"

//line(katzDeli) //=> "The line is currently empty."