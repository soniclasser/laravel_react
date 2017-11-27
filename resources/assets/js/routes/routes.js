import Login from '../pages/login'
import Home from '../pages/home'
import Page404 from '../pages/page404'


const routes = [
    {
        path: '/',
        exact: true,
        auth: false,
        component: Login,
    },
    {
        path: '/home',
        exact: true,
        auth: true,
        component: Home,
    },
]

export default routes
