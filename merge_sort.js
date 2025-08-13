class SortingAlgo{

    mergeSort(firstArr, secondArr, firstArrLen, secondArrLen){
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




    }

    mergeSort(left,right){

    }
}

const mergeAlgo = new SortingAlgo()
mergeAlgo.mergeSort([3, 2, 1, 13, 8, 5, 0, 1])