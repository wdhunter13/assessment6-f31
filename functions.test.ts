const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE

    test('return array of the same length', () => {
        let arr = [1,2,3,4,5,6,7,8,9,]
        let result = shuffleArray(arr)

        expect(result.length).toEqual(arr.length)
    })


     test('shuffle array', () => {
        let arr = [1,2,3,4,5,6,7,8,9,]
        let result = shuffleArray(arr)

        expect(result.join()).not.toEqual(arr.join())
    })
})