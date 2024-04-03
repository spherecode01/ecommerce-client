/*import { useEffect, useState } from 'react';
import { fetchDatafromApi } from './../../utils/api';

const useFetch = (endpoint) =>{
    const [data, setData] = useState();

    useEffect( ()=>{
        makeApiCall();
    },[endpoint])

    const makeApiCall = async () => {
        const res = await fetchDatafromApi(endpoint)
        setData(res)
    }
    return {data};
}

export default useFetch;*/

import { useEffect, useState, useCallback } from 'react';
import { fetchDatafromApi } from './../../utils/api';

const useFetch = (endpoint) => {
    const [data, setData] = useState();

    const makeApiCall = useCallback(async () => {
        const res = await fetchDatafromApi(endpoint);
        setData(res);
    }, [endpoint]); // Include endpoint in the dependency array of useCallback

    useEffect(() => {
        makeApiCall();
    }, [makeApiCall]); // Include makeApiCall in the dependency array of useEffect

    return { data };
};

export default useFetch;

