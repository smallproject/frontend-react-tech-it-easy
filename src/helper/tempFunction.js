import {inventory} from "../constants/inventory.js";

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

    console.log(count);
    return count;
}

export function getToBeSoldCount() {
    return getStockCount() - getSoldCount();
}