import { parseClassName } from './parseClassName'

export const matchRules = (className, options) => {
  // 快捷方式
  const classNames = []
  const shortcutKey = className.toLowerCase()
  if (options.shortcuts[shortcutKey]) {
    const shortcuts = options.shortcuts[shortcutKey].split(' ')
    const arr = Array.isArray(shortcuts) ? shortcuts : []
    for (const t of arr) {
      classNames.push(t)
    }
  }
  // 规则
  if (classNames.length <= 0) {
    classNames.push(className)
  }
  return classNames.map(t => matchClassName(t, options)).filter(t => t)
}

const matchClassName = (className, options) => {
  const result = parseClassName(className, options)
  if (!result) {
    return
  }
  const rule = options.rules.find(rule => rule.match(result.name, options.config))
  // 方便调试
  if (options.debug.className && className.toLowerCase().startsWith(options.debug.className.toLowerCase())) {
    console.log(`${className} match ${rule.name}`)
    console.log('match result: ', rule.match(result.name, options.config))
    console.log('translate result: ', rule.translate(result.name, options.config))
  }
  const marks = result.markNames.map(markName => {
    const mark = options.marks.find(t => t.match(markName, options.config))
    if (mark) {
      return {
        markName,
        mark,
      }
    }
  }).filter(t => !!t)
  if (rule) {
    return {
      ...result,
      rule,
      marks,
    }
  }
}