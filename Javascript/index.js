console.log('Run ACPT..!');
const x = 30;
const y = 10;
const tot = x + y;
console.log(tot);

document.write('kamesh bimsara');
document.write('<h1>ACPT</h1>');
document.write('input type="text">');

// Numbers
const num = 10.55304;

// String
const string = "ACPT 50"

// Boolean
const bool = false;


// object
const obj = { name: 'kamesh', age: 40, address: 'beruwala', haveFriend: true }

// Array
const Array = [45, 'ACPT', true, { name: 'kamesh', address: 'beruwala' }, [65, 34, 'string']]

// Let
let a = 10;
console.log(a)
a = 20;
console.log(a);
{ let ab = 30 }

// console.log(ab)


// var
var v = 20;
console.log(v)
var v = true;
v = 'acpt'
console.log(v)
{ var vv = 30; }
console.log(vv)

// const
const c = 10;
// const c =20;
// c = 20;
{ const cc = 40 }
// console.log(cc);


const s = 10
const d = 20

// Addition(+)
const Addition = s + d;
console.log(Addition);

// subtraction
const sub = s - d;
console.log(sub);

// multiplication (*)
const mult = s * d;
console.log(mult);

// division (/)
const dive = s / d;
console.log(dive);

// moduls (%)
const mod = s % d;
console.log(mod);

// Increment (++)
let j = 50;
j++
j++
j++
console.log(j)

// decrement (--)
let k = 50;
k--
console.log(k)

// comparison operators
const l = 13;
const m = 13;

// Equal (==)
console.log(l === m);

// not Equal (!==)
console.log(l !== m);


//  greater than (>)
console.log(l > m)

// less than (>)
console.log(l < m)

// greate than or equal to (>=)
console.log(l >= m)

// less than or equal to (<=)
console.log(l <= m)

// logical operators
const q = true
const t = true

// and (&&)
console.log(q && t);

// or (||)
console.log(q || t)

// not (!)
console.log(!q)

// flowr controler

// if
const stu1 = 250;
const stu2 = 300;

if (stu1 == stu2) {
    console.log('running if..')
} else if (stu1 < stu2) {
    console.log('pring student..!')
} else {
    console.log('Error msg..!')
}

// switch
const val = 'intake 03';
switch (val) {
    case 'intake 01':
        console.log('ACPT-AMWD intake 01');
        break;
    case 'intake 02':
        console.log('ACPT-AMWD intake 02');
        break;

    default:
        console.log('Erro....!')
}

// input marke 1-100
// 75-a , 65-B , 45-C , 35-S , fail
const marke = 60;

// if
if (75 >= marke) {
    console.log('A')
}
// if(75>= marke){
//     // c    onsole.log('A');

// } else if (65 >= marke){
//     console.log("A")
// }else if  ( 45 >= marke){
//     console.log('C')

// }else if (35 >= marke){
//     console.log('s')

// }else {
//     console.log('fail')
// }

// Array
const ar = 56;
const arr = 43;

const array1 = [10, 'kamesh', { name: 'acpt' }, true];
console.log(array1[3]);

const fruits = ["banana", 'mango', 'apple', 'orange']

// // pop
// const fruit = fruits.pop();
// console.log(fruits);
// console.log(fruits);

// // Push
// fruits.push('kiwi');
// console.log(fruits)

// // shift
// const fruit = fruits.shift();
// console.log(fruit)
// console.log(fruits)

// // unshift
// fruits.unshift('kiwi');
// console.log(fruits)

// Loop
// For Loop

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

// while
let tt = 0;
while(tt < fruits.length){
    console.log(fruits[tt]);
    tt++
}

// do while
let ty = 0;
do{
    ty++
    console.log(fruits[ty]);

}while(ty  < fruits.length)


// global scope
const globle = true;


// function scope
function getName() {
    const fun = false;
}

// block scope
{

}

