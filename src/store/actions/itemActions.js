import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL_ITEMS, DECREASE_QTY, INCREASE_QTY } from "./actionTypes";

export function addItem(itemData) {
    return {
        type: ADD_ITEM,
        payload: itemData
    }
}

export function removeItem(itemId) {
    return {
        type: REMOVE_ITEM,
        payload: itemId
    }
}

export function removeAllItems() {
    return {
        type: REMOVE_ALL_ITEMS
    }
}

export function increaseQty(itemId) {
    return {
        type: INCREASE_QTY,
        payload: itemId
    }
}

export function decreaseQty(itemId) {
    return {
        type: DECREASE_QTY,
        payload: itemId
    }
}