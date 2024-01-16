import { useQuery } from '@tanstack/react-query';
import { Table } from 'antd';
import { getUsers } from '../utils/user.api';

const UserComponent = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers(),
        staleTime: 300000,
        retry: 3
    })

    if (error) return 'An error has occurred: ' + error.message

    return (
        <Table loading={isLoading} dataSource={data ? data.data : []} columns={[
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                key: 'phone',
            },
            {
                title: 'Website',
                dataIndex: 'website',
                key: 'website',
            },
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
            },
        ]
        } />
    )
}

export default UserComponent