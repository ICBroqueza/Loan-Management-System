'use strict'

var test = require('tape')
var nearest = require('./')

test('no array', function (t) {
  t.throws(function () {
    nearest()
  })
  t.end()
})

test('empty array', function (t) {
  t.equal(nearest([]), -1)
  t.end()
})

test('numbers - round up', function (t) {
  t.equal(nearest([10, 1, 0.5, 5], 0.3), 2)
  t.end()
})

test('numbers - round down', function (t) {
  t.equal(nearest([10, 1, 0.5, 5], 0.6), 2)
  t.end()
})

test('dates - with target', function (t) {
  var dates = [
    new Date('2012-12-12'),
    new Date('2024-12-12'),
    new Date('2022-12-12'),
    new Date('2016-12-12'),
    new Date('1980-12-12')
  ]
  var target = new Date('2016-12-27T12:00:00Z')
  t.equal(nearest(dates, target), 3)
  t.end()
})

test('dates - with default target', function (t) {
  var dates = [
    new Date('2012-12-12'),
    new Date('2024-12-12'),
    new Date('2022-12-12'),
    new Date('2016-12-12'),
    new Date(),
    new Date('1980-12-12')
  ]
  t.equal(nearest(dates), 4)
  t.end()
})
