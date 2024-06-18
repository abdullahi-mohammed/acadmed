export const validation = (email, username, password ) => {

    const errorObj = { email: "", username: "", password: "" };

    if(username.length < 3) {
        errorObj.username = "username is too short";
    }
    if(email === "") {
        errorObj.email = "Email is required";
    }
    if(password.length < 8) {
        errorObj.password = "Password should be more than eight characters";
    }
    if(errorObj.email || errorObj.username || errorObj.password ) {
        return (errorObj)
    }

    return 200;

}