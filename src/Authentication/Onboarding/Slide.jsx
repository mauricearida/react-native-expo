import { Dimensions, StyleSheet, Text, View } from 'react-native'

import Button from '../components/Button'

const BORDER_RADIUS = 75
const { width, height } = Dimensions.get('window')
const SLIDE_HEIGHT = 0.61 * height

const Slide = ({ item, index, scrollToNextSlide }) => {
  const right = !!(index % 2)

  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ]

  return (
    <View style={{ backgroundColor: 'white', width }}>
      <View style={[styles.container, { backgroundColor: item.color }]}>
        <View style={[styles.titlecontainer, { transform }]}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: item.color,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: BORDER_RADIUS,
          }}
        >
          <View style={styles.bottomContainer}>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Button
              onPress={() => scrollToNextSlide(index)}
              variant={index == 3 ? 'primary' : 'default'}
              label={index == 3 ? "Let's get started" : 'Next'}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Slide

const styles = StyleSheet.create({
  container: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  titlecontainer: {
    fontFamily: 'SFSemibold',
    height: 100,
    justifyContent: 'center',
    transform: [{ translateY: (SLIDE_HEIGHT - 100) / 2 }],
  },
  title: {
    lineHeight: 80,
    fontSize: 80,
    fontFamily: 'SFSemibold',
    color: 'white',
    textAlign: 'center',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 44,
  },
  subtitle: {
    fontFamily: 'SFSemibold',
    fontSize: 24,
    color: '#0C0D34',
    lineHeight: 30,
    marginBottom: 12,
  },
  description: {
    fontFamily: 'SFRegular',
    fontSize: 16,
    lineHeight: 25,
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 40,
  },
})
