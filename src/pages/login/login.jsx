import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { FaEnvelope, FaSpinner, FaTimes } from "react-icons/fa";

import { AuthContext } from "../../customHooks/useAuth";
import { validation } from "../../utils/helpers/formValidation";
import Popup from "../../components/popup/popup";



export default function Login() {
    const { signIn, signUp, socialSignIn, popup, setPopup, loading } = useContext(AuthContext)
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState("password");
    const [active, setActive] = useState("login")
    const [error, setError] = useState([])

    const handleSubmit = (action) => {
        if(action === "login") {
            signIn(email, password)
        }
        else {
            const result = validation(email, username, password)
            
            if(result === 200) {
                console.log(username)
                signUp(email, password, username)
                setError({})
            }
            else {
                console.log(result)
                setError(result)
            }
        }
    }
  
    return (
        <div className="flex flex-col py-[3%] min-h-[90vh] items-center">
            
           
            <FaEnvelope className="text-[44px] p-3 mb-4 bg-black text-white rounded-[10px]" />
            <h2 className="font-semibold text-[16px] text-center">{active === "login" ? "Welcome back to Acadmed" : "Create your account"}</h2>
            
            
            <div className="max-w-[350px] h-fit p-4 rounded">

                {
                    popup?.msg ?
                    <Popup type={popup?.type} msg={popup?.msg} setError={setPopup} redirectUrl={popup?.type === "error" ? "#" : "/dashboard"} />
                    :
                    ""
                }
            
                <div className="py-4 text-[12px] w-full">
                    { // Show username field when register is selected
                        active === "register" ?
                        <>
                        <label htmlFor="username">Full name:</label>
                        <input name="username" id="username" onChange={(e) => setusername(e.target.value)} className={`p-[10px] mt-2 mb-1 rounded w-full bg-transparent bg-gray-200/[0.5] border focus:outline focus:outline-purple/[0.6] outline-offset-1 ${error.firstname ? "border-red-400" : " border-gray-500/[0.3]"}`} placeholder="e.g john" />    
                        <p className="text-red-600 text-[9px] mb-6">{error.username}</p>
                        </>
                        : 
                        <button onClick={() => socialSignIn("Google")} className="flex items-center justify-center gap-2 p-[8px] mb-6 w-full rounded shadow-sm border border-gray-500/[0.3] hover:border-purple hover:text-purple">
                            <FcGoogle className="text-xl"/>
                            Login with {"Google"}
                        </button>
                    }
                    
                    <label htmlFor="email">Email Address:</label>
                    <input name="email" id="email" type="email" onChange={(e) => setEmail(e.target.value)} className={`p-[10px] mt-2 mb-1 rounded w-full bg-transparent bg-gray-200/[0.5] border focus:outline focus:outline-purple/[0.6] outline-offset-1 ${error.email ? "border-red-400" : "border-gray-500/[0.3]"}`} required placeholder="e.g john@mail.com" />
                    <p className="text-red-600 text-[9px] mb-6">{error.email}</p>

                    <label htmlFor="password">Password:</label>
                    <div className="flex items-center mb-1 mt-2">
                        <input name="password" id="password" type={showPassword} onChange={(e) => setPassword(e.target.value)} className={`p-[10px] rounded-l-md w-full bg-transparent bg-gray-200/[0.5] border focus:outline focus:outline-purple/[0.6] outline-offset-1 ${error.password ? "border-red-400" : "border-gray-500/[0.3]"}`} placeholder="" />
                        <button className="p-[12px] text-[14px] border border-gray-500/[0.3] rounded-r-md" onClick={() => setShowPassword(showPassword === "text" ? "password" : "text")}>{showPassword === "text" ? <PiEye/> : <PiEyeSlash />}</button>
                    </div>
                    <p className="text-red-600 text-[9px] mb-6">{error.password}</p>

                    <button className="bg-black dark:bg-[#000]/[0.5] text-center text-white p-3 w-full disabled:bg-black/[0.8] disabled:dark:bg-[#000]/[0.09] rounded mt-4" onClick={() => handleSubmit(active ==="login" ? "login" : "register")}>{loading ? <FaSpinner className="animate-spin" /> : active === "login" ? "Login" : "Register"}</button>
                    
                    <button 
                        className="text-purple p-3 w-full rounded mt-4" 
                        onClick={() => setActive(active === "login" ? "register" : "login")}
                    > 
                        {active === "login" ? "Don't have an account? Create Account" : "Already registered? Login"}
                    </button>
                    

                    <p className="text-center mt-8">
                        By Registering above, you acknowledge that you have read and agreed to our 
                        <a href="/terms" className="text-purple">Terms & Privacy Policy</a>
                    </p>

                </div>
            </div>
        </div>
    )
}