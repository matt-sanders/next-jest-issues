This project demonstrates an issue with next/jest not mocking files correctly.

To try it out run `yarn` to install and then `yarn test`. You'll see the failing tests.

Interestingly this works when you use `jest.spyOn` but not when you call `jest.mock` initially.