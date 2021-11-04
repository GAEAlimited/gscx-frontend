export function currencyFormat(num: number, symbol: string = "$", decimals: number = 2): string {
  if(num === undefined) return ''
  if(symbol === '₿') {
    return symbol + num.toFixed(8)
  }
  if(num < 0.5) {
    return symbol + num.toFixed(5)
  }
  return symbol + num.toFixed(decimals).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function numberFormat(num: number, decimals: number = 2): string {
  if(num < 0.1) {
    return num.toFixed(decimals)
  }
  return num.toFixed(decimals).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function cryptoFormat(num: number, decimals: number = 2): string {
  if(num % 1 === 0) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  } else if(num < 0.1) {
    return num.toFixed(5)
  }
  return num.toFixed(decimals).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function compactFormat(num: number, symbol: string = "$"): string {
  let formatter = Intl.NumberFormat('en', { notation: 'compact' })
  return symbol + formatter.format(num)
}