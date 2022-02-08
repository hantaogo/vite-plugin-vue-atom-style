import { parseClassName } from './parseClassName'

export const matchRules = (className, options) => {
  // 快捷方式
  const classNames = []
  if (options.shortcuts[className]) {
    const v = options.shortcuts[k]
    const arr = Array.isArray(v) ? v : []
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
  const rule = options.rules.find(rule => rule.match(result.name, options.config))
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