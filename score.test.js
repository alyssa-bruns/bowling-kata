import * as score from './score' // this is the line to add

import { test, expect } from 'vitest'

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
    //arrange
    const frames = [0, 0]
    const expected = 0

    //act
    const actual = score.scoreFrame(frames)
  
    //assert
    expect(actual).toBe(expected)
  })

  test('scores a normal frame', () => {
    //arrange
    const frames = [2, 3]
    const expected = 5
    //act
    const actual = score.scoreFrame(frames)
    //assert
    expect(actual).toBe(expected)
  })

  test('scores a spare frame', () => {
    //arange
    const frames = [[2, 8],[3, 6],[2, 3]]
    const expected = [13, 9, 5]
    //act
    const actual = score.scoreFrame(frames)
    //assert
    expect(actual).toBe(expected)
})

    test('scores a strike frame', () => {
    //arange
    const frames = [[10, 0],[3, 6],[2, 3]]
    const expected = [19, 9, 5]
    //act
    const actual = score.scoreFrame(frames)
    //assert
    expect(actual).toBe(expected)
})

test('scores a double strike frame', () => {
    //arange
    const frames = [[10, 0],[10, 0],[2, 3]]
    const expected = [22, 15, 5]
    //act
    const actual = score.scoreFrame(frames)
    //assert
    expect(actual).toBe(expected)
})


