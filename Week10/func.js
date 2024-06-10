//---1---
function foo(arg){
    return arg;
}

function bar(){
    console.log('bar');
}
foo(bar()); //bar

//---2---
const foo2 = function(arg){
    console.log(arg);
}
foo2(1); //1

//---3---
function foo3(arg=1){
    console.log(arg);
}
foo3(); //1

//---4---
function foo4(arg, ...rest){
    console.log(rest);
}
foo3([1,2,3]); 

//---5---
function foo4(){ 
    console.log("함수선언문");
}
foo4(); 

//---6---
const foo5 = function(){ 
    console.log("함수표현식");
}
foo5(); 

//---7---
const foo6 = new Function(`console.log("function 생성자 함수");`) 
foo6(); 

//---8--- 
const foo7 = () =>{console.log("화살표 함수");}; 
foo7(); 

//---9---
(function foo8(){
    console.log('IIFE/즉시실행함수')
})();

//---10---
let arg = 1
function foo9(arg){
    if (arg===4){
        return;
    }
    arg++;
    console.log('재귀함수')
    foo9(arg);
}
foo9(arg)

//---11---
let str = "중첩 함수"
function foo10(str){
    function bar(){
        console.log(str);
    }
    bar();
}
foo10(str)

//---12---
function foo11(arg){
    arg();
}
foo11(()=>{
    console.log("콜백함수");
})