import axios from 'axios';

export const client =  () => {
    const defaultOptions = {
        headers: {
            "Content-Type": "application/json",
          
        },
    };

    return {
        get: async (url, options = {}) => await axios.get(url, { ...defaultOptions, ...options }),
        post: async (url, data={}, options = {}) => await axios.post(url, data, { ...defaultOptions, ...options }),
    };
};