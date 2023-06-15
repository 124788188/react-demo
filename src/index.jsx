import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import { Router } from './routes/index'
import { AliveScope } from 'react-activation'
import store from './store'
import 'antd/dist/antd.less'
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <AliveScope><Router /></AliveScope>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

