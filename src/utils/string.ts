/**
 * works only for numbers between 0 and 109
 * @param num number
 * @returns declined word "Пересадка"
 */
export const stopsDeclension = (num: number) => {
  const lastChar = num.toString().slice(-1)
  if (!num) {
    return "Без пересадок"
  } else if (lastChar === "1" && num !== 11) {
    return `${num} Пересадка`
  } else if (+lastChar >= 2 && +lastChar <= 4) {
    return `${num} Пересадки`
  } else {
    return `${num} Пересадок`
  }
}