function profile(name){
    
    console.log(`Hello ${name}!`)
    
}
profile('Naveen');

let double=(number)=>{
 return number*2
}

console.log(double(12));


setTimeout(function(){
    
    console.log("This message is delayed by 2 seconds")

},2000);




function getUserData(callback){

    setTimeout(function(){
        callback();
    },3000)

}

getUserData(function(){

console.log("Callback Function")

});
