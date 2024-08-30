import {inventory} from "../constants/inventory.js";

export function consoleFunctions (inventorys) {
    console.log("List of tv names - sorting Most sold");

    for (let i = 0; i < inventorys.length; i++) {
        console.log(inventorys[i].name);
    }

}

// sort on most sold
export function meestVerkochtEerst([...television]) {
    const sortedTv = [...television].sort((previousTv, currentTv) => {
        return currentTv.sold - previousTv.sold;
    });

    console.log(sortedTv);
    return sortedTv;
}

// sort on cheapest
export function goedKoopsteEerst([...television]) {
    const sortedTv = [...television].sort((previousTv, currentTv) => {
        return previousTv.price - currentTv.price;
    });

    console.log(sortedTv);
    return sortedTv;
}

// sort on refresh rate
export function meestGeschiktVoorSportEerst([...television]) {
    const sortedTv = [...television].sort((previousTv, currentTv) => {
        return currentTv.refreshRate - previousTv.refreshRate;
    });

    console.log(sortedTv);
    return sortedTv;
}

// double level sorting on available sizes
export function grootsteSchermgroottesEerst([...television]) {
    const sortedTv = [...television].sort((previousTv, currentTv) => {
        return sortTvSizes(currentTv) - sortTvSizes(previousTv);
    });

    // // console.log(sortedTv);
    // console.log("TV")
    // console.log(inventory[6]);
    //
    // const sorted = inventory[6].availableSizes.sort((previousSize, currentSize) => {
    //     return currentSize - previousSize;
    // })
    // console.log("Sorted");
    // console.log(sorted);
    // console.log("highest")
    // console.log(sorted[0]);
    //
    // sortTvSizes();

    console.log(sortedTv);
    return sortedTv;
}

// private function sorting for available sizes
function sortTvSizes(tv) {
    const sortedSizes = tv.availableSizes.sort((previousSize, currentSize) => {
        return currentSize - previousSize;
    })

    return sortedSizes[0];
}