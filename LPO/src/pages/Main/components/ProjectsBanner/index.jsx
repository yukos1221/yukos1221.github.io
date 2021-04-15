import React from 'react'
import { createUseStyles } from "react-jss"
import Swiper from 'react-id-swiper'
import trump from '../../../../assets/images/trump.png'
import styles from "./styles"
import Card from './components/Card'

const useStyles = createUseStyles(styles);

const ProjectsBanner = () => {
  const classes = useStyles();

  const projects = [{
    title: 'Лекция Дональда Трампа в Магнитогорске',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: '02.12.2020',
    image: trump,
  },
  {
    title: 'Лекция Дональда Трампа в Магнитогорске, название в две строчки',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: '02.12.2020',
    image: trump,
  },
  {
    title: 'Лекция Дональда Трампа в Магнитогорске, название в две строчки',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: '02.12.2020',
    image: trump,
  },
  {
    title: 'Лекция Дональда Трампа в Магнитогорске, название в две строчки',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: '02.12.2020',
    image: trump,
  },
]

  const swiperProps = {
    containerClass: classes.swiperContainer,
    slidesPerView: 3,
    spaceBetween: 10,
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.bannerName}>
        Реализованные проекты
      </h3>
      <div className={classes.cardsContainer}>
        <Swiper {...swiperProps}>
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