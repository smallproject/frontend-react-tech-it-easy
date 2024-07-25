import {inventory} from "../constants/inventory.js";
//opdracht 1 deel 2
export function tempFunction () {
    console.log("List of tv names");
    for (let i = 0; i < inventory.length; i++) {
        console.log(inventory[i].name);
    }

}

//opdracht 1b
export function getSoldOutTV () {
    let soldOutCount = [];
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].sold === inventory[i].originalStock) {
            soldOutCount.push(inventory[i].name);
        }
    }

    console.log("sold out:", soldOutCount)
}

function isSizeOf(tv) {
    return tv.availableSizes >= 65;
}

//needs to be fixed
//opdracht 1c
export function getAvailableTVOnSize() {
    let availableOnSizeCount = [];
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].availableSizes.find(isSizeOf)) {
            availableOnSizeCount.push(inventory[i].size);
        }
    }


    console.log("available onSize: ", availableOnSizeCount)
}


function isTvType(tv) {
    return tv.type === "NH3216SMART";
}

//opdracht 1d
export function getTvOnType() {
    let tv = inventory.find(isTvType);
    console.log("Tv type: NH3216SMART ", tv);
}

function isRefreshRate(tv) {
    return tv.refreshRate >= 100;
}

//opdracht 1e
export function getAvaialableTVOnRefreshRate() {
    let tv = inventory.find(isRefreshRate);
    console.log("Tv refresh rate: 100hz", tv);
}


function isAmbilight(tv) {
    return tv.options.name === "ambiLight";
}
function isApplicable(tv) {
    return tv.options.applicable === true;
}

//opdracht 1f
export function getAvailableTVOnAmbilightOption() {
    let tv = inventory.filter(isAmbilight).find(isApplicable);
    console.log("Ambilight TV: ", tv);
}