import {inventory} from "../constants/inventory.js";

export function consoleFunctions (inventorys) {
    console.log("List of tv names - sorting Most sold");

    for (let i = 0; i < inventorys.length; i++) {
        console.log(inventorys[i].name);
    }

}
export function meestVerkochtEerst() {
    const sortedTv = inventory.sort((previousSold, currentSold) => {
        return currentSold.sold - previousSold.sold;
    });

    console.log(sortedTv);
}

export function goedKoopsteEerst() {
    const sortedTv = inventory.sort((previousSold, currentSold) => {
        return previousSold.price - currentSold.price;
    });

    console.log(sortedTv);
}

export function meestGeschiktVoorSportEerst() {
    const sortedTv = inventory.sort((previousSold, currentSold) => {
        return currentSold.refreshRate - previousSold.refreshRate;
    });

    console.log(sortedTv);
}