import PropTypes from 'prop-types'
import { Col, Flex, Image, Row, Space, Table, Typography } from 'antd'

const { Text } = Typography

const columns = () => [
  {
    title: 'PRODUCT',
    key: 'product',
    render: (record) => (
      <Row gutter={16}>
        <Col span={6}>
          <Image src={record.product.media_url} width={150} />
        </Col>
        <Col span={18}>
          <Space direction='vertical'>
            <Text style={{ color: '#00DBDE' }}>{record.product.code}</Text>
            <Text style={{ color: '#111111', fontSize: 16, fontWeight: 500 }}>{record.product.name}</Text>
            <Text style={{ color: '#111111' }}>{`IDR ${record.product.price.toLocaleString()}`}</Text>
            <Text style={{ fontSize: 12 }} type='danger'>{`${record.product.stock} in stock`}</Text>
          </Space>
        </Col>
      </Row>
    )
  },
  {
    title: 'QUANTITY',
    key: 'quantity',
    align: 'center',
    render: (record) => (
      <Text style={{ color: '#111111' }}>{record.quantity}</Text>
    )
  },
  {
    title: 'SUBTOTAL',
    key: 'subtotal',
    align: 'center',
    render: (record) => {
      const subTotal = record.product.price * record.quantity
      return (
        <Text style={{ color: '#111111' }}>{`IDR ${subTotal.toLocaleString()}`}</Text>
      )
    }
  }
]

const TableComponent = (props) => {
  const { data } = props

  const priceProduct = data.reduce((accumulator, item) => {
    return accumulator + (item.quantity * item.product.price)
  }, 0)
  
  return (
    <Table
      dataSource={data}
      columns={columns()}
      rowKey={(record) => record.product.code }
      footer={() => (
        <Flex justify='flex-end'>
          <Space>
            <Text style={{ color: '#EEEEEE', fontSize: 20 }}>Total</Text>
            <Text style={{ color: '#EEEEEE', fontSize: 20 }}>{`IDR ${priceProduct.toLocaleString()}`}</Text>
          </Space>
        </Flex>
      )}
    />
  )
}

TableComponent.propTypes = {
  data: PropTypes.array
}

export default TableComponent