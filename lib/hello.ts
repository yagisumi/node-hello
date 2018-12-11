export function hello(name?: string) {
  if (name) {
    console.log(`Hello ${name}!`)
  } else {
    console.log("Hello!")
  }
}
