module.exports = function toReadable (number) {
    let result='';
    let stringNum = '' + number;
    let len = stringNum.length;
    let Array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let ArrayTeen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let ArrayTy = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (len == 1) {
        result = Array[number];
    } 
    if ((number%10 == 0)&&(len == 2)) {
        result = ArrayTy[Math.floor(number/10)-1];
    }
    if ((len == 2)&&(Math.floor(number/10) == 1)&&(number%10 != 0)) {
        result = ArrayTeen[number-11];
    }
    if ((len == 2)&&(Math.floor(number/10) != 1)&&(number%10 != 0)) {
        result = ArrayTy[Math.floor(number/10)-1] + ' ' + Array[number%10]; 
    }
    if ((len == 3)&&(number%100 == 0)){
        result = Array[Math.floor(number/100)] + ' ' + 'hundred'
    } 
    if ((len ==3)&&(number%100 != 0)&&(number%10 ==0)){
        result = Array[Math.floor(number/100)] + ' ' + 'hundred' + ' ' + ArrayTy[Math.floor((number%100)/10)-1];
    }
    if ((len == 3)&&(number%100 != 0)&&(Math.floor((number%100)/10) == 1)&&(number%10 !=0)){
        result = Array[Math.floor(number/100)] + ' ' + 'hundred' + ' ' + ArrayTeen[number%100-11]
    }
    if((len==3)&&(number%100 != 0)&&(number%10 != 0)&&(Math.floor((number%100)/10) == 0)){
        result = Array[Math.floor(number/100)] + ' ' + 'hundred' + ' ' + Array[(number%100)%10]
    }

    if ((len == 3)&&(number%100 != 0)&&(number%10 != 0)&&(Math.floor((number%100)/10) != 1)&&(Math.floor((number%100)/10) != 0)) {
        result = Array[Math.floor(number/100)] + ' ' + 'hundred' + ' ' + ArrayTy[Math.floor((number%100)/10)-1] + ' ' + Array[(number%100)%10]
    }

    return result;
}
