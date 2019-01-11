

export const onlyLettersNumbers = (value='') => {
    /*
        @Func: Validate if string is only formed by letters and numbers.
        @Input:
            value ('string').
        @Return: true if string composed of only letters and number, throw error otherwise.
     */
    if (/^[A-Za-z0-9]+$/.test(value)){
        return true;
    }
    throw 'only letter and numbers allowed';
}

export const maxLenght = (value = '', maxLenght) => {
    if(value.length > maxLenght){

    }
}

export const isEmail = (email) => {
    /*
        @Func: validate if string is email by regex.
        @input:
            email (string).
        @Return: true if email is error, throw error if not email.
     */
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
       return true;
    }
    throw 'this is not a valid email format';
}

export const passwordSame = (password='', passwordRepeat= '') => {

    if(password.length > 0){
        if(password === passwordRepeat){
            return true
        }
    }
    throw 'passwords do not match, please check'
}

export const validate = (value='', validators=[]) => {
    /*
        @Func: validate a string by providing the validators.
        @Input:
            Value (string): Value to validate.
            validators (array): Array of validate functions.
        @return: True if successfull comepletion, throw error if problem
     */
    try {
        if (value.length == 0) {
            throw 'field is required';
        }
        else {
            for (var validator of validators) {
                validator(value);
            }
        }
    }
    catch(error){
        console.log('found return ' + error);
        throw error;
    }
    return true;
}