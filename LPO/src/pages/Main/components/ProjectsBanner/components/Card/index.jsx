/* eslint-disable react/prop-types */
import React from 'react'
import { createUseStyles } from "react-jss"
import dateIcon from '../../../../../../assets/icons/date.svg'
import styles from "./styles"

const useStyles = createUseStyles(styles);

const Card = ({ item }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={item.image} alt={item.title} className={classes.image} />
      <div className={classes.titleBlock}>
        <p className={classes.title}>
          {item.title}
        </p>
      </div>
      <p className={classes.description}>
        {item.description}
      </p>
      <div className={classes.bottomRow}>
        <div className={classes.dateBlock}>
          <img src={dateIcon} className={classes.dateIcon} />
          {item.date}
        </div>
      </div>
    </div>
  )
}

export default Card