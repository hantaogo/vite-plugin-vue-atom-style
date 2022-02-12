import { parseCode } from './parseCode'
import { objectToKeyframesCss } from './utils/animate'

export const generate = (code, options) => {
  const matchResults = parseCode(code, options)
  let css = ''

  const classNames = Object.keys(matchResults)

  for (const className in matchResults) {

    // 快捷方式时，可能包含多个原子
    const results = matchResults[className]
    
    for (const result of results) {

      const { name, rule, marks } = result

      // 翻译规则
      let obj = rule.translate(name, options.config, classNames)
      if (!obj) {
        continue
      }

      // 翻译标记
      for (const { markName, mark } of marks) {
        obj = Object.assign(obj, mark.translate(markName, options.config, obj, classNames))
      }

      // 生成css
      const { prefix, selector, pseudo, animate, breakpoints, orientation, theme, ...style } = obj

      // 样式代码
      let styleString = ''
      for (const k in style) {
        const v = style[k]
        styleString += `${k}: ${v}; `
      }

      // 样式文本
      let text = ''

      // 支持主题和多个伪类
      const pseudos = Array.isArray(pseudo) ? pseudo : [pseudo || '']
      for (const p of pseudos) {
        text += (prefix || '') + (theme ? `.${theme} ` : '') + `.${className}` + (p || '') + (selector ? ` ${selector} ` : '') + `{ ${styleString}}\n`
      }

      // 动画
      if (animate) {
        const keyframes = objectToKeyframesCss(animate.keyframes, animate.name)
        text += `${keyframes}\n`
      }

      // 媒体查询
      const mediaList = []

      // 最小宽度
      if (breakpoints) {
        mediaList.push(`(min-width: ${breakpoints})`)
      }
      // 方向
      if (orientation) {
        mediaList.push(`(orientation: ${orientation})`)
      }

      if (mediaList.length > 0) {
        css += `@media ${mediaList.join(' and ')} {\n${text}}\n`
      } else {
        css += text
      }
    }
  }

  return css
}