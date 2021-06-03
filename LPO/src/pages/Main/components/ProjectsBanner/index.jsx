import React from 'react'
import { createUseStyles } from "react-jss"
import Swiper from 'react-id-swiper'
import kaliningrad from '../../../../assets/images/trump.png'
import krasnodar from '../../../../assets/images/krasnodar.png'
import shalnev from '../../../../assets/images/shalnev.png'
import styles from "./styles"
import Card from './components/Card'

const useStyles = createUseStyles(styles);

const projects = [{
    title: 'Лекция Андрея Шальнева и Ивана Чинарова в Воронеже',
    description: 'На мероприятии разобрали вопросы, посвященные подготовке и проведению региональной предвыборной кампании, перспективы участия в региональных выборах оппозиционных кандидатов, а также мы обсудили проблемы современной репрессивной наркополитики и возможные пути их решения.',
    date: '14.12.2019',
    image: shalnev,
  },
  {
    title: 'Лекция Михаила Светова в Калининграде',
    description: `Михаил Светов вновь приехал в Калининград, чтобы рассказать о том, как государство разрушает экологию и почему именно либертарианство позволяет защитить её лучше всего. Лекцию посетило около ста человек.

Обсуждали, как можно создать спрос на животную продукцию и тем самым спасти вымирающие виды без государственного вмешательства.`,
    date: '01.04.2019',
    image: kaliningrad,
  },
  {
    title: 'Лекция Михаила Светова в Краснодаре',
    description: `Михаил приехал в южную столицу во второй раз, чтобы рассказать об экологии и либертарианстве, а также о том, почему государственные методы вредят экологии, а не спасают ее.

Лекция была разделена на две части, одна из которых — непосредственное объяснение аудитории того, как либертарианство смотрит на экологию. Вторая часть  посвящалась вопросам из зала.`,
    date: '02.12.2020',
    image: krasnodar,
  },
]

const ProjectsBanner = () => {
  const classes = useStyles();

  const swiperProps = {
    containerClass: classes.swiperContainer,
    slidesPerView: 3,
    spaceBetween: 20,
    rebuildOnUpdate: true,
    breakpoints: {
      1000: {
        slicedPerView: 3,
      },
      650: {
        slidesPerView: 2,
      },
      10: {
        slidesPerView: 1,
      }
    }
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.bannerName}>
        Реализованные проекты
      </h3>
      <div className={classes.cardsContainer}>
        <Swiper {...swiperProps} >
          {projects.map((project, index) => (
            <div key={index}>
              <Card item={project} />
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ProjectsBanner