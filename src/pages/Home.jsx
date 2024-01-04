import { useEffect } from 'react'
import { Col, Flex, Row, Typography } from 'antd'
import { LoadingPage } from '../components/Loading'
import { TableComponent } from '../components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct, unmountListProduct } from '../redux/actions/productAction'
import { Hero } from '../components/Section'

const { Title } = Typography

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProduct())

    return () => {
      dispatch(unmountListProduct())
    }
  }, [dispatch])

  const { loading, data } = useSelector((state) => state.listProduct)

  if (loading) return <LoadingPage />

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Hero />
      </Col>
      <Col span={24}>
        <div className='container'>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Flex justify='center'>
                <Title>SPE Frontend Shop</Title>
              </Flex>
            </Col>
            <Col span={24}>
              <TableComponent data={data} />
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default Home