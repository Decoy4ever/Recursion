class SortingAlgo{

    merge(firstArr, secondArr){
        // create varibales i,j,k
        //  -> i point to the index of firstArr
        //  -> j point to the index of secondArr
        //  -> k point to the index of the resultant array
        // outer while loop check the condition i less than firstArrlen and j less than secondArrlen
        //  if the element of the firstArr is less than element of the secondArr
        //      set the element from the firstArr to be the first element of the resultant arr
        //.     increment i and k
        //  else
        //      set the element from the secondArr to be the first element of the resultant arr
        //      increment i and k
        // If that have not been copied onto the resultant array
        // 1. use for loop starting at any condition, i less than firstArrlen, i+1
        //      set the resultArr[k++] = firstArr[i]
        // 2. repeat 1 for secondArr
        // exit out while loop
        // return resultArr

        let i = 0
        let j = 0

        let result = []
        const firstArrLen = firstArr.length
        const secondArrLen = secondArr.length

        while(i < firstArrLen && j < secondArrLen){
            // console.log(firstArr[i], secondArr[i])
            if(firstArr[i] < secondArr[j]){
                result.push(firstArr.shift())
                console.log(`Current firstArr: ${firstArr}`)
                console.log(result)
                i++
            }
            else{
                result.push(secondArr.shift())
                console.log(`Current secondArr: ${secondArr}`)
                console.log(result)
                j++
            }
        }

        console.log(`Remaining elements in firstArr: \n ${firstArr}`)
        console.log(`Remaining elements in secondArr: \n ${secondArr}`)


        // add remaining elements in firstArr or secondArr
        for(; i < firstArrLen; i++){
            result.push(firstArr.shift())
        }

        for(; j < secondArrLen; j++){
            result.push(secondArr.shift())
        }
        
        // return result
        console.log("Final Array joined")
        console.log(result)

    }

    mergeSort(array){
        


  
    }
}

const mergeAlgo = new SortingAlgo()
mergeAlgo.merge([1,5,7,9,10],[4,5,6,8])

// console.log(mergeAlgo.mergeSort([1],[]))
// console.log(mergeAlgo.mergeSort([],[3]))

