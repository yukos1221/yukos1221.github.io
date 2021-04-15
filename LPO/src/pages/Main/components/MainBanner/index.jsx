import React from 'react'
import { createUseStyles } from "react-jss"
import Button from '../../../../components/Button';
import styles from "./styles"

const useStyles = createUseStyles(styles);

const MainBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.mainTitle}>Либертарианский проектный офис</h1>
      <h2 className={classes.secondTitle}>
        ФИНАНСОВАЯ и организационная ПОМОЩЬ ЛИБЕРТАРИАНЦАМ
        В РЕАЛИЗАЦИИ ИХ НЕКОММЕРЧЕСКИХ ПРОЕКТОВ
      </h2>
      <h3 className={classes.description}>
        Помогаем либертарианцам, которые ищут возможности реализации своих некоммерческих проектов, найти полное или частичное финансирование.<br />
        Мы некоммерческое свободное объединение граждан, которое существует
        на пожертвования попечителей.
      </h3>
      <div className={classes.buttonsRow}>
        <Button className={classes.button}>
          Подать заявку
        </Button>
      </div>
    </div>
  )
}

export default MainBanner