const styleName = 'cursor'

const data = {
  cursoralias: 'alias',
  cursorallscroll: 'all-scroll',
  cursorauto: 'auto',
  cursorcell: 'cell',
  cursorcolresize: 'col-resize',
  cursorcontextmenu: 'context-menu',
  cursorcopy: 'copy',
  cursorcrosshair: 'crosshair',
  cursordefault: 'default',
  cursoreresize: 'e-resize',
  cursorewresize: 'ew-resize',
  cursorgrab: 'grab',
  cursorgrabbing: 'grabbing',
  cursorhelp: 'help',
  cursormove: 'move',
  cursornresize: 'n-resize',
  cursorneresize: 'ne-resize',
  cursorneswresize: 'nesw-resize',
  cursornodrop: 'no-drop',
  cursornone: 'none',
  cursornotallowed: 'not-allowed',
  cursornsresize: 'ns-resize',
  cursornwresize: 'nw-resize',
  cursornwseresize: 'nwse-resize',
  cursorpointer: 'pointer',
  cursorprogress: 'progress',
  cursorrowresize: 'row-resize',
  cursorsresize: 's-resize',
  cursorseresize: 'se-resize',
  cursorswresize: 'sw-resize',
  cursortext: 'text',
  cursorverticaltext: 'vertical-text',
  cursorwresize: 'w-resize',
  cursorwait: 'wait',
  cursorzoomin: 'zoom-in',
  cursorzoomout: 'zoom-out',
}

const getStyle = (k, config) => {
  if (data[k]) {
    return {
      [styleName]: data[k]
    }
  } else if (k.startsWith('cursor-')) {
    return {
      [styleName]: k.replace('cursor-', '')
    }
  }
}

/**
 * cursor
 */
export default {
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}