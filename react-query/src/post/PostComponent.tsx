import { useQuery } from '@tanstack/react-query'
import { Table } from 'antd'

const PostComponent = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/posts').then(
                (res) => res.json(),
            ),
    })

    if (error) return 'An error has occurred: ' + error.message

    return (
        <Table loading={isLoading} dataSource={data} columns={[
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: 'Body',
                dataIndex: 'body',
                key: 'body',
            },
        ]
        } />
    )
}

export default PostComponent