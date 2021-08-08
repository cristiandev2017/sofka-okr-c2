import axios from "axios";

const functions = {
    loadingOKR: async () => {
        let response = await axios.get('http://localhost:4000/OKRS');
            return response.data
    }
}

export default functions;