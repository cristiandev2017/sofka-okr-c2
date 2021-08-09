import axios from "axios";

const functions = {
    loadingOKR: async () => {
        const response = await axios.get('http://localhost:4000/OKRS');
            return response.data
    },
    loadingOKRid: async (id) =>{
        const response = await axios.get('http://localhost:4000/OKRS?id='+id);
        return response.data
    }

}

export default functions;