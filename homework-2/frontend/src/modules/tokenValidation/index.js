function isTokenAvailable() {
    const token = localStorage.getItem("token");
    return token ? true : false;
}

function isTokenValid() {
    //later may need to change with the proper method by validate it to back end. now only check if the token is available or no
    return isTokenAvailable();
}

export{
    isTokenAvailable,
    isTokenValid
}