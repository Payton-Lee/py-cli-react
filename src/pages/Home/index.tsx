import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Link to='/home/detail'>detail页面</Link>
            <Link to='/home/list'>list页面</Link>
            <Outlet />
        </div>
    );
}
