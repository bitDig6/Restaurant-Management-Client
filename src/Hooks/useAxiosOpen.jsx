import axios from "axios";
import React from 'react';

const axiosOpen = axios.create({
    baseURL: `http://localhost:5000`
});

const useAxiosOpen = () => {
    return axiosOpen;
};

export default useAxiosOpen;