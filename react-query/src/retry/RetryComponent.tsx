import { useQuery } from "@tanstack/react-query"
import { Typography } from "antd"
import React, { useEffect } from "react"

const RetryComponent = () => {
    const [countRetry, setCountRetry] = React.useState(0)

    const q = useQuery({
        queryKey: ['testRetry'],
        queryFn: () =>
            fetch('https://www.youtube.com/youtubei/v1/next?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false').then(
                (res) => res.json(),
            ),
        retryDelay: 1000,
        retry: 1000,
    })

    useEffect(() => {
        setCountRetry(countRetry + 1)
    }, [JSON.stringify(q)])


    return (
        <Typography.Title level={1}>
            https://www.youtube.com/youtubei/v1/next?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false
            <div>
                Call: {countRetry} time(s)
            </div>
        </Typography.Title>
    )
}

export default RetryComponent