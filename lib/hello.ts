/**
 * say hello
 * @param name name
 * @since 0.1.0
 */
export function hello(name?: string) {
  if (name) {
    console.log(`Hello ${name}!`)
  } else {
    console.log("Hello!")
  }
}

export function _error() {
  throw new Error("error")
}
