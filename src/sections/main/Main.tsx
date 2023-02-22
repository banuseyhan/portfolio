import React, { useContext, useEffect } from "react";
import s from './Main.module.css'
import { ThemeContext } from '../../utilities/Context'
import { langMain } from '../../data/lang'
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import cx from "classnames";

export const Main = ({isLoaded}: {isLoaded: boolean}) => {
  const { locale, height} = useContext(ThemeContext)
  const l = langMain[locale]
  const controls = useAnimationControls()

  useEffect(() => {
    controls.set({
      y: -height/3,
      scale: 0.6,
      opacity: 0
    })
    if (isLoaded) {
      controls.start({
        y: 0,
        scale: 1,
        opacity: 1,
        transition: { duration: 0.7, delay: 0 },
      })
    }
  }, [controls, height, isLoaded])

  return (
    <AnimatePresence>
      <motion.section
        layout
        initial={{
          y: -height/3,
          scale: 0.6,
          opacity:0
        }}
        animate={controls}
        className={s.wrapper} id={'home'}>
        <div className={cx({[s.welcome]: true, [s.welcomeTr]: locale === 'tr'})}>
          <h1>{l.name}</h1>
          <h2>{l.job}</h2>
          
          <div className={s.btnContainer}>
            <button
              className={'button'}
              onClick={(e) => {
                e.preventDefault()
                window.location.href = '#remote'
              }}
            >
              {l.contactMe}
            </button>
          </div>
        </div>
       
      </motion.section>
    </AnimatePresence>
  )
}