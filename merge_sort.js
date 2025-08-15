class SortingAlgo{

    merge(firstArr, secondArr){
        let i = 0
        let j = 0

        let result = []
        let firstArrLen = firstArr.length
        let secondArrLen = secondArr.length

        while(i < firstArrLen && j < secondArrLen){
            if(firstArr[i] < secondArr[j]){
                result.push(firstArr[i])
                i++
            }else{
                result.push(secondArr[j])
                j++
            }
        }

        // add remaining elements in firstArr or secondArr
       while(i < firstArrLen){
            result.push(firstArr[i])
            i++
        }

        while(j < secondArrLen){
            result.push(secondArr[j])
            j++
        }

        // console.log(result)
        return result
    }

    mergeSort(unsortedArr){
        
        // base case
        // length of the array is 1 return the array
        if(unsortedArr.length === 1) return unsortedArr 

        // split the unsorted arr into two halves for calculation of merging
        let midpoint = Math.floor(unsortedArr.length / 2)
        let leftArr = unsortedArr.slice(0,midpoint)
        let rightArr = unsortedArr.slice(midpoint)

        // recursively sort the left side or arr and right side of the array
        let leftSort = this.mergeSort(leftArr)
        let rightSort = this.mergeSort(rightArr)

        // merge the arrays
        return this.merge(leftSort,rightSort)
    
    }
}

const mergeAlgo = new SortingAlgo()
// mergeAlgo.merge([1,37,9,2],[4,4,41,8])

// console.log(mergeAlgo.mergeSort([100]))
console.log(mergeAlgo.mergeSort([100,3,1,5]))
console.log(mergeAlgo.mergeSort([100,3,1,5,93,189,-4]))
console.log(mergeAlgo.mergeSort([100,3,1,5,-93.56,100,-4]))





