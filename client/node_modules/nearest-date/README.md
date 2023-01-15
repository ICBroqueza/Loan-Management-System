# nearest-date

Given an array of dates, this module will find the date nearest to a given target date. Can be used to find the nearest number as well.

[![Build status](https://travis-ci.org/watson/nearest-date.svg?branch=master)](https://travis-ci.org/watson/nearest-date)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install nearest-date
```

## Usage

```js
var nearest = require('nearest-date')

var dates = [
  new Date('2012-12-12'),
  new Date('2024-12-12'),
  new Date('2022-12-12'),
  new Date('2016-12-12'),
  new Date('1980-12-12'),
]
var target = new Date('2016-12-27')

var index = nearest(dates, target)

console.log('Winner:', dates[index])
```

## API

### `index = nearest(array[, target])`

Finds the value in the `array` nearest to the `target` and returns the
`index` of that value in the `array`.

The `target` defaults to `Date.now()`.

Both the `array` and the `target` can be either `Date` objects or
numbers.

## License

MIT
