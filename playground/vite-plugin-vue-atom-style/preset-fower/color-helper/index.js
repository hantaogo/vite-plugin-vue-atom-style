/**
 * from https://github.com/DataV-Team/Color
 */
 import { ColorKeywords } from './color-keywords'

 /**
  * @description Test if a hex color
  * @param {string} color color string
  * @return {boolean} Test result
  */
 export function isHex(color) {
   if (typeof color !== 'string') return false
   color = color.toLowerCase()
 
   return /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(color)
 }
 
 /**
  * @description Test if a rgb color
  * @param {string} color color string
  * @return {boolean} Test result
  */
 export function isRgb(color) {
   if (typeof color !== 'string') return false
   color = color.toLowerCase()
 
   return /^(rgb\(|RGB\()/.test(color)
 }
 
 /**
  * @description Test if a rgba color
  * @param {string} color color string
  * @return {boolean} Test result
  */
 export function isRgba(color) {
   if (typeof color !== 'string') return false
   color = color.toLowerCase()
 
   return /^(rgba|RGBA)/.test(color)
 }
 
 /**
  * @description Test if a rgb or rgba color
  * @param {string} color color string
  * @return {boolean} Test result
  */
 export function isRgbOrRgba(color) {
   return /^(rgb|rgba|RGB|RGBA)/.test(color)
 }
 
 /**
  * @description Get color by keyword
  * @param {keyof typeof ColorKeywords} keyword Color keyword like red, green and etc.
  * @return {ColorKeywords} Hex or rgba color
  */
 function getColorByKeyword(keyword) {
   return ColorKeywords[keyword]
 }
 
 /**
  * @description Color validator
  * @param {string} color Hex|Rgb|Rgba color or color keywords
  * @return {string} Color (Invalid input will throw an error)
  */
 function validator(color) {
   if (isHex(color) || isRgbOrRgba(color)) return color
 
   const keywordColor = getColorByKeyword(color)
   if (!keywordColor) throw new Error(`Color: Invalid Input of ${color}`)
 
   return keywordColor
 }
 
 /**
  * @description Get the rgb value of the hex color
  * @param {string} color Hex color
  * @return {RgbValue} Rgb value of the color
  */
 function getRgbValueFromHex(color) {
   color = color.replace('#', '')
 
   if (color.length === 3)
     color = Array.from(color)
       .map((hexNum) => hexNum + hexNum)
       .join('')
 
   const colorValues = color.split('')
 
   return new Array(3)
     .fill(0)
     .map((_, i) => parseInt(`0x${colorValues[i * 2]}${colorValues[i * 2 + 1]}`))
 }
 
 /**
  * @description Get the rgb value of the rgb/rgba color
  * @param {string} color Hex color
  * @return {RgbValue} Rgb value of the color
  */
 function getRgbValueFromRgb(color) {
   return color
     .replace(/rgb\(|rgba\(|\)/g, '')
     .split(',')
     .slice(0, 3)
     .map((n) => parseInt(n))
 }
 
 /**
  * @description Get the Rgb value of the color
  * @param {string} color Hex|Rgb|Rgba color or color keyword
  * @return {RgbValue} Rgb value of the color
  */
 export function getRgbValue(color) {
   const validColor = validator(color)
 
   const lowerColor = validColor.toLowerCase()
 
   return isHex(lowerColor) ? getRgbValueFromHex(lowerColor) : getRgbValueFromRgb(lowerColor)
 }
 
 /**
  * @description Get the opacity of color
  * @param {string} color Hex|Rgb|Rgba color or color keyword
  * @return {number} Color opacity
  */
 export function getOpacity(color) {
   const validColor = validator(color)
 
   if (!isRgba(validColor)) return 1
 
   return Number(
     validColor
       .toLowerCase()
       .split(',')
       .slice(-1)[0]
       .replace(/[)|\s]/g, ''),
   )
 }
 
 /**
  * @description Get the Rgba value of the color
  * @param {string} color Hex|Rgb|Rgba color or color keyword
  * @return {RgbaValue} Rgba value of the color
  */
 export function getRgbaValue(color) {
   const rgbValue = getRgbValue(color)
 
   return rgbValue && ([...rgbValue, getOpacity(color)])
 }
 
 /**
  * @description Convert color to Rgb|Rgba color
  * @param {string} color   Hex|Rgb|Rgba color or color keyword
  * @param {number} opacity The opacity of color
  * @return {string} Rgb|Rgba color
  */
 export function toRgb(color, opacity) {
   const rgbValue = getRgbValue(color)
 
   return typeof opacity === 'number'
     ? `rgba(${rgbValue.join(',')},${opacity})`
     : `rgb(${rgbValue.join(',')})`
 }
 
 /**
  * @description Convert color to Hex color
  * @param {string} color Hex|Rgb|Rgba color or color keyword
  * @return {string} Hex color
  */
 export function toHex(color) {
   if (isHex(color)) return color
 
   const colorValue = getRgbValue(color)
 
   const format10To16 = (_) => Number(_).toString(16).padStart(2, '0')
 
   return `#${colorValue.map(format10To16).join('')}`
 }
 
 /**
  * @description Get Color from Rgb|Rgba value
  * @param {RgbValue|RgbaValue} value Rgb|Rgba color value
  * @return {string} Rgb|Rgba color
  */
 export function getColorFromRgbValue(value) {
   if (!Array.isArray(value)) throw new Error(`getColorFromRgbValue: ${value} is not an array`)
 
   const { length } = value
   if (length !== 3 && length !== 4)
     throw new Error(`getColorFromRgbValue: value length should be 3 or 4`)
 
   return (length === 3 ? 'rgb(' : 'rgba(') + value.join(',') + ')'
 }
 
 /**
  * Deepen color
  * @param color Hex|Rgb|Rgba color or color keyword
  * @param percent percent of Deepen (1-100)
  * @returns Rgba color
  */
 export function darken(color, percent = 0) {
   let rgbaValue = getRgbaValue(color)
 
   rgbaValue = rgbaValue
     .map((v, i) => (i === 3 ? v : v - Math.ceil(2.55 * percent)))
     .map((v) => (v < 0 ? 0 : v))
 
   return getColorFromRgbValue(rgbaValue)
 }
 
 /**
  *  Brighten color
  * @param color Hex|Rgb|Rgba color or color keyword
  * @param percent  of brighten (1-100)
  * @returns Rgba color
  */
 export function lighten(color, percent = 0) {
   let rgbaValue = getRgbaValue(color)
 
   rgbaValue = rgbaValue
     .map((v, i) => (i === 3 ? v : v + Math.ceil(2.55 * percent)))
     .map((v) => (v > 255 ? 255 : v))
 
   return getColorFromRgbValue(rgbaValue)
 }
 
 /**
  *
  * description Adjust color opacity
  * @param color Hex|Rgb|Rgba color or color keyword
  * @param percent  percent of opacity
  * @returns  Rgba color
  */
 export function fade(color, percent = 100) {
   const rgbValue = getRgbValue(color)
 
   return getColorFromRgbValue([...rgbValue, percent / 100])
 }
