import {bestSellingTv} from "../constants/inventory.js";

export function displayProducts() {
    // for (let i = 0; i < inventory.length; i++) {
    //     return inventory[i].displayName;
    // }

    let text = `${bestSellingTv.brand} `;
    return text;
}

export function displayAvailableSizes(tv) {
    let text;
    for (let i = 0; i < tv.availableSizes.length; i++) {
        text += `${tv.availableSizes[i]} inch (${tv.availableSizes[i]*2.54} cm) `;
    }

    return text;
}


export function displayTvName(tv){
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

export function displayPrice(tv)
{
    return ` €${tv.price},-`
}





export function displayBestTvPrice() {
    return displayPrice(bestSellingTv);
}


export function displayBestBoughtTvName() {
    return displayTvName(bestSellingTv);
}

export function displayBestTvAvailableSizes() {
    return displayAvailableSizes(bestSellingTv);
}

export function getAllTVNames(tvList) {
    for (let i = 0; i < tvList.length; i++) {
        tvList[i].names;
    }
}

export function getAllTvSizes(tvList) {
    for (let i = 0; i < tvList.length; i++) {
        for (let j = 0; j < tvList[i].sizes.length; j++) {
            tvList[i].sizes[j];
        }
    }
}

export function getAllOptions(tvList) {
    for (let i = 0; i < tvList.length; i++) {
        for (let j = 0; j < tvList[i].options.length; j++) {
            
        }
    }
}