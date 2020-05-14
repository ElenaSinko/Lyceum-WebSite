import {CHANGE_MENU_STATE, CLOSE_MENU, OPEN_MODAL_WINDOW, CLOSE_MODAL_WINDOW} from "./actionTypes";

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

export function openModalWindow(message) {
    return {
        type: OPEN_MODAL_WINDOW,
        message: message
    }
}

export function closeModalWindow() {
    return {
        type: CLOSE_MODAL_WINDOW
    }
}

