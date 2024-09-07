import { isNull, isPageValid } from './validators'
import {
  PAGE_TIMELINE,
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE,
  MINUTE_IN_HOUR,
  MILISECONDS_IN_SECONDS
} from './constants'
export const normalizedPAgeHash = () => {
  const hash = window.location.hash.slice(1)
  if (isPageValid(hash)) {
    return hash
  }
  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}

export const generateTimelimeItems = () => {
  const timelineItems = []
  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour, activityID: null, activitySeconds: 0 })
  }
  return timelineItems
}

export function generateActivities() {
  return ['Coding', 'Training', 'Reading'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOUR
  }))
}
export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ value: activity.id, label: activity.name }))
}
export function generatePeriodSelectOptions(perdiodsInMinutes) {
  return perdiodsInMinutes.map((perdiodInMinutes) => ({
    value: perdiodInMinutes * SECONDS_IN_MINUTE,
    label: generatePeriodSelectOptionsLabel(perdiodInMinutes)
  }))
}

function generatePeriodSelectOptionsLabel(perdiodInMinutes) {
  const hour = Math.floor(perdiodInMinutes / MINUTE_IN_HOUR)
    .toString()
    .padStart(2, 0)
  const minutes = Math.floor(perdiodInMinutes % MINUTE_IN_HOUR)
    .toString()
    .padStart(2, 0)
  return `${hour}:${minutes}`
}

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}
export function formatSeconds(seconds) {
  const date = new Date()
  date.setTime(Math.abs(seconds) * MILISECONDS_IN_SECONDS)
  const utc = date.toUTCString()
  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}
