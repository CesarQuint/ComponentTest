import { writable } from "svelte/store";

export const ToastStore = Toast(null)

function Toast() {

    const { subscribe, update, set } = writable(null)

    function error(data) {
        set({
            color: 'danger',
            message: data.message,
            isLight:data.isLight,
            link:data.link
        })
        close()
    }

    function warning(data) {
        set({
            color: 'warning',
            message: data.message,
            isLight:data.isLight,
            link:data.link
        })
        close()
    }

    function info(data) {
        set({
            color: 'info',
            message: data.message,
            isLight:data.isLight,
            link:data.link
        })
        close()
    }

    function success(data) {
        set({
            color: 'success',
            message: data.message,
            isLight:data.isLight,
            link:data.link
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