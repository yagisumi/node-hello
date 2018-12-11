import { hello } from "../lib/hello"

describe("function hello()", () => {
  const consoleLog = jest.spyOn(console, "log")

  test("hello()", () => {
    hello()
    expect(console.log).toBeCalled()
    expect(consoleLog.mock.calls[0][0]).toBe("Hello!")
  })
  test("hello(name)", () => {
    hello("Bob")
    expect(console.log).toBeCalled()
    expect(consoleLog.mock.calls[1][0]).toBe("Hello Bob!")
  })
})
