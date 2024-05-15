// no 1 method\\\\\\\
// but showing error
// function create_car(manufacturer,model,...options){
// let car={
//     manufacturer:manufacturer,
//     model:model
// };
// options.forEach(optionss =>{
//     let[key,value]= optionss.split(":");
//     car.model[key.trim()]=value.trim();
// });
// return car;
// }
// let my_car=create_car("toyota","corolla","color:black",)
// console.log(my_car)
// trying 2
type car={
    manufacture:string
    model:string
    [key:string]:any
}
function createcar(manufacture:string,model:string,optional:Record<string,any>):car{
    return{
        manufacture,
        model,
        ...optional
    }
}
const mycar:car=createcar("toyota","corolla",{color:"silver",year: "2024"})
console.log(mycar)