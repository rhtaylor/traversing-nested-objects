function find(array, criteriaFn) {
    let current = array
    let next = []
    while (current || current === 0) {

        if (criteriaFn(current)) {
            return current
        }

        if (Array.isArray(current)) {
            for (let i = 0; i < current.length; i++) {
                next.push(current[i])
            }
        }
        else if (typeof current === "object") {
            for (key in current) {
                if (criteriaFn(current[key])) {
                    return current[key]

                    if (Array.isArray(current[key])) {
                        for (let i = 0; i < current[key]; i++) {
                            next.push(current[i])
                        }
                    }
                    else if (typeof current[key] === "object") {
                        for (keyz in current[key]) {
                            next.push(current[keyz])
                        }
                    }
                }
            }

        }

        current = next.shift()
    }


    return null

}

const numberCollections = [1, [2, { noPass: 4, pass: 12 }]]

let x = find(numberCollections, number => (typeof number === 'number' && number > 5))
console.log(x)