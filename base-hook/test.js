const sum = (a,b)=>{
    return a+b
}
sum(1,3)

const sum2 = (a,b)=> a+b
sum2(1,3)

const obj = (a,b)=>({a:a,b:b})
// nếu ko dùng () js sẽ hiểu là block code
obj(1,3)

const log = a => console.log(a)
log('loi123')

const course  = {
    name: "js basic",
    getName: function(){
        return this.name
        //từ khoá this ở đây chính là thằng gọi đến phương thức getName tức là tk course
    }
}
console.log(course.getName())

//arr func ko thể sử dụng để làm function construtor(lỗi course2 is not a constructor)
const course2 =  function(name,price){
    this.name = name,
    this.price = price
}
const jsCourse =  new course2('js','100')
console.log(jsCourse)

//IIFE(Immediately invoked function expression-tạo ra func và gọi ngay lập tức)
//phải dùng dấu ; trước IIFE bơi vì nó sẽ tưởng thằng trước nó là 1 function
//let fullName = 'loi'()()
;(function(){
    console.log('loi123')
})()
;(function(message){
    console.log(message)
})('loi123')
