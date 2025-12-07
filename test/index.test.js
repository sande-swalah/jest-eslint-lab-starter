const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe('capitalizeWords', () => {
  test('capitalizes the first letter of each word in a string', () => {
    const input = 'hello world from jest'
    const expectedOutput = 'Hello World From Jest'
    expect(capitalizeWords(input)).toBe(expectedOutput)
  })

  test('returns an empty string when given an empty string', () => {
    expect(capitalizeWords('')).toBe('')
  })
})

describe('filterActiveUsers', () => {
  test('filters out inactive users from the array', () => {
    const users = [ "Alice", "Bob", "Charlie" ]
    const isActive = (user) => user !== 'Bob'
    const expectedOutput = [ "Alice", "Charlie" ]
    expect(filterActiveUsers(users, isActive)).toEqual(expectedOutput)
  })
  
  test('returns an empty array when no users are active', () => {
    const users = [ "Alice", "Bob" ]
    const isActive = () => false
    expect(filterActiveUsers(users, isActive)).toEqual([])
  })
})

describe('logAction', () => {
  test('logs the correct action message to the console', () => {
    console.log = jest.fn()
    const action = 'User logged in'
    logAction(action)
    expect(console.log).toHaveBeenCalledWith(`Action: ${action}`)
  })
})  
 