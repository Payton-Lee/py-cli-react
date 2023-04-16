import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navigator({ to }: { to: string }) {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(to);
    }, []);
    return null;
}
