import {inventory} from "../constants/inventory.js";

// return sold count and write on console
export function getSoldCount () {
    let count = 0;
    for (let i = 0; i < inventory.length; i++) {
        count += inventory[i].sold;
    }

    console.log(count);
    return count;
}

export function getStockCount () {
    let count = 0;
    for (let i = 0; i < inventory.length; i++) {
        count += inventory[i].originalStock;
    }

// return stock count and write on console
    console.log(count);
    return count;
}

// return to be sold count
export function getToBeSoldCount() {
    return getStockCount() - getSoldCount();
}