import PropTypes from 'prop-types'
import { Layout } from 'antd'

const Content = (props) => {
  const { children } = props

  return (
    <Layout.Content>
      {children}
    </Layout.Content>
  )
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Content