import useEventListener from '../lib/useEventListener'
import { Slide } from '../components/Slide'
import React from 'react'
import { useRouter } from 'next/router'
import { useCurrentSlide } from '../lib/CurrentSlideContext'

export default function SlidePage({ children }) {
  const router = useRouter()
  const { currentSlide, setSlide } = useCurrentSlide()

  const NEXT = [13, 32, 39]
  const PREV = 37
  const PRESENTER = 80
  let slideCount = 0

  const navigate = ({
    keyCode,
    altKey,
  }: {
    keyCode: number
    altKey?: string
  }) => {
    //   if(a)
  }

  useEventListener('keydown', navigate)

  const swipeLeft = () => {
    navigate({ keyCode: NEXT[0] })
  }

  const swipeRight = () => {
    navigate({ keyCode: PREV })
  }

  const renderSlide = () => {
    let generatedSlides = []
    let generatorCount = 0

    // Filter down children by only Slides
    React.Children.map(children, (child) => {
      // Check for <hr> element to separate slides
      const childType = child && child.props && (child.props.mdxType || [])
      if (childType && childType.includes('hr')) {
        generatorCount += 1
        return
      }

      // Check if it's a SpeakerNotes component
      if (childType && !childType.includes('SpeakerNotes')) {
        // Add slide content to current generated slide
        if (!Array.isArray(generatedSlides[generatorCount])) {
          generatedSlides[generatorCount] = []
        }
        generatedSlides[generatorCount].push(child)
      }
    })

    // Get total slide count
    slideCount = generatorCount

    // Return current slide
    if (currentSlide === 999) {
      router.push(
        router.pathname,
        `/slides/${router.query.slide}#${slideCount}`,
        { shallow: true }
      )
      //@ts-ignore
      setSlide(slideCount)
    }
    //@ts-ignore
    return <Slide>{generatedSlides[currentSlide]}</Slide>
  }

  return <div>{renderSlide()}</div>
}
