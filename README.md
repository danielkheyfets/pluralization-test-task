# Pluralization helper

Pluralizes template based on count value

## The Task

Your task is to build a package that constructs a sentence with the proper pluralization. The pluralization is based on a given number, represented by {{count}} or {{n}}. You will have a string with 3 variations separated by | such as: **string = 'Zero | One | Many'** and based on a given number such as 0, 1, count, the logic should return the correct variation. 

## You will have to simply write the logic (in Typescript) that provides the desired functionality.

Example: Accessing the number via the pre-defined argument

You don't need to explicitly give the number for pluralization. The number can be accessed within local messages via pre-defined named arguments {{count}} and/or {{n}}. You can overwrite those pre-defined named arguments if necessary.

### In the following code examples "input" is a string with different pluralization values of "car" or "point". You will find the result of the Pluralize function, which is the proper pluralized value  of the "input", choseen by the second numeric parameter(count)


**Basic Example:** 

```typescript
const input: string = 'no cars|one car|many cars'

const zero: string = pluralize(input, 0/*count*/)
// output: no cars
const one: string = pluralize(input, 1/*count*/)
// output: one car
const many: string = pluralize(input, 20/*count*/)
// output: many cars
```

**Example with count:**

```typescript
const input: string = 'no points|one point|{{count}} points'

const zero: string = pluralize(input, 0/*count*/)
// output: no points
const one: string = pluralize(input, 1/*count*/)
// output: one point
const many: string = pluralize(input, 10/*count*/)
// output: 10 points
```

**Example with count alias "n":**

```typescript
const input: string = 'no points|one point|{{n}} points'

const zero: string = pluralize(input, 0/*count*/)
// output: no points
const one: string = pluralize(input, 1/*count*/)
// output: one point
const many: string = pluralize(input, 10/*count*/)
// output: 10 points
```

## In addition, you should include logic that passes the payload into the sentence output. The payload might be any object with any number of nested levels.

```typescript
// payload
const payload = {
  equivalentDollarsAmount: 123,
  param: {
    nested: 'food',
  },
}

const input: string = 'no money|$1|${{equivalentDollarsAmount}} of {{param.nested}}'

const many: string = pluralize(input, 30/*count*/, payload)
// output: $123 of food
```

## Bonus: Support mathematical operations like in the following example:

```typescript
const input: string = 'today|one day left|{{minus 365 count}} days left'

const many: string = pluralize(input, 100/*count*/)
// output: 265 days left  
```

## Requirements:
- The logic must be written in Typescript and compiled to the javascript

- You must implement unit tests. Check the tests folder. 

- Prepare a README.md file based on markdown syntax. 

- The implementation must be located on your private GitHub account. Invite anton@soloyal.co to review it.

- We have provided the base repository with the logic that compiles your Typescript to Javascript. You can fork it. 

## Expectations:

- Familiarity with Git, Typescript, Markdown, npm

- Once you complete the test, you will be interviewed. You will be asked to explain the structure and configuration of the base repository we have provided to you. For example you will see .editorconfig and your explanation might be: *This file is for unifying the coding style for different editors and IDEs. The tab has 2 spaces because of indent_size = 2.*

## Important Note:
This task contains the intellectual property of SoLoyal Ltd. Do not publish or otherwise share it with anyone. By accepting this assignment, you agree that at the conclusion of the test (regardless of the result) you will completely remove and clean the source code from GitHub.

## Build
```sh
yarn build
```

## Development
```sh
yarn build -w
```

## Test
```sh
yarn test
```

## Helpers
```sh
yarn format && yarn lint:fix
```


### License

This code and all of its associated software is the
property of SoLoyal Ltd. You may not reproduce or use any part of this code without the express written consent of SoLoyal Ltd.
