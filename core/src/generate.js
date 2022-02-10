import { parseCode } from './parseCode'

export const generate = (code, options) => {
  const matchResults = parseCode(code, options)
  let css = ''

  for (const className in matchResults) {

    // 快捷方式时，可能包含多个原子
    const results = matchResults[className]
    
    for (const result of results) {

      const { name, rule, marks } = result

      // 翻译规则
      let obj = rule.translate(name, options.config)
      if (!obj) {
        continue
      }

      // 翻译标记
      for (const { markName, mark } of marks) {
        obj = Object.assign(obj, mark.translate(markName, options.config, obj))
      }

      // 生成css
      const { prefix, selector, pseudo, ...style } = obj

      let styleString = ''
      for (const k in style) {
        const v = style[k]
        styleString += `${k}: ${v}; `
      }

      // 支持多个伪类
      const pseudos = Array.isArray(pseudo) ? pseudo : [pseudo || '']
      for (const p of pseudos) {
        css += (prefix || '') + `.${className}` + (p || '') + (selector ? ` ${selector}` : '') + ` { ${styleString}}\n`
      }
    }
  }
  return css
}