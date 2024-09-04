import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHT_HOUR, BUTTON_TYPE } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}
export function isSelectValueValid(value) {
  return isNumberOrNull(value) || isNoEmptyString(value)
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}
export function isActivityValid({ id, name, secondsToComplete }) {
  console.log(id, name, secondsToComplete)
  return [isNoEmptyString(id), isNoEmptyString(name), isNumber(secondsToComplete)].every(Boolean)
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}
export function isButtonTypeValid(btn) {
  return Object.keys(BUTTON_TYPE).includes(btn)
}
export function isUndefined(value) {
  return value === undefined
}
export function isNull(value) {
  return value === null
}

// utility functions

function isSelectOptionValid({ value, label }) {
  return isNumber(value) || (isNoEmptyString(value) && isNoEmptyString(label))
}
function isNoEmptyString(value) {
  return isString(value) && value.length > 0
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

function isNumber(value) {
  return typeof value === 'number'
}

function isString(value) {
  return typeof value === 'string'
}
