import { useEffect, useState } from 'react';
import Style from './style.module.less';
import { getIndex, login } from './request/api';
import RouterConfig from './router/RouterConfig';

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        getIndex().then((res) => {
            console.log(res);
        });
        login({ username: 'admin', password: '12345678' }).then((res) => {
            console.log(res);
        });
    }, []);

    return (
        <div className={`${Style}`}>
            <RouterConfig />
        </div>
    );
}

export default App;
