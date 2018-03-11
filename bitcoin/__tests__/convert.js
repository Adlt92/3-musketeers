'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning a Number', () => {
  expect(convert(2, 'BTC', 'BTC')).tobe(2);
  throw new Error('test not yet defined... write your test here');
});

test('should return a Number', () => {
  expect(typeof convert(2, 'BTC', 'BTC', 'Number')).tobe('Number');
  throw new Error('test not yet defined... write your test here');
});

test('should return a Big number', () => {
  expect(typeof convert(2, 'BTC', 'BTC', 'Big')).toBeInstanceOf(Big);
  throw new Error('test not yet defined... write your test here');
});

test('should return a String', () => {
  expect(typeof convert(2100, 'mBTC', 'BTC', 'String')).tobe('String');
  throw new Error('test not yet defined... write your test here');
});

test('should convert an integer', () => {
  expect(typeof convert(123456789012345, 'Satoshi', 'BTC', 'Number')).tobe('Number');
  throw new Error('test not yet defined... write your test here');
});

test('should convert a number', () => {
  expect(typeof convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')).tobe('Number');
  throw new Error('test not yet defined... write your test here');
});

test('should convert a string', () => {
  expect(typeof convert('2', 'BTC', 'BTC', 'Number')).tobe('String');
  throw new Error('test not yet defined... write your test here');
});

test('should convert a Big number', () => {
  expect(convert(new Big(2), 'BTC', 'BTC', 'Number')).toBe('Number');
  throw new Error('test not yet defined... write your test here');
});

test('should convert a NaN to a Number', () => {
  expect(typeof convert(NaN, 'BTC', 'BTC', 'Number')).tobe('Number');
  expect(typeof convert(NaN, 'BTC', 'mBTC', 'Number')).tobe('Number');
  throw new Error('test not yet defined... write your test here');
});

test('should convert a NaN to a String', () => {
  expect(convert(NaN, 'BTC', 'BTC', 'String')).tobe('String');
  expect(convert(NaN, 'BTC', 'mBTC', 'String')).tobe('String');
  throw new Error('test not yet defined... write your test here');
});

test('should not convert a NaN to a Big', () => {
  expect( () => {convert(NaN, 'BTC', 'BTC', 'Big')}).toThrow();
  throw new Error('test not yet defined... write your test here');
});

test('should handle rounding errors', () => {
  expect(convert(4.6, 'Satoshi', 'BTC', 'Number')).tobe(0.000000046);
  expect(convert(0.000000046, 'BTC', 'Satoshi', 'Number')).toBe(4.6);
  throw new Error('test not yet defined... write your test here');
});

test('should throw when untest is undefined', () => {
  expect( () => {convert(new Big(2), 'x', 'BTC', 'Number')}).toThrow();
  expect( () => {convert(new Big(2), 'BTC', 'x', 'Number')}).toThrow();
  expect( () => {convert(NaN, 'x', 'BTC', 'Number')}).toThrow();
  expect( () => {convert(NaN, 'BTC', 'x', 'Number')}).toThrow();
  throw new Error('test not yet defined... write your test here');
});

test('should throw when representaion is undefined', () => {
  expect( () => {convert(2, 'BTC', 'mBTC', 'x')}).toThrow();
  expect( () => {convert(NaN, 'BTC', 'mBTC', 'x')}).toThrow();
  throw new Error('test not yet defined... write your test here');
});

test('should allow untest aliases', () => {
  expect( () => {convert(4.6, 'Satoshi', 'sat')}).toThrow();
  expect( () => {convert(4.6, 'μBTC', 'btest')}).toThrow();
  throw new Error('test not yet defined... write your test here');
});
