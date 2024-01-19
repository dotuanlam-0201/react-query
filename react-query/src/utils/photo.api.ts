import { http } from "./http"

export const getPhotos = () => {
    return http.get('phostos', {
        params: {
            _limit: 20
        }
    })
}