import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import LeftSide from '../components/LeftSide'
import TopHeader from '../components/TopHeader'
import RouterBeforeEach from '../../routes/RouterBeforeEach'
import { routes } from "../../routes";
import { transPathname } from "../../utils/common"
import './index.scss'

const Index = (props) => {
    const [menu, setMenu] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        // 主页面重定向到子页面
        if (props.children.redirect && transPathname(location.pathname) === transPathname(props.children.path)) {
            setTimeout(() => navigate(props.children.redirect, { replace: true }))
        }
    })

    useEffect(() => {
        const auth = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).auth : ''
        const p_route = routes.filter(ele => ele.path === '/')[0]
        const menu_temp = p_route.children.filter(ele => ele.auth.indexOf(auth) !== -1)
        setMenu(menu_temp)
    }, [])

    return (
        <div className="portal">
            <div className="portal-left">
                <LeftSide menu={menu} />
            </div>
            <div className="portal-right">
                <TopHeader></TopHeader>
                <div className='page-container'>
                    <RouterBeforeEach />
                </div>

            </div>
        </div>
    );
}

export default Index
