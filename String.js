// Withouth inbuilt fucntion

const reverseString = (str) => {

    let STRING = '';
    let lastIndex = str.length
    for (let i = str.length - 1; i >= 0; i--) {
        STRING += str[i]
        lastIndex--
    }

    // return STRING
    console.log(STRING)
}

const reslut = reverseString('BCA')
// console.log(reslut)



// With in built Function  in the easy way .

const Reverse = (str) => {
    return str.split("").reverse().join("")
}


// console.log(Reverse('BCA'))



const IsPalyndrom = (str) => {
    let STRING = '';
    let lastIndex = str.length
    for (let i = str.length - 1; i >= 0; i--) {
        STRING += str[i]
        lastIndex--
    }

    console.log(STRING == str)

}


IsPalyndrom('abba')



// Int Reverse 


const IntReverse = (int) => {

    let ReverseInStr = int.toString().split("").reverse().join("")
    let FinalOutPut = parseInt(ReverseInStr)

    console.log(FinalOutPut)


}


IntReverse(10987654321)



const FizzBuzz = (n) => {
    console.log("-------------------------------------------------------------------")
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        } else if (i % 5 == 0) {

            console.log("Buzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else {
            console.log(i)
        }
    }
}


// FizzBuzz(10010)



// Make the first Alphabate Uppercase . 

const ConvertToCapitalization = (string) => {
    const convertedString = string
        .toLowerCase()
        .split(' ') 
        .map(word => word[0].toUpperCase() + word.slice(1)) 
        .join(' '); 

    console.log(convertedString);
};


ConvertToCapitalization("this will definately be the cammel case sentence .");
