import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useMenus = (category) => {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5000/menus?category=${category}`)
            .then( res => {
                setMenus(res.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
    }, [category]);
    

    return (
      { menus, loading, error}
    );
};

export default useMenus;