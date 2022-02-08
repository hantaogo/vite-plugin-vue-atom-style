import { parse } from '@vue/compiler-dom'
import { mapTree } from './utils/mapTree'
import { matchRules } from './matchRules'

export const parseCode = (code, options) => {

  const matchResults = {}

  const root = parse(code)

  mapTree([root], node => {
    // 遍历有属性的组件，从class属性中搜集类名，type 1 为组件
    const classNames = []
    if (node && node.type === 1 && Array.isArray(node.props)) {
      for (const prop of node.props) {
        if (prop && prop.type === 6) {
          if (prop.name === 'class' && prop.value && prop.value.type === 2 && prop.value.content) {
            // 名为class，值为文本且不为空的属性，type 6 为属性，type 2 为文本
            // <div class="xxx yyy"></div>
            for (const className of prop.value.content.split(/\s+/)) {
              classNames.push(className)
            }
          }
        } else if (prop && prop.type === 7 && prop.name === 'bind' && prop.exp.type === 4) {
          // vue绑定，简单表达式
          // 支持格式：
          // 如果那么，否则 :class="isX ? 'classA classB' : 'classC classD'"
          // 如果那么 :class="isY && 'classA classB' : 'classC classD'"
          // 表达式数组 :class="[isX ? 'classA classB' : 'classC classD', isY && 'classE classF']"
          const regex = /[\"\'](.*?)[\"\']/g
          const strList = prop.exp.content.match(regex)
          if (Array.isArray(strList) && strList.length > 0) {
            for (const str of strList) {
              for (const className of str.replace(/[\"\']/g, '').split(/\s+/).filter(t => t !== '')) {
                classNames.push(className)
              }
            }
          }
        }
      }
    }
    for (const className of classNames) {
      const result = matchRules(className, options)
      if (result) {
        matchResults[className] = result
      }
    }
  })

  return matchResults
}