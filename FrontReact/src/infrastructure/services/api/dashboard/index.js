import axios from "axios";

const functions = {
    loadingOKR: async () => {
        response = await axios.get(' http://localhost:4000/OKRS').then(() => {
            return response.data
        }).catch(error => {
            return error
        })
    }
}

export default functions;