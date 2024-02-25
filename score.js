export {scoreFrame}


let frameScore
let newArray = [ ]
function scoreFrame(array) {
    if (array.length === 2) {
        return array[0] + array[1]
    } else {
        array.forEach((frame, idx) => {
             frameScore = frame[0] + frame[1]
             const nextFrame = array[idx + 1]
            let spare = frame[0] < 10 && frameScore === 10
             if (spare) {
            frameScore += nextFrame[0]
            } 
            newArray.push(frameScore)
         })
    }
    console.log(newArray)
    return newArray[0]
}
  
 