// First thing that we are going to do is that create our custom array in the javascript 'Please Refer to the readme.md' 

// Custom Array ;

class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    // push(element){
    //     this.data = element ;
    // }
    pushByInstructor(element) {
        this.data[this.length] = element;
        this.length++
        return this.length
    }
    get(index) {
        return this.data[index]
    }
    pop() {
        const lastIndex = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--
    }
    shift() {
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1];
        this.length--
    }

    deleteByIndex(index) {
        delete this.data[index];
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i + 1];
        }

        console.log(this.data)
    }


}


const MyArray = new CustomArray()
// MyArray.push('element one')
MyArray.pushByInstructor('Ankit')
MyArray.pushByInstructor('Aman')
MyArray.pushByInstructor('Rahul')
MyArray.pushByInstructor('Keshav')

// MyArray.pop()
// MyArray.shift()
// MyArray.shift()
// console.log() 
// console.log(MyArray)

MyArray.deleteByIndex(0)



// I have done by my self ; No Cheating .
