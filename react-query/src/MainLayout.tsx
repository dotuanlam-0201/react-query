import { Layout, Menu } from 'antd'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout.Sider>
                <Menu theme={'dark'}>
                    <Menu.Item>
                        <Link to={{ pathname: '/' }}>Home</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={{ pathname: '/user' }}>User</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={{ pathname: '/users' }}>Users</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={{ pathname: '/post' }}>Post</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={{ pathname: '/photo' }}>Photo</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={{ pathname: '/retry' }}>Retry Call Api </Link>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout.Content style={{ padding: 24 }}>
                {children}
            </Layout.Content>
        </Layout>
    )
}

export default MainLayout