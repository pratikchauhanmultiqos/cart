export const allProduts = () => {
    return {
        type: "ALL_PRODUCT"
    }
}

export const addCart = (payload) => {
    return {
        type: "ADD_CART",
        payload
    }
}

export const removeCart = (payload) => {
    return {
        type: "REMOVE_CART",
        payload
    }
}
export const removeCartDec = (payload) => {
    return {
        type: "REMOVE_CART_DEC",
        payload
    }
}



export const watchCart = (payload) => {
    return {
        type: "WATCH_LIST",
        payload
    }
}

export const updateCart = (payload) => {
    return {
        type: "UPDATE_CART",
        payload
    }
}

export const addToWatchList = (payload) => {
    return {
        type: "ADD_WATCH_LIST",
        payload
    }
}

export const removeToWatchList = (payload) => {
    return {
        type: "REMOVE_WATCH_LIST",
        payload
    }
}

export const WatchList = (payload) => {
    return {
        type: "WATCH_LIST",
    }
}