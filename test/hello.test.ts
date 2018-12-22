import { hello, _error } from "../lib/hello"

describe("function hello()", () => {
  test("hello()", () => {
    const consoleLog = jest.spyOn(console, "log")
    hello()
    expect(console.log).toBeCalled()
    expect(consoleLog.mock.calls[0][0]).toBe("Hello!")
    consoleLog.mockReset()
    consoleLog.mockRestore()
  })

  test("hello(name)", () => {
    const consoleLog = jest.spyOn(console, "log")
    hello("Bob")
    expect(console.log).toBeCalled()
    expect(consoleLog.mock.calls[0][0]).toBe("Hello Bob!")
    consoleLog.mockReset()
    consoleLog.mockRestore()
  })
})

describe("function _error()", () => {
  test("_error()", () => {
    expect(() => _error()).toThrow("error")
  })
})
