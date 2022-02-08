import { isObject } from './utils/isObject'

export const mergeOptions = opts => {
  let config = {}
  let shortcuts = {}
  let rules = []
  let marks = []
  if (Array.isArray(opts.presets) && opts.presets.length > 0) {
    // 合并预制
    for (const preset of opts.presets) {
      // 合并config
      if (isObject(preset.config)) {
        config = Object.assign(config, preset.config)
      }
      // 合并快捷方式
      if (isObject(preset.shortcuts)) {
        shortcuts = Object.assign(shortcuts, preset.shortcuts)
      }
      // 合并规则
      if (Array.isArray(preset.rules) && preset.rules.length > 0) {
        rules = rules.concat(preset.rules)
      }
      // 合并标记
      if (Array.isArray(preset.marks) && preset.marks.length > 0) {
        marks = marks.concat(preset.marks)
      }
    }
  }

  // 合并config
  if (isObject(opts.config)) {
    config = Object.assign(config, opts.config)
  }
  // 合并快捷方式
  if (isObject(opts.shortcuts)) {
    shortcuts = Object.assign(shortcuts, opts.shortcuts)
  }
  // 合并规则
  if (Array.isArray(opts.rules) && opts.rules.length > 0) {
    rules = rules.concat(opts.rules)
  }
  // 合并标记
  if (Array.isArray(opts.marks) && opts.marks.length > 0) {
    marks = marks.concat(opts.marks)
  }

  return {
    config,
    rules,
    marks,
    shortcuts,
  }
}