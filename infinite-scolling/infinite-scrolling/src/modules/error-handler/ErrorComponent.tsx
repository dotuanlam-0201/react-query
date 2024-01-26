import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

const ErrorComponent = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Result status={'500'} />
            <Link to={{
                pathname: '/'
            }}>
                <Button type="primary">
                    Back
                </Button>
            </Link>
        </div>
    )
}

export default ErrorComponent