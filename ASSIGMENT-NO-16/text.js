"use strict";
let guestlist = ["hamza", "ahmed", "inam", "akmal"];
//dontcome variable for remove one guest from variables
let dontcome = guestlist[0];
// console for print
console.log(guestlist, "kaam se bahar gaya hua hy nhi aah skta");
//spice for add and remove guest variables
guestlist.splice(0, 1, "aamir");
console.log("good news ! we have found a bigger table on dinner");
//unshift for 1st index adding 
guestlist.unshift("saad");
//adding new value at ending index
guestlist.push("muheeb");
//adding new guest in middle index
//math.floor zarori lagana ha
let middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "usama");
console.log("updated list of our guest");
//guestlish varaiable or foreach har name ko alag kr ke likhega or data jo store kia hy
guestlist.forEach(each => console.log(`salam ${each}, would you like to dinner with me`));
