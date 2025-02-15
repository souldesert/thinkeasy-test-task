import dayjs from 'dayjs'

export const formatDateTime = (input: string): string => {
  const dateTime = dayjs(input)

  return dayjs(dateTime).isValid()
    ? dayjs(dateTime).format('DD.MM.YYYY, HH:mm')
    : ''
}
