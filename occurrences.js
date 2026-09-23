function occurrence(){
  
    const nums = [2,4,5,2,1,2];

    const k=2;

    let count=0;

    for (let i=nums.length-1;i>=0;i--){


        if (nums[i]==k){

           count++  

        }
    }

return count;

}

console.log(occurrence());



