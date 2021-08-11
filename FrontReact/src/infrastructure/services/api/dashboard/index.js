import axios from "axios";

const functions = {
    loadingOKR: async () => {
        const iduser = "6112ef6370e2131bb4730d1a"
        const response = await axios.get('https://back-spring-grupo-5.herokuapp.com/api/getokrbyuserid/'+iduser);
            return response.data
    },
    //https://grupo5-back-prueba.herokuapp.com/api/getokrbyid/61109c8ea304d0a23abc347e
    loadingOKRid: async (id) =>{
        const response = await axios.get('http://back-spring-grupo-5.herokuapp.com/api/getokrbyid/'+id);
        return response.data
    }

}

export default functions;