import axios from 'axios'

axios.interceptors.response.use((res) =>{
    return res.axios
})