// Object
const car  ={
    colour: 'red',
    wheelcount:  '4',
    name: 'bmw',
    year: '2017',
    drive: function(){
        console.log('Drive............!');
    },
    brake: function(){
        console.log('break...........!');
    }
}

console.log(car.year);
car.brake();
car.drive();

// Funtion

// Name function
function setName() {
    console.log("print Name Function")
}
setName();

// Anonymouse function
const getaddress = function() {
    console.log('print anonymouse Function')
}
getaddress();

// Arrow Function
var  setAddress = ()=> {
    console.log('print Arrow function')
}
setAddress()

function printName (name,  lastName){
    console.log("Print :", name," ",lastName)
}

printName("kamesh",'ACPT')
printName("Bimsara",'ACPT')

// function equalNumber (num1, num2){
//     console.log("Total :",num1+num2)
// }

const equalNumber = (num1, num2)=> "Total: "+(num1+num2)

const number1 = equalNumber(30,70);
console.log(number1)
const number2 = equalNumber(45.7,90.5);
console.log(number2)

const getDetails = (name1)=> "my Name is"+name1

const data1 = getDetails ('kasun');
console.log (data1)
const data2 = getDetails('dasun')
console.log (data2);

// Input student name and Marks
//Marks  > 60
//Print => 'kamesh is Passed / kamesh is Fail
 
const printnDetails = (name,marks) => {
    let resu = ''
    if (marks > 60){
        resu = name+ "is Passed.."
    }else{
        resu = name+ " is Fail.."
    }
    return resu;

}

const result = printnDetaqils('Kamal',45);
console.log(result)

// Event

// onclick
function showme () {
    document.getElementById('display1').innerText = 'ACPT'
}

// on Change
function onchange () {
    const data = document.getElementById('input1').value
    console.log(data)
}

//Mousr over
function onmouseover (){
    console.log('on Hover event..')
}

//Mouse out
function onmouseout (){
    console.log('on mouse out event..')
}

//Key up
function onkeyup () {
    const val= document.getElementById('input2').value
    // console.log(val)
}
//Key Down
function onkeyDown () {
    const val= document.getElementById('input2').value
    // console.log(val)
}

//Key Press
function onkeypress () {
    const val= document.getElementById('input2').value
    console.log(val)
}

//onclick
// function Submit () {
//     document.getElementById('display1').innerText = 'kamesh is fail'
//     document.getElementById('display2').innerText = 'bimsara is passed'
//     document.getElementById('display3').innerText = 'nipun is pass'



function onChangeTextError () {
    const val = document.getElementById('from-input').value;
    const reg = /^(0|[1-9]\d*)(\.\d+)?$/
    if(reg.test(val)){
        document.getElementById('error').innertext= "Valid Number..!"
        document.getElementById('error').style.color= "green"
    }else{
        document.getElementById('error').innertext= "Valid Number..!"
        document.getElementById('error').style.color= "red"

    }
}

function img2Hover (){
    document.getElementById('img-2').style.display='none'
    document.getElementById('img-1').style.display='block'
}
function img1Hoverout(){
    document.getElementById('img-2').style.display='block'
    document.getElementById('img-1').style.display='none'
}
////////////////////////////////////////////

function img11Hover (){
   document.getElementById('img-11').src ='../assets/chat-c.png'
}
function img11Hoverout(){
    document.getElementById('img-11').src ='../assets/chat-c-1.png'
}

// 1)
//Text input and submit  button
//intern =>  Intern s e
//ase => Associate s e
//se => s e 
//sse => senior s e
//atl => Assistant Tech Lead
//tl => Tech Lead
// Error key word


//2)
//stor array and genarate Random Number 100 (1-100)
//text input and submit button
//input 0-100  value in text faild
//Display Moduls

// 3)
// uName = AdMin
// uPass = admin123
// input user name and password
// Display Login Success..!
// disple Login finally..!