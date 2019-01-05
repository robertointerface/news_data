

export const onlyLettersNumbers = (value='') => {

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
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
       return true;
    }
    throw 'this is not a valid email format';
}

export const validate = (value='', validators=[]) => {
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

}