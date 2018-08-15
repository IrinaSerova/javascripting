// Challenge #1 
// let person = process.argv[2];
// console.log(`Hello, ${person}!
// Your name lowercased is "${person.toLowerCase()}".`);
// Challenge #2
// let name = process.args[2];
// console.log(`Hello, ${name}! 
// Your name lowercased is "${name.toLowerCase()}"`);

// Challenge #3
// var inputs = process.argv.slice(2);
// var result = inputs.map(x => x[0]) //inputs.map(function(x){ return x[0]; })
//                   .reduce((soFar, x) => soFar + x); // .reduce((soFar, x) function(soFar) { return soFar +x; })

// console.log(`[${inputs}] becomes "${result}"`);


// Challenge #4


 
//  const foot = {
//         kick:  () =>{
//             this.yelp = "Ouch!";
//             setImmediate( () => {
//                 console.log(this.yelp);
//             });
//         }
//     };
//     foot.kick();
// Challenge #5 Destructuring


    // let userArray = process.argv.slice(2);
    
    // let [ , username, email] = userArray;
    

    
    // console.log(`{ username: '${username}', email: '${email}' }`); // {username: "jdoe", email: "john@doe.com"}
    
// Challenge 6 Spread

// let numbers = process.argv.slice(2);
// var min = Math.min(...numbers);
// console.log(`The minimum of [${numbers}] is ${min}`);

// Challenge 7 Rest

// module.exports = function average(...numbers){
//     var result = 0;
//     numbers.forEach( value => result += value);
//     return result/numbers.length;
// }

// Challenge 8 

module.exports = (...args) => {
   
    let sum = args.reduce((lowerBound = 0, uperBound = 1) =>  lowerBound + uperBound);
   
    return sum/args.length;
}

