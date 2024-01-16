import { http } from "./http"

export const getPhotos = () => {
    return http.get('photos', {
        params: {
            _limit: 20
        }
    })
}