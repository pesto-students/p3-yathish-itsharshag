// Question: https://www.interviewbit.com/problems/pair-with-given-difference/
// Time complexity: O(n)
// Space complexity: O(n)

{ 
 //param A : array of integers
 //param B : integer
 //return an integer
	solve : function(A, B){
        const arr = A
        const diff = B

        let map = new Map()
        
        for(const num of arr){
            if(map.get(num)){
                map.set(num, map.get(num)+1)
            } else{
                map.set(num, 1)
            }
        }
        for(const num of arr){
            const otherNum = diff + num
            const otherNumExists = map.get(otherNum)
            if(otherNumExists && otherNum != num){
                return 1
            }
            if(otherNumExists && otherNum == num && otherNumExists > 1){
                return 1
            }
        }
        return 0
	}
};
