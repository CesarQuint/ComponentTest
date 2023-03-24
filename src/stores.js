import { writable } from "svelte/store";

export const ToastStore = Toast(null)

function Toast() {

    const { subscribe, update, set } = writable(null)

    function error(data) {
        set({
            color: 'danger',
            message: data.message
        })
        close()
    }

    function warning(message) {
        set({
            color: 'warning',
            message
        })
        close()
    }

    function info(message) {
        set({
            color: 'info',
            message
        })
        close()
    }

    function success(message) {
        set({
            color: 'success',
            message
        })
        close()
    }

    function close() {
        setTimeout(() => {
            set(null)
        }, 3000)
    }

    return {
        error,
        warning,
        info,
        success,
        subscribe,
        update,
        set
    }
}