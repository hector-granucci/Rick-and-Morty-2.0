const validation = (input) =>{
    const errors = {};

    if(!input.email.includes("@")){errors.email= "deberia contener @"}
    if(!input.email.includes(".")){errors.email= "no es un email valido"}
    if(input.password.length < 8){errors.password= "la contraseña es muy corta"}
    if(input.password.length > 10){errors.password= "la contraseña es muy larga"}
    if(input.password.includes("@")){errors.password= "caracter no valido"}
    
    return errors;

}


export default validation