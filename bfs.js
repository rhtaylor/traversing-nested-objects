function find(array, criteriaFn) {
    let current = array
    let next = []
    while (current || current === 0) {
        
        if (criteriaFn(current)) { 
            
            return current
        }
        
        if (Array.isArray(current)) {  
            for (let i = 0; i < current.length; i++) {
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
                            if (criteriaFn(current[key][i]) ){
                                return current[key][i]
                            } else  next.push(current[key][i]) 
                            }
                    }
                    else if (typeof current[key] === "object") {
                        for (keyz in current[key]) 
                            if (criteriaFn(current[key][keyz])){ return current[key][keyz] } 
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
        
       
    

let me = { object: { subObj: 1}, dataStructure: [ {triplearray: [100000000]} ] }
    

console.log("Hmm")
let xyz = find(me, num => (num > 4)) 

console.log(xyz)