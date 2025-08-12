class Fib{

    iterationFib(n){

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

        let arrayFib = [0,1]
        if(n <= 0) return [0]
        if(n === 1) return arrayFib
        if(n >= 2){

            // get previous iteration of fib seq array
            let previousFib = this.recursiveFib(n - 1)

            // pattern the product of the last two index create the next fib seq num for the array
            let fib_one = previousFib[previousFib.length - 2]
            let fib_zero = previousFib[previousFib.length - 1]
            previousFib.push(fib_one + fib_zero)

            return previousFib

        }

    }

}


const calculateFib = new Fib()
console.log(calculateFib.recursiveFib(0))
console.log(calculateFib.recursiveFib(1))
console.log(calculateFib.recursiveFib(2))
console.log(calculateFib.recursiveFib(3))
console.log(calculateFib.iterationFib(4))
console.log(calculateFib.recursiveFib(8))

















