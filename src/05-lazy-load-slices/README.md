# Challenge 05 - lazy load slices

## Run the app

`npm run dev ./src/05-lazy-load-slices`

## Description

We have two slices, `userSlice` and `postSlice`. With `combineSlices` we can combine those slices into a single reducer. However, how about making only `userSlice` available at first and injecting `postSlice` later? There is a button on the screen that, when clicked, will lazy load the `postSlice` to the previously initialized `rootReducer`.

## Run the test

`npm run test ./src/05-lazy-load-slices`

## Reference

Redux [combineSlices](https://redux-toolkit.js.org/api/combineSlices) documentation
