function show_magicians(magicians:string[]){
    magicians.forEach(name=>console.log(name));
}
function make_great(magicians:string[]){
   return  magicians.map(names=>console.log(`the great ${names}`))
}
let magician_names=["harry","ajjubhai","munna"];

let great_magicians=make_great(magician_names);
show_magicians(magician_names)