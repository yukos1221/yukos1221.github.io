import React from 'react'
import { createUseStyles } from "react-jss"
import trusteeDefault from '../../../../assets/images/trustee_default.png'
import Card from './components/Card';
import styles from "./styles"

const useStyles = createUseStyles(styles);

const trusteeData = [
  {
    name: 'марина мацапулина',
    description: 'Председатель ЛПО',
    image: trusteeDefault,
  },
  {
    name: 'дмитрий максимов',
    description: 'Учредитель ЛПО',
    image: trusteeDefault,
  },
  {
    name: 'дмитрий петров',
    description: '???',
    image: trusteeDefault,
  },
  {
    name: 'ярослав слепухин',
    description: 'Программист, член ЛПР',
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