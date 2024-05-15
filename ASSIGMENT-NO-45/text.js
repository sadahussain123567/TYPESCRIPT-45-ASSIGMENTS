"use strict";
function createcar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createcar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
