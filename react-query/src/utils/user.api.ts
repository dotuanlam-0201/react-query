import { http } from "./http"

export const getUsers = () => {
    return http.get('users', {
    })
}
export const getUsersById = (id: string) => {
    return http.get(`users/${id}`, {
    })
}

