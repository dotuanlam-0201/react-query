import { Card, Col, Divider, Rate, Row, Tag } from "antd"
import MainLayout from "../layout/MainLayout"

const HomeComponent = () => {
  return (
    <MainLayout>
      <Divider />
      <Row  justify={'start'} gutter={[40, 40]}>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Card
            cover={<img src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" />}
            hoverable
          >
            <div>
              Iphone 14
            </div>
            <div>
              <b>
                500 USD
              </b>
            </div>
            <br />
            <div style={{ color: '#b3b3b3', textDecoration: 'line-through' }}>
              600 USD () <Tag color="green" >-15%</Tag>
            </div>
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <small style={{ textWrap: 'nowrap' }}>original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji</small>
            </div>
            <br />
            <Row justify={'space-between'}>
              <Col>
                <Rate defaultValue={5} />
              </Col>
              <Col>
                (12)
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Card
            cover={<img src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" />}
            hoverable
          >
            <div>
              Iphone 14
            </div>
            <div>
              <b>
                500 USD
              </b>
            </div>
            <br />
            <div style={{ color: '#b3b3b3', textDecoration: 'line-through' }}>
              600 USD () <Tag color="green" >-15%</Tag>
            </div>
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <small style={{ textWrap: 'nowrap' }}>original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji</small>
            </div>
            <br />
            <Row justify={'space-between'}>
              <Col>
                <Rate defaultValue={5} />
              </Col>
              <Col>
                (12)
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Card
            cover={<img src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" />}
            hoverable
          >
            <div>
              Iphone 14
            </div>
            <div>
              <b>
                500 USD
              </b>
            </div>
            <br />
            <div style={{ color: '#b3b3b3', textDecoration: 'line-through' }}>
              600 USD () <Tag color="green" >-15%</Tag>
            </div>
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <small style={{ textWrap: 'nowrap' }}>original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji</small>
            </div>
            <br />
            <Row justify={'space-between'}>
              <Col>
                <Rate defaultValue={5} />
              </Col>
              <Col>
                (12)
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Card
            cover={<img alt='iphone 14' src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" />}
            hoverable
          >
            <div>
              Iphone 14
            </div>
            <div>
              <b>
                500 USD
              </b>
            </div>
            <br />
            <div style={{ color: '#b3b3b3', textDecoration: 'line-through' }}>
              600 USD () <Tag color="green" >-15%</Tag>
            </div>
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <small style={{ textWrap: 'nowrap' }}>original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji</small>
            </div>
            <br />
            <Row justify={'space-between'}>
              <Col>
                <Rate defaultValue={5} />
              </Col>
              <Col>
                (12)
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Card
            cover={<img src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" />}
            hoverable
          >
            <div>
              Iphone 14
            </div>
            <div>
              <b>
                500 USD
              </b>
            </div>
            <br />
            <div style={{ color: '#b3b3b3', textDecoration: 'line-through' }}>
              600 USD () <Tag color="green" >-15%</Tag>
            </div>
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <small style={{ textWrap: 'nowrap' }}>original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji</small>
            </div>
            <br />
            <Row justify={'space-between'}>
              <Col>
                <Rate defaultValue={5} />
              </Col>
              <Col>
                (12)
              </Col>
            </Row>
          </Card>
        </Col>

      </Row>
    </MainLayout>
  )
}

export default HomeComponent