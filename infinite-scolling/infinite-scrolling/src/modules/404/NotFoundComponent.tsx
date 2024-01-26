import { Button, Result } from "antd"
import { Link } from "react-router-dom"

const NotFoundComponent = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Result status={'404'} />
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

export default NotFoundComponent