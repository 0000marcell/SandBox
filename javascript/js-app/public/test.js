(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let $list = $('#guestlist-view'), 
    checkedinClass = 'icon-check', 
    guestSelector = '.guest';

const test = QUnit.test;

test('Guestlist', function (assert) { 
  assert.ok($list.length,
    'List element should have guests.');
});

test('Guests', function (assert) {
  // Grab the first guest from the list
  let $guest = $($list.find(guestSelector)[0]), 
      guestExists = !!$guest[0];
  // Simulate click
  $guest.click();
  assert.ok($guest.hasClass(checkedinClass),
      'Should be checked on click');
  $guest.click();
  // To avoid a false positive, make sure
  // you have a guest element to test against. 
  assert.ok(guestExists && !$guest.hasClass(checkedinClass),
      'Should toggle off when clicked again');
});

},{}]},{},[1]);
