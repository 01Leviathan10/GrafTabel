import axios from "axios";

const jednako = (url, callBackSuccess, callBackFail)=>{
    axios.get(url).then(response=>callBackSuccess(response)).catch(error=>callBackFail(error))}

export default jednako;