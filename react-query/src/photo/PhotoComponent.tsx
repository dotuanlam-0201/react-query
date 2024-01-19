import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Avatar, Row } from "antd";
import { TypePhoto } from "../models";
import { getPhotos } from "../utils/photo.api";

const PhotoComponent = () => {
    
    const { data, isLoading, error } = useQuery({
        queryKey: ['photos'],
        queryFn: () => getPhotos(),
        placeholderData: keepPreviousData,
    })

    if (isLoading) {
        return 'Loading...'
    }

    if (error) return 'An error has occurred: ' + error.message


    return (
        <Row gutter={[10, 10]}>
            {data && data.data.map((photo:TypePhoto)=>{
                return <Avatar size={80} shape={'square'} src={photo.url}/>
            })}
        </Row>
    )
}

export default PhotoComponent