import { useQueries } from '@tanstack/react-query';
import { Table } from 'antd';
import { getUsersById } from '../utils/user.api';

const UsersComponent = () => {
    const users = ['1', '2', '3', '4']

    const userQueries = useQueries({
        queries: users.map((user) => {
            return {
                queryKey: ['user', user],
                queryFn: () => getUsersById(user),
            }
        }),
    })

    const data = userQueries.map((item) => item.data?.data || {})
    
    return (
        <Table loading={false} dataSource={data} columns={[
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

export default UsersComponent