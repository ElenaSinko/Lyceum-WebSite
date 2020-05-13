import {CHANGE_MENU_STATE, CLOSE_MENU} from "./actionTypes";

export function changeMenuState() {
    return {
        type: CHANGE_MENU_STATE
    }
}

export function closeMenu() {
    return {
        type: CLOSE_MENU
    }
}

