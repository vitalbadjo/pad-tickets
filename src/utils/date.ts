export const getLocalizedDayOfWeekUppercase = (date: string) => {
  let dateObject: Date
  try {
    dateObject = new Date(date)
    return dateObject.toLocaleString(window.navigator.language, { weekday: 'short' })
  } catch (error) {
    return ""
  }
}