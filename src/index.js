import "./main.scss";


const test = ()=>{
    alert('hello');
}

const fryUp = {
    bacon: 2,
    eggs: 1,
    toast: 2,
    beans: 300
}

let bigFryup = {juice:3, ...fryUp}





test();

console.log(fryUp, bigFryup);