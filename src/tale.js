export function kolobok(name) {
  switch (name) {
    case 'дедушка':
      return 'Я от дедушки ушёл'
    case 'лиса':
      return 'Меня съели'
    case 'заяц':
      return 'Я от зайца ушёл'
    case 'неизвестный':
      return 'Я встретил кого-то неизвестного'
  }
}

// console.log(kolobok('дедушка'))

export function newYear(name) {
  switch (name) {
    case 'Дед Мороз':
      return `${name}! ${name}! ${name}!`
    case 'Снегурочка':
      return `${name}! ${name}! ${name}!`
    default:
      return 'Неизвестный персонаж'
  }
}

// console.log(newYear('Дед Мороз'))
