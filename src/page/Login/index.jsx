import { useNavigate } from "react-router-dom";
import './index.scss';
import { Button } from 'antd';
import { _getUser } from "../../service/login";

const Login = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    _getUser().then(res => {
      const { code, data } = res
      if (code === 200) {
        const { user } = data
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/')
      }
    }).catch(() => { })
  }

  return (
    <div className="login">
      <div className="login-main">
        <Button type="primary" onClick={handleClick}>登录</Button>
      </div>
    </div>
  );
}

export default Login
