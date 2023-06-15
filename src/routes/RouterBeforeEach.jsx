import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import { checkRouterAuth } from './index'
import { useEffect } from 'react'
import { connect } from "react-redux";
import KeepAlive from 'react-activation'

const RouterBeforeEach = () => {
  const navigate = useNavigate()
  const location = useLocation()
  let obj = {}
  useEffect(() => {
    let auth = null
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'))
      auth = user.auth
    }
    obj = checkRouterAuth(location.pathname, auth)
    if (!obj) {
      navigate('/', { replace: true })
    }
  })
  return (
    // <KeepAlive>
    <Outlet />
    // </KeepAlive>
  )
}

export default connect()(RouterBeforeEach)