import axios from "axios";

const functions = {
    loadingOKR: async () => {
        const iduser = "61106133609d16f1740ddf34"
        const response = await axios.get('https://grupo5-back-prueba.herokuapp.com/api/getokrbyuserid/'+iduser);
            return response.data
    },
    //https://grupo5-back-prueba.herokuapp.com/api/getokrbyid/61109c8ea304d0a23abc347e
    loadingOKRid: async (id) =>{
        const response = await axios.get('https://grupo5-back-prueba.herokuapp.com/api/getokrbyid/'+id);
        return response.data
    }

}

export default functions;