import test from 'node:test'
import assert from 'node:assert/strict'
import {stationHeading, displayAlert} from '../src/index.mjs'

test('station heading includes the platform when supplied', () => {
  assert.equal(stationHeading('Bell Street', '2'), 'Bell Street · Platform 2')
})

test('inactive alerts are not displayed', () => {
  assert.equal(displayAlert({status: 'cleared'}), null)
})

test('active alerts retain station and severity information', () => {
  assert.deepEqual(displayAlert({
    status: 'active',
    title: 'Lift unavailable ',
    body: 'Use the west entrance. ',
    severity: 'accessibility',
    stations: ['Bell Street']
  }), {
    title: 'Lift unavailable',
    body: 'Use the west entrance.',
    severity: 'accessibility',
    stations: ['Bell Street']
  })
})

test('a compact alert title is available to narrow station displays', () => {
  assert.deepEqual(displayAlert({
    status: 'active',
    title: 'Lift unavailable',
    compactTitle: 'Lift out',
    body: 'Use the west entrance.',
    severity: 'accessibility',
    stations: ['Bell Street']
  }), {
    title: 'Lift unavailable',
    compactTitle: 'Lift out',
    body: 'Use the west entrance.',
    severity: 'accessibility',
    stations: ['Bell Street']
  })
})
