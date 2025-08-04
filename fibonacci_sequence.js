class Fib{

    iteration(n){
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

        // push the varibale fib_zero and fib_one to the array
        arrayFib.push(fib_zero,fib_one)

        for(let i = 2; i < n; i++){
            let productFib = fib_zero + fib_one 
            arrayFib.push(productFib)
            // console.log(productFib)
            
            // swap the variables
            fib_zero = fib_one
            fib_one = productFib
        }

        console.log(arrayFib)
        return arrayFib
    }

    recursive(){

    }
}

const calculateFib = new Fib()
calculateFib.iteration(1000)