import { useRef } from 'react'
import { FlatList } from 'react-native'

import Slide from './Slide'

const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Find your Outfits',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
  },
  {
    title: 'PLayful',
    color: '#BEECC4',
    subtitle: 'Hear it First. Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundres of outfits ideas',
  },
  {
    title: 'Excentric',
    color: '#FFE4D9',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
  },
]

const Onboarding = () => {
  const flatListRef = useRef(null)

  const scrollToNextSlide = (currentIndex) => {
    const nextIndex = currentIndex + 1

    if (flatListRef.current && nextIndex < slides.length) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: nextIndex,
      })
    }
  }

  const renderItem = ({ item, index }) => {
    return (
      <Slide item={item} index={index} scrollToNextSlide={scrollToNextSlide} />
    )
  }

  return (
    <FlatList
      ref={flatListRef}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      data={slides}
      keyExtractor={(item) => item.title}
      renderItem={renderItem}
    />
  )
}

export default Onboarding
