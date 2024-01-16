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
                        <Link to={{ pathname: '/users' }}>User</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={{ pathname: '/posts' }}>Post</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={{ pathname: '/photos' }}>Photo</Link>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout.Content>
                {children}
            </Layout.Content>
        </Layout>
    )
}

export default MainLayout