
const timeIterator = {
    [Symbol.iterator](start, end){
        var year = start;
        return {
            [Symbol.iterator](){return this;},
            next() {
                if(year <= end){
                    var CurrentValue = {
                        name: year.toString(),
                        id: year,
                        checked: false
                    }
                    year++;
                    return {value: CurrentValue, done: false}
                }
                else{
                    return { done: true }
                }
            },
            return(v){
                 return{value: v, done: true};
            }
        }
    }
}


