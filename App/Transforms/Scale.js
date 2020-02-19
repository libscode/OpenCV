import { Dimensions } from 'react-native'

const ScaleWidth = (scaleWidth) => {
  const { width } = Dimensions.get('window')
  const DESIGN_WIDTH = 180
  return (scaleWidth * width) / DESIGN_WIDTH
}

const ScaleHeight = (scaleHeight) => {
  const { height } = Dimensions.get('window')
  const DESIGN_HEIGHT = 180
  return (scaleHeight * height) / DESIGN_HEIGHT
}

export {
  ScaleWidth,
  ScaleHeight
}
