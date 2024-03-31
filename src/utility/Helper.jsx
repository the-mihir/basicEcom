class Helper{
    static isLogin(){
        let token = sessionStorage.getItem("token");
        return token !== null;
    }


    static API_URL(){
        return "https://cart-api.teamrabbil.com/api";
    }

    static isEmpty(value){
       return value.length === 0;
    }


    static tokenHeader(){
        return {
            headers: {
                "token": sessionStorage.getItem("token")
            }
        }
    }

    static userUnauthorized(status){
        if(status === 401){
            sessionStorage.removeItem("token");
            window.location.href = "/login";
        }

    }

    static logout(){
        sessionStorage.removeItem("token");
        window.location.href = "/login";
    }




}

export default Helper;