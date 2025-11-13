// console.log('welcome to Type script')
// function fun1 (a,b){
//     return a+b
// }
// x = fun1(5,5)
// console.log(x)
// type Annotation
// var age :number = 23;
// var name : string = 'ram';
// var status : boolean =true;
// var var2 : any ='Anu';
// console.log( name,age,status,var2);
// Typescript Arrays Annotation
// let name : string[]=['ram','Anu','Ammu']
// let num : number[]=[1,2,3]
// let aar : any []=['Ram',26,true]
// console.log(name,num,aar)
// let names : Array<string>=['ram','ammu','anu']
// let numb : Array<Number>=[1,2,3]
// console.log(names,numb)
// Type Script class
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.display = function () {
        console.log('Id: ', this.id);
        console.log('Name: ', this.name);
    };
    Student.prototype.getdata = function () {
        return 'Hello';
    };
    return Student;
}());
var x = new Student();
x.name = 'Ram';
x.id = 1;
x.display();
console.log(x.getdata());
var y = new Student();
y.name = 'Anu';
y.id = 2;
y.display();
console.log(y.getdata());
