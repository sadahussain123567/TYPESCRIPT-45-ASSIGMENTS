function show_magicians(magicians:string[]){
    magicians.forEach(name=>console.log(name));
}
function make_great(magicians:string[]){
   return  magicians.map(names=>`the great ${names}`)
}
let magician_names=["harry","ajjubhai","munna"];

// let great_magicians=make_great(magician_names);
//\\\ making acopy of original array//\\\\\
let copy_magician_name=magician_names.slice();

let copy_great_magician=make_great(copy_magician_name);
////show both arrays\\\\\
show_magicians(magician_names);
show_magicians(copy_great_magician);