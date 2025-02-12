export function kolobok(name) {
  switch (name) {
    case 'дедушка':
      return 'Я от дедушки ушел'
    case 'лиса':
      return 'Меня съели'
    case 'заяц':
      return 'Я от Зайца ушёл'
    default:
      return 'Покатился Колобок дальше'
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
      return 'Некого звать'
  }
}

// console.log(newYear('Дед Мороз'))
