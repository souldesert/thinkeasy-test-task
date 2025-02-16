import {appTheme} from '@/app/theme'

export const withTransitionDelay = (callback: VoidFunction) => {
  setTimeout(callback, appTheme.transitions.duration.standard)
}
