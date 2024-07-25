import {inventory} from "../constants/inventory.js";

export function getTvTypes() {
 const productTypes = inventory.map((tv) => {
     return tv.type;
 });

 console.log(productTypes);
}

//niet nodig
export function getTvNames() {
    const productNames = inventory.map((tv) => {
       return tv.name;
    });

    console.log(productNames);
}

//niet nodig
export function getTvBrands() {
    const productBrands = inventory.map((tv) => {
        return tv.brand;
    });

    console.log(productBrands);
}