'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right'

interface AnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  fullWidth?: boolean
}

interface SlideInProps extends AnimationProps {
  direction?: Direction
  offset?: number
}

// FadeIn Component
export const FadeIn = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  fullWidth = false,
}: AnimationProps) => {
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: { opacity: 0, y: 20 }, // Added small Y movement to FadeIn too
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      variants={variants}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
      style={shouldReduceMotion ? { opacity: 1, transform: 'none' } : undefined}
    >
      {children}
    </motion.div>
  )
}

// SlideIn Component
export const SlideIn = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  offset = 80,
  fullWidth = false,
}: SlideInProps) => {
  const shouldReduceMotion = useReducedMotion()

  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: offset }
      case 'down':
        return { y: -offset }
      case 'left':
        return { x: offset }
      case 'right':
        return { x: -offset }
      default:
        return { y: offset }
    }
  }

  const variants = {
    hidden: { opacity: 0, ...getDirectionOffset() },
    visible: { opacity: 1, x: 0, y: 0 },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 100,
        delay,
        duration,
      }}
      variants={variants}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
      style={shouldReduceMotion ? { opacity: 1, transform: 'none' } : undefined}
    >
      {children}
    </motion.div>
  )
}

// Stagger Container
export const StaggerContainer = ({
  children,
  className = '',
  delay = 0,
  staggerChildren = 0.1,
}: {
  children: ReactNode
  className?: string
  delay?: number
  staggerChildren?: number
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delayChildren: delay, staggerChildren }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ScaleUp Component (for buttons/cards)
export const ScaleUp = ({
  children,
  className = '',
  delay = 0,
  duration = 0.4,
}: AnimationProps) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration, delay }}
      variants={variants}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )
}
