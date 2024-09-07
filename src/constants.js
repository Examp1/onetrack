import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import { generatePeriodSelectOptions } from './functions'
export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'
export const HOURS_IN_DAY = 24
export const MIDNIGHT_HOUR = 0
export const MILISECONDS_IN_SECONDS = 1000
export const SECONDS_IN_MINUTE = 60
export const MINUTE_IN_HOUR = 60
export const SECONDS_IN_HOUR = MINUTE_IN_HOUR * SECONDS_IN_MINUTE
export const NULLABLE_ACTIVITY = { id: null }
export const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}
export const BUTTON_TYPE = {
  neutral: 'bg-gray-100 enabled:hover:bg-gray-200',
  danger: 'bg-red-500 enabled:hover:bg-red-600 text-white',
  primary: 'bg-purple-500 enabled:hover:bg-purple-600 text-white',
  success: 'bg-green-500 enabled:hover:bg-green-600 text-white',
  warning: 'bg-yellow-500 enabled:hover:bg-yellow-600 text-white'
}
const PERIODS_IN_MINUTES = [
  15, 30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 480
]

export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions(PERIODS_IN_MINUTES)
