import {inventory} from "../constants/inventory.js";

export function tempFunction() {
 const productTypes = inventory.map((tv) => {
     return tv.type;
 });

 console.log(productTypes);
}