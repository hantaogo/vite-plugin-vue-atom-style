import Base from '@/views/Base.vue'
import Flex from '@/views/Flex.vue'
import FontStyle from '@/views/FontStyle.vue'
import Color from '@/views/Color.vue'
import LineHeight from '@/views/LineHeight.vue'
import ListType from '@/views/ListType.vue'
import BackgroundColor from '@/views/BackgroundColor.vue'
import PlaceholderColor from '@/views/PlaceholderColor.vue'
import TextAlignment from '@/views/TextAlignment.vue'
import TextDecoration from '@/views/TextDecoration.vue'
import TextTransform from '@/views/TextTransform.vue'

export const routes = [
  {
    path: '/',
    component: Base,
  },
  {
    path: '/Flex',
    component: Flex,
  },
  {
    path: '/FontStyle',
    component: FontStyle,
  },
  {
    path: '/Color',
    component: Color,
  },
  {
    path: '/LineHeight',
    component: LineHeight,
  },
  {
    path: '/ListType',
    component: ListType,
  },
  {
    path: '/BackgroundColor',
    component: BackgroundColor,
  },
  {
    path: '/PlaceholderColor',
    component: PlaceholderColor,
  },
  {
    path: '/TextAlignment',
    component: TextAlignment,
  },
  {
    path: '/TextDecoration',
    component: TextDecoration,
  },
  {
    path: '/TextTransform',
    component: TextTransform,
  },
]
