import { isPageValid } from './validators'
import { PAGE_TIMELINE, HOURS_IN_DAY, MIDNIGHT_HOUR } from './constants'
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
    timelineItems.push({ hour })
  }
  return timelineItems
}
