let nums = [1,2,3,6,9,8,7,4];
let ids = [1,2,3,6,9,8,7,4];
let l = 4;
let rotate = function(){
    for(let i = 7; i > 0; i--){
        nums[i] = nums[i -1];
    }
    
    nums[0] = l;
    l = nums[7];
    
    for(let i = 0; i < 8; i++){
        document.getElementById("btn"+ids[i]).innerText = nums[i];
    }
}