import { useState, useEffect } from 'react'

import Lottie from 'react-lottie'
import animationData from './animation.json'

import styles from '../../styles/Home.module.css'

export const LottieAnimation = () => {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false
  })

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <section className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => {
          setAnimationState({
            ...animationState,
            isStopped: !animationState.isStopped
          })
        }}
      >
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          speed={1}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </button>
    </section>
  )
}

export default LottieAnimation
