'use client'
import { ReactNode, useEffect, useRef, useState } from 'react'

type MarqueeWrapperProps = {
  children: ReactNode
  className?: string
  direction?: 'left' | 'right'
}

type MarqueeAnimationType = (
  element: HTMLElement,
  elementWidth: number,
  windowWidth: number,
  direction: 'left' | 'right'
) => void

const marqueeAnimation: MarqueeAnimationType = (
  element,
  elementWidth,
  windowWidth,
  direction
) => {
  const start = direction === 'left' ? 0 : windowWidth - elementWidth
  const end = direction === 'left' ? windowWidth - elementWidth : 0

  element.animate(
    [
      { transform: `translateX(${start}px)` },
      { transform: `translateX(${end}px)` },
    ],
    {
      duration: 20000,
      easing: 'linear',
      direction: 'alternate',
      iterations: Infinity,
    }
  )
}

const MarqueeWrapper: React.FC<MarqueeWrapperProps> = ({
  children,
  className = '',
  direction = 'left',
}) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    if (elementRef.current) {
      const elementWidth = elementRef.current.getBoundingClientRect().width
      marqueeAnimation(
        elementRef.current as HTMLElement,
        elementWidth,
        windowWidth,
        direction
      )
    }

    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth, direction])

  return (
    <div className={`relative overflow-x-hidden ${className}`}>
      <div
        className="inter w-max p-5 whitespace-nowrap lg:p-7"
        ref={elementRef}
      >
        {children}
      </div>
    </div>
  )
}

export default MarqueeWrapper
