import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect( () => {
        axios.get('http://localhost:5000/reviews')
            .then( res => {
                setReviews(res.data);
                setLoading(false);
            }).catch( err => {
                setError(err.message);
            })
    }, [])

    return (
       { reviews, loading, error }
    );
};

export default useReviews;