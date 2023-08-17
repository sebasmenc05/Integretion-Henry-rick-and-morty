export default function validation (inputs){
    const regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    
    let errors = {};
    
    (!inputs.email) ? errors.email = 'Campo Obligatorio': errors.email ='';
    
    (inputs.email.length > 35) ? errors.email = 'No debe ser mayor a 35 caracteres': errors.email ='';
    
    (regexEmail.test(inputs.email)) ? errors.email = 'Debe ser un email valido' : errors.email ='';
    
    (regexPassword.test(inputs.password)) ? errors.password = 'La contraseñadebe tener de 6 a 10 caracteres y al menos 1 numero' : errors.password ='';
    
    return errors
}