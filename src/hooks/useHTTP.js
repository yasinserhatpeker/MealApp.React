import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest({url,config}) {
   const response = await fetch(url,config);
   const resData= await response.json();
   if(!response.ok) {
    throw new Error(resData.message || "an Error occured!")
   }

   return resData;
}


export default function useHTTP() {

    const [data,setData]=useState();
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState();

   const sendRequest = useCallback(async function sendRequest() {
        setIsLoading(true);
        try {
            const resData = sendHttpRequest(url,config);
            setData(resData);

        }
        catch(error) {
             setError(error.message || 'Something went wrong!')
        }
        setIsLoading(false)
    },[url,config])

    useEffect(()=> {
        if(config && config.method ==='GET' ) {
            sendRequest();
        }
    },[sendRequest,config])

 return {
    data,
    isLoading,
    error,
    sendRequest
 }
}