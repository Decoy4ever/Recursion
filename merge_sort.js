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
        let firstArrLen = firstArr.length
        let secondArrLen = secondArr.length

        while(i < firstArrLen && j < secondArrLen){
            // console.log(firstArr[i], secondArr[i])
            if(firstArr[i] < secondArr[j]){
                result.push(firstArr[i])
                i++
                console.log(`Sorted: ${result}`)
                console.log(`Current firstArr: ${firstArr}`)
            }else{
                result.push(secondArr[j])
                j++
                console.log(`Current secondArr: ${secondArr}`)
                console.log(`Sorted: ${result}`)
            }
        }


        console.log(`Remaining elements in firstArr: \n ${firstArr}`)
        console.log(`Remaining elements in secondArr: \n ${secondArr}`)

        // return result.concat(firstArr.slice().concat(secondArr.slice()));

        // add remaining elements in firstArr or secondArr
       while(i < firstArrLen){
            result.push(firstArr[i])
            i++
        }

        while(j < secondArrLen){
            result.push(secondArr[j])
            j++
        }

        console.log(result)
        return result
    }

    // mergeSort(unsortedArr){
        
    //     // base case
    //     // length of the array is 1 return the array
    //     if(unsortedArr.length === 1) return unsortedArr 
    //     console.log(unsortedArr)

    //     // split the unsorted arr into two halves
    //     let midpoint = Math.floor(unsortedArr.length / 2)
    //     let leftArr = unsortedArr.slice(0,midpoint)
    //     let rightArr = unsortedArr.slice(midpoint)

    //     let mergedArr = this.merge(leftArr,rightArr)
    //     console.log(`The final sorted Array is ${mergedArr}`)
    // }
}

const mergeAlgo = new SortingAlgo()
mergeAlgo.merge([1,37,9,2],[4,4,41,8])

// console.log(mergeAlgo.mergeSort([100]))
// console.log(mergeAlgo.mergeSort([1,7,4,9]))

