import {appTheme} from '@/app/theme'

export const withTransitionDelay = (callback: VoidFunction) => {
  setTimeout(callback, appTheme.transitions.duration.standard)
}

export const includesLowercase = (stringA: string, stringB: string): any => {
  return stringA.toLowerCase().includes(stringB.toLowerCase())
}
