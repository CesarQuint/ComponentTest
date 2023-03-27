import { writable } from "svelte/store";

export const ModalStore = writable(true)
export const ToastStore = Toast(null)

export const UserStore = Model('User')

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

function Model(name) {

    const { subscribe, update, set } = writable(null)

    function modalCreate(data = null) {
        ModalStore.set(`${name}Create`)
        if(data) set(data)
    }
    
    function modalRead(data = null) {
        ModalStore.set(`${name}Read`)
        if(data) set(data)
    }
    
    function modalUpdate(data = null) {
        ModalStore.set(`${name}Update`)
        if(data) set(data)
    }

    function modalDelete(data = null) {
        ModalStore.set(`${name}Delete`)
        if(data) set(data)
    }
    
    function modalOpen(modalName = '', data = null) {
        ModalStore.set(`${name}${modalName}`)
        if(data) set(data)
    }

    function modalClose() {
        ModalStore.set(null)
        set(null)
    }

    return {
        modalCreate,
        modalRead,
        modalUpdate,
        modalDelete,
        modalOpen,
        modalClose,
        subscribe,
        update,
        set
    }
}