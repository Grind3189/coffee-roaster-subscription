
const checkTruthyData = (data) => {
    for (const key in data) {
     if (!data[key]) {
         return false
     }
    }
    return true
 }

 export {checkTruthyData}