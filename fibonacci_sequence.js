class Fib{

    iterationFib(n){
        // Pseudocode
        // create a variable called arrayFib that will store the fibannoci sequences. The array set as empty array
        // create two varibles called fib_zero = fib(0) and fib_one = fib(1) => fib_zero = 0 and fib_one = 1
        // Use a for..loop. start i = 2, condition : i < n, increment : i+1 
        //  create a varibale called productFib. productFib = fib_zero + fib_one 
        //  push the productFib onto the arrayFib
        //  now set the variable fib_zero = fib_one
        //  now set the variable fib_one = productFib
        //  continue to calulcate productFib and push onto arrayFib until it fails condition
        // exit loop
        // return the array

        const arrayFib = []
        let fib_zero = 0
        let fib_one = 1

        arrayFib.push(fib_zero,fib_one)

        for(let i = 2; i <= n; i++){

            let productFib = fib_zero + fib_one 
            arrayFib.push(productFib)

            // swap the variables
            fib_zero = fib_one
            fib_one = productFib
        }

        if(n === 0) return [fib_zero]
        if(n === 1) return [fib_zero,fib_one]
        if(n >= 2) return arrayFib

    }

    recursiveFib(n){

        if(n <= 0) return 0
        if(n === 1) return 1
        return this.recursiveFib(n - 1) + this.recursiveFib(n - 2)
     
    }

    createArr(n){
        let arrayFib = [0,1]

        if(n <= 0) return [0]
        if(n === 1) return arrayFib

        for(let i = 2; i <= n; i++){
            let value = this.recursiveFib(i)
            arrayFib.push(value)
        }

        return arrayFib
    }

}


const calculateFib = new Fib()
// console.log(calculateFib.iterationFib(4))
console.log(calculateFib.createArr(0))
console.log(calculateFib.createArr(1))
console.log(calculateFib.createArr(3))
console.log(calculateFib.createArr(5))
console.log(calculateFib.createArr(8))

















