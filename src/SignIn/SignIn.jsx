
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider";

const SignIn = () => {
    const{googleSignIn}=useContext(AuthContext)
const handleLogIn=()=>{
googleSignIn()
.then(result=>console.log(result))
.catch(error=>console.log(error.message))

}
    return (
        <div>
            <div className="my-20 py-20 flex justify-center">
                <button onClick={handleLogIn} className="btn text-xl text-yellow-600 ">LOG IN WITH GOOGLE <FaGoogle /></button>
            </div>
        </div>
    );
};

export default SignIn;