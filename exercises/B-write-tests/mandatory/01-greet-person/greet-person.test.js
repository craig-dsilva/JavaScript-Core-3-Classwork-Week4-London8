const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  const result = greetPerson("Etza");

  expect(result).toEqual("Hello Etza");
});
