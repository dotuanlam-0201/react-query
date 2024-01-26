import { Col, Row } from "antd"
import { Link } from "react-router-dom"
import FormSearchComponent from "../../components/FormSearchComponent"

const HeaderComponent = () => {
    return (
        <Row justify={'space-between'}>
            <Col>
                <Link to={{
                    pathname: '/'
                }}>
                    <span>
                        Infinite Scrolling
                    </span>
                </Link>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
                <FormSearchComponent />
            </Col>
        </Row>
    )
}

export default HeaderComponent
