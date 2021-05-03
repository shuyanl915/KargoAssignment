function convertString(){
    let input = process.argv;
    //create a dictionary to map digits to strings
    let dict = {
        0:'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5:'Five',
        6:'Six',
        7:'Seven',
        8:'Eight',
        9:'Nine'
    };
    //iterate through arrays and for each numbers converts to string to iterate its digits.
    let strComb = '';
    for(let i =2; i < input.length;i++) {    
        let numToStr = input[i].toString();
        for(let j =0; j < numToStr.length; j++){
            strComb += dict[numToStr[j]];
        }
        if(i != input.length-1){
            strComb += ',';
        }
    }
    console.log(strComb);
}
convertString()


