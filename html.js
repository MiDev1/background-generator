const arr = [3,1,2,3,1,2];
let newArr = [[],[],[]];

function testing(){
    for(let value of arr){
        if(value === 1){
            newArr[0].push(value);
        }
        else if(value === 2){
            newArr[1].push(value);
        }
        else if(value === 3){
            newArr[2].push(value)
        }
        console.log(value)
    }
}

testing();
