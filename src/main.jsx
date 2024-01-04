import App from './App.jsx'
import './styles/index.css'
import store from './redux/index.js'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ConfigProvider theme={{ token: { colorPrimary: '#FFC100' } }}>
      <App />
    </ConfigProvider>
  </Provider>,
)
