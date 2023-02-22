import React, { useContext } from 'react'
import { localeT, ThemeContext } from '../../utilities/Context'
import s from './LanguageBtn.module.css'
import cx from "classnames";

export const LanguageBtn = () => {
  const { locale, setLocale } = useContext(ThemeContext)

  const clickHandler = () =>
    locale === localeT.Tr ? setLocale(localeT.En) : setLocale(localeT.Tr)

  return (
    <div className={s.wrapper} onClick={clickHandler}>
      <span className={cx({[s.active]: locale === localeT.En})} >En</span>
      <span className={s.line}></span>
      <span className={cx({[s.activeTr]: locale === localeT.Tr})}>Tr</span>
    </div>
  )
}