import { Layout } from 'antd'
import React from 'react'
import HeaderComponent from './HeaderComponent'

interface IProps {
    children: React.ReactNode
}

const MainLayout = (props: IProps) => {
    return (
        <Layout>
            <Layout.Header style={{ width: '100%' }} id='header' >
                <HeaderComponent />
            </Layout.Header>
            <Layout.Content id='content'>
                {props.children}
            </Layout.Content>
        </Layout>
    )
}

export default MainLayout