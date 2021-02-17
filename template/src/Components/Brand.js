import React from 'react'
import { View, Image } from 'react-native'
import { useTheme } from '@/Theme'

const Brand = ({ height = 200, width = 200, mode = 'contain' }) => {
  const { Layout, Images } = useTheme()

  return (
    <View style={{ height, width }}>

    </View>
  )
}

export default Brand
