export {scoreFrame}


function scoreFrame(array) {
    let frameScore
    let newArray = [ ]
    if (array.length === 2) {
        return array[0] + array[1]
    } else {
        array.forEach((frame, idx) => {
            
             frameScore = frame[0] + frame[1]
             const nextFrame = array[idx + 1]
             const spare = frame[0] < 10 && frameScore === 10
             const strike = frame[0] === 10
             const doubleStrike = strike && nextFrame[0] === 10
             const nextTwoFrames = array[idx + 2]
             if (spare) {
             frameScore += nextFrame[0]
             } 
             if (strike) {
             frameScore += nextFrame[0] + nextFrame[1]
             }
             if (doubleStrike) {
            frameScore += nextTwoFrames[0]
             }
         newArray.push(frameScore)
         console.log(frameScore)
         })
    }
    return newArray 
}
  
 