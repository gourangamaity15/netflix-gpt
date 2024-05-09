export const validateData = (email, password) => {

        const isValidmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
        const isValidPassword =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if(!isValidmail) return "Email is not valid";
    if(!isValidPassword) return "Password is not valid";
    return null;


}