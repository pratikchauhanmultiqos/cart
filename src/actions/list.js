export const showList = () => {
    return {
        type: "SHOW_LIST"
    }
}

export const addList = (payload) => {
    return {
        type: "ADD_LIST",
        payload
    }
}

export const isComplete = (payload) => {
    return {
        type: "IS_COMPLETE",
        payload
    }
}

export const isCompleted = (payload) => {
    return {
        type: "IS_COMPLETED",
        payload
    }
}

export const isDelete = (payload) => {
    return {
        type: "IS_DELETE",
        payload
    }
}