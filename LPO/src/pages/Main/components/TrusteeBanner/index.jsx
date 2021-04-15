import React from 'react'
import { createUseStyles } from "react-jss"
import trusteeDefault from '../../../../assets/images/trustee_default.png'
import Card from './components/Card';
import styles from "./styles"

const useStyles = createUseStyles(styles);

const trusteeData = [
  {
    name: 'сергей кукожский',
    description: 'программист, писатель, бомж',
    image: trusteeDefault,
  },
  {
    name: 'сергей кукожский',
    description: 'программист, писатель, бомж',
    image: trusteeDefault,
  },
]

const TrusteeBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3 className={classes.bannerName}>
        состав попечителей лпо
      </h3>
      <div className={classes.trusteeList}>
        {trusteeData.map((item, index) => <Card key={index} item={item} />)}
      </div>
    </div>
  )
}

export default TrusteeBanner