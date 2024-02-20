import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://clothing-store-server-kohl.vercel.app',
    withCredentials:true
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;