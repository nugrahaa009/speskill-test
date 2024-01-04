import { Layout } from 'antd'
import Content from './Content'

const Main = (props) => {
  return (
    <Layout style={{ background: '#EEEEEE', overflowX: 'hidden', minHeight: '100vh' }}>
      <Content {...props} />
    </Layout>
  )
}

export default Main