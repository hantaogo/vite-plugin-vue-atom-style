import Base from '@/views/Base.vue'
import Size from '@/views/Size.vue'
import Margin from '@/views/Margin.vue'
import Padding from '@/views/Padding.vue'
import Space from '@/views/Space.vue'
import Breakpoints from '@/views/Breakpoints.vue'
import Orientation from '@/views/Orientation.vue'
import Theme from '@/views/Theme.vue'
import ToCenter from '@/views/ToCenter.vue'
import ToCenterX from '@/views/ToCenterX.vue'
import ToCenterY from '@/views/ToCenterY.vue'
import ToLeft from '@/views/ToLeft.vue'
import ToRight from '@/views/ToRight.vue'
import ToTop from '@/views/ToTop.vue'
import ToBottom from '@/views/ToBottom.vue'
import ToBetween from '@/views/ToBetween.vue'
import ToAround from '@/views/ToAround.vue'
import ToEvenly from '@/views/ToEvenly.vue'
import Flex from '@/views/Flex.vue'
import FlexDirection from '@/views/FlexDirection.vue'
import FontStyle from '@/views/FontStyle.vue'
import FontWeight from '@/views/FontWeight.vue'
import Color from '@/views/Color.vue'
import Colors from '@/views/Colors.vue'
import LineHeight from '@/views/LineHeight.vue'
import LetterSpacing from '@/views/LetterSpacing.vue'
import ListType from '@/views/ListType.vue'
import BackgroundColor from '@/views/BackgroundColor.vue'
import PlaceholderColor from '@/views/PlaceholderColor.vue'
import TextAlignment from '@/views/TextAlignment.vue'
import VerticalAlign from '@/views/VerticalAlign.vue'
import TextDecoration from '@/views/TextDecoration.vue'
import TextTransform from '@/views/TextTransform.vue'
import FontFamily from '@/views/FontFamily.vue'
import FontSize from '@/views/FontSize.vue'
import BackgroundClip from '@/views/BackgroundClip.vue'
import Gradient from '@/views/Gradient.vue'
import BorderRadius from '@/views/BorderRadius.vue'
import BorderWidth from '@/views/BorderWidth.vue'
import BorderColor from '@/views/BorderColor.vue'
import BorderStyle from '@/views/BorderStyle.vue'
import BoxAlignment from '@/views/BoxAlignment.vue'
import Ring from '@/views/Ring.vue'
import GridTemplateColumns from '@/views/GridTemplateColumns.vue'
import Gap from '@/views/Gap.vue'
import JustifyContent from '@/views/JustifyContent.vue'
import AlignItems from '@/views/AlignItems.vue'
import AlignContent from '@/views/AlignContent.vue'
import AlignSelf from '@/views/AlignSelf.vue'
import BoxSizing from '@/views/BoxSizing.vue'
import Display from '@/views/Display.vue'
import Position from '@/views/Position.vue'
import TopRightBottomLeft from '@/views/TopRightBottomLeft.vue'
import ZIndex from '@/views/ZIndex.vue'
import Visibility from '@/views/Visibility.vue'
import Overflow from '@/views/Overflow.vue'
import Shadow from '@/views/Shadow.vue'
import Opacity from '@/views/Opacity.vue'
import Outline from '@/views/Outline.vue'
import Cursor from '@/views/Cursor.vue'
import Appearance from '@/views/Appearance.vue'
import UserSelect from '@/views/UserSelect.vue'
import Transition from '@/views/Transition.vue'
import Duration from '@/views/Duration.vue'
import Delay from '@/views/Delay.vue'
import Ease from '@/views/Ease.vue'
import Animate from '@/views/Animate.vue'
import Transform from '@/views/Transform.vue'

