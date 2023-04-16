import React from 'react';
import { useRoutes } from 'react-router-dom';
import Loadable from '@loadable/component';
import Navigator from './Navigator';

const LoadingTip = () => <div>加载路由ing...</div>;

const Home = Loadable(() => import('../pages/Home'), {
    fallback: LoadingTip(),
});
const Detail = Loadable(() => import('../pages/Detail'), {
    fallback: LoadingTip(),
});
const List = Loadable(() => import('../pages/List'), {
    fallback: LoadingTip(),
});

const RouterConfig = () => {
    return useRoutes([
        {
            path: '/',
            element: <Navigator to='/home' />,
        },
        {
            path: '/home',
            element: <Home />,
            children: [
                {
                    path: '/home/detail',
                    element: <Detail />,
                },
                {
                    path: '/home/list',
                    element: <List />,
                },
            ],
        },
    ]);
};

export default RouterConfig;
