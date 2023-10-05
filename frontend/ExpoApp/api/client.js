import axios from 'axios'

const serverIPAddress = '10.125.2.215'; // the IPv4 address showing on the backend terminal !
export default axios.create({
    baseURL: `http://${serverIPAddress}:8000/v1`
});
