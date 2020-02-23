function find(array, criteriaFn) {
    let current = array
    let next = []
    while (current || current === 0) {
        
        if (criteriaFn(current)) { 
            
            return current
        }
        
        if (Array.isArray(current)) {  
            for (let i = 0; i < current.length; i++) { 
                debugger
                if (criteriaFn(current[i])){ 
                     return current[i]} 
                else 
                next.push(current[i])
            }
        }
        else if (typeof current === "object") {
            
            for (key in current) {  
                
                if (criteriaFn(current[key])){
                                   
                    return current[key] }

                    if (Array.isArray(current[key])) { 
                        
                        for (let i = 0; i < current[key].length; i++) {  
                            debugger
                            if (criteriaFn(current[key][i]) ){
                                return current[key][i]
                            } else  next.push(current[key][i]) 
                            }
                    }
                    else if (typeof current[key] === "object") {
                        for (keyz in current[key]) 
                            if (criteriaFn(current[key][keyz]) ){ return current[key][keyz] } 
                            else 
                            next.push(current[key][keyz])
                        }  
                    
                    }  
                
                    current = next.shift()
                } 
              current = next.shift()
            }
            return null
               
        }
// tests 
// let arrayText = [23, 46, 2, 3, [2,1] ]  
// let a =  funArrayTest = find(arrayText, num => (num < 2))
// console.log(a) 
// let objTest = { arrayKey: [0,2,3,4], objKey: { imNested: [2,3,4,5]}} 
// let b = find(objTest, num => (num === 5)) 
// console.log(b)
let me = { object: { subObj: 1}, dataStructure: [ { triplearray: [100000000] } ] }
console.log("Hmm")
let xyz = find(me, num => (typeof num === 'number' && num > 4)) 

console.log(xyz)