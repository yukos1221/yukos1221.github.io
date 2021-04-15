/* eslint-disable react/prop-types */
import React from 'react'
import { createUseStyles } from "react-jss"
import styles from "./styles"

const useStyles = createUseStyles(styles);

const Card = ({ item }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.photoBlock}>
        <img src={item.image} className={classes.photo} />
      </div>
      <div className={classes.name}>
        {item.name}
      </div>
      <div className={classes.description}>
        {item.description}
      </div>
    </div>
  )
}

export default Card