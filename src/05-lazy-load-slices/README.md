# Challenge 06 - combineSlices

## Run the app

`npm run dev ./src/05-lazy-load-slices`

## Description

We have two slices, `userSlice` and `postSlice`. With `combineSlices` we can combine those slices into a single reducer. However, how about making only `userSlice` available at first and injecting `postSlice` later?

When the "Load Data" button is clicked, two "post" data should be added, the first called "post 1" and the second called "post 2." And display them on the screen.

## Run the test

`npm run test ./src/05-lazy-load-slices`

## Reference

Redux documentation for [combineSlices](https://redux-toolkit.js.org/api/combineSlices)
