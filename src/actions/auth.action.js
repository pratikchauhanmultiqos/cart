export const getUser = (payload) => {
    return {
        type: "GET_USER",
        payload
    }
}

export const isUserLogin = (payload) => {
    return {
        type: "IS_LOGIN",
        payload
    }
}

export const userLogin = (payload) => {
    return {
        type: "LOGIN_USER",
        payload
    }
}