export const routes = [
  {
    path: '/',
    component: Base,
  },
  {
    path: '/Size',
    component: Size,
  },
  {
    path: '/Margin',
    component: Margin,
  },
  {
    path: '/Padding',
    component: Padding,
  },
  {
    path: '/Space',
    component: Space,
  },
  {
    path: '/Breakpoints',
    component: Breakpoints,
  },
  {
    path: '/Orientation',
    component: Orientation,
  },
  {
    path: '/Theme',
    component: Theme,
  },
  {
    path: '/ToCenter',
    component: ToCenter,
  },
  {
    path: '/ToCenterX',
    component: ToCenterX,
  },
  {
    path: '/ToCenterY',
    component: ToCenterY,
  },
  {
    path: '/ToLeft',
    component: ToLeft,
  },
  {
    path: '/ToRight',
    component: ToRight,
  },
  {
    path: '/ToTop',
    component: ToTop,
  },
  {
    path: '/ToBottom',
    component: ToBottom,
  },
  {
    path: '/ToBetween',
    component: ToBetween,
  },
  {
    path: '/ToAround',
    component: ToAround,
  },
  {
    path: '/ToEvenly',
    component: ToEvenly,
  },
  {
    path: '/Flex',
    component: Flex,
  },
  {
    path: '/FlexDirection',
    component: FlexDirection,
  },
  {
    path: '/FontStyle',
    component: FontStyle,
  },
  {
    path: '/FontWeight',
    component: FontWeight,
  },
  {
    path: '/Color',
    component: Color,
  },
  {
    path: '/Colors',
    component: Colors,
  },
  {
    path: '/LineHeight',
    component: LineHeight,
  },
  {
    path: '/LetterSpacing',
    component: LetterSpacing,
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
    path: '/VerticalAlign',
    component: VerticalAlign,
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
  {
    path: '/FontFamily',
    component: FontFamily,
  },
  {
    path: '/FontSize',
    component: FontSize,
  },
  {
    path: '/BackgroundClip',
    component: BackgroundClip,
  },
  {
    path: '/Gradient',
    component: Gradient,
  },
  {
    path: '/BorderRadius',
    component: BorderRadius,
  },
  {
    path: '/BorderWidth',
    component: BorderWidth,
  },
  {
    path: '/BorderColor',
    component: BorderColor,
  },
  {
    path: '/BorderStyle',
    component: BorderStyle,
  },
  {
    path: '/BoxAlignment',
    component: BoxAlignment,
  },
  {
    path: '/Ring',
    component: Ring,
  },
  {
    path: '/GridTemplateColumns',
    component: GridTemplateColumns,
  },
  {
    path: '/Gap',
    component: Gap,
  },
  {
    path: '/JustifyContent',
    component: JustifyContent,
  },
  {
    path: '/AlignItems',
    component: AlignItems,
  },
  {
    path: '/AlignContent',
    component: AlignContent,
  },
  {
    path: '/AlignSelf',
    component: AlignSelf,
  },
  {
    path: '/BoxSizing',
    component: BoxSizing,
  },
  {
    path: '/Display',
    component: Display,
  },
  {
    path: '/Position',
    component: Position,
  },
  {
    path: '/TopRightBottomLeft',
    component: TopRightBottomLeft,
  },
  {
    path: '/ZIndex',
    component: ZIndex,
  },
  {
    path: '/Visibility',
    component: Visibility,
  },
  {
    path: '/Overflow',
    component: Overflow,
  },
  {
    path: '/Shadow',
    component: Shadow,
  },
  {
    path: '/Opacity',
    component: Opacity,
  },
  {
    path: '/Outline',
    component: Outline,
  },
  {
    path: '/Cursor',
    component: Cursor,
  },
  {
    path: '/Appearance',
    component: Appearance,
  },
  {
    path: '/UserSelect',
    component: UserSelect,
  },
  {
    path: '/Transition',
    component: Transition,
  },
  {
    path: '/Duration',
    component: Duration,
  },
  {
    path: '/Delay',
    component: Delay,
  },
  {
    path: '/Ease',
    component: Ease,
  },
  {
    path: '/Animate',
    component: Animate,
  },
  {
    path: '/Transform',
    component: Transform,
  },
]
