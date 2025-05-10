import { useState } from "react";

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

    async function sendRequest() {
        setIsLoading(true);
        try {
            const resData=sendHttpRequest();
            setData(resData);

        }
        catch(error) {
             setError(error.message || 'Something went wrong!')
        }
        setIsLoading(false)
    }

    return {
        data,
        isLoading,
        error
    }


}