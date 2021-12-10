import * as utils from 'src/util'

jest.mock('src/util', () => ({
  testFn: jest.fn(() => 0)
}))

it('should run the mocked fn', () => {
  // this should log 'Mocked fn' but does not
  expect(utils.testFn()).toEqual(0)
})

it('runs a spied function', () => {
  const spy = jest.spyOn(utils, 'testFn')
  spy.mockImplementation(() => 1)
  expect(utils.testFn()).toEqual(1)
  spy.mockClear()
})