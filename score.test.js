import * as score from './score' // this is the line to add

import { test, expect } from 'vitest'

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
    //arrange
    const frame = [0, 0]
    const expected = 0

    //act
    const actual = score.scoreFrame(frame)
  
    //assert
    expect(actual).toBe(expected)
  })

  test('scores a normal frame', () => {
    const frame = [2, 3]
    const expected = 5
    const actual = score.scoreFrame(frame)
    expect(actual).toBe(expected)
  })