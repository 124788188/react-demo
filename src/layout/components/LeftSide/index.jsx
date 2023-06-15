import { useNavigate } from "react-router-dom";

const Index = (props) => {
    const { menu } = props
    const navigate = useNavigate()
    const handlePage = (url, params) => {
        let search = ''
        if (params) {
            search = '?'
            Object.keys(params).forEach(key => search += `${key}=${params[key]}&`)
        }
        navigate(url + search, {
            state: {
                name: '测试传值',
            }
        })
    }

    return (
        <div className="left-side">
            {
                menu.map((ele, index) => <div key={index} onClick={() => handlePage(ele.path)}>{ele.name}</div>)
            }
        </div>
    )
}

export default Index