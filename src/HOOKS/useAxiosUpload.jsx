import axios from "axios";

const axiosUpload = axios.create({
    baseURL: 'https://clothing-store-server-kohl.vercel.app',
})

const useAxiosUpload = () => {
    return axiosUpload;
};

export default useAxiosUpload;