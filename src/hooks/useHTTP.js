async function sendHttpRequest({url,config}) {
   const response = await fetch(url,config);
   const resData= await response.json();
   if(!response.ok) {
    throw new Error(resData.message || "an Error occured!")
   }

   return resData;
}


export default function useHTTP() {
    function sendRequest() {
        sendHttpRequest();
    }


}