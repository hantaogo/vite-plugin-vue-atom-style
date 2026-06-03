
/**
 * 将关键帧转换为css文本
 * 
 * input
 * 
 * {
 *   from: { transform: 'rotate(0deg)' },
 *   to: { transform: 'rotate(360deg)' },
 * },
 */
 export function objectToKeyframesCss(obj, name) {
  const content = Object.entries(obj).reduce((result, [key, value]) => {
    const str = Object.entries(value).reduce((r, [k, v]) => {
      return r + `${k}: ${v};`
    }, '')
    return result + `${jsKeyToCssKey(key)} {${str}}`
  }, '')
  
  const text = `
    @keyframes ${name} {
      ${content}
    }
  `

  return text
}

export function jsKeyToCssKey(key) {
  return /^[A-Z].+$/.test(key) ? '-' + kebab(key) : kebab(key)
}

export function upFirst(s = '') {
  return s.replace(/^[a-z]/, (g) => g.toUpperCase())
}

export function downFirst(s = '') {
  return s.replace(/^[A-Z]/, (g) => g.toLowerCase())
}

export function kebab(str) {
  return downFirst(str)
    .replace(/[A-Z]/g, (capital) => {
      return '-' + capital.toLowerCase()
    })
    .replace(/-+/g, '-')
}

export function camel(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/(\s+|-|_)/g, '')
}
