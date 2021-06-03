import React from "react"
import { createUseStyles } from "react-jss"

import Header from '../../components/Header'
import Head from '../../containers/Head/index.jsx'
import FormBanner from './components/FormBanner'
import MainBanner from './components/MainBanner'
import TrusteeBanner from './components/TrusteeBanner'
import ProjectsBanner from './components/ProjectsBanner'
import styles from "./styles"

const useStyles = createUseStyles(styles);

const MainPage = () => {
  const classes = useStyles();

  return (
      <div className={classes.container}>
        <Head />
        <Header />
        <MainBanner />
        <ProjectsBanner />
        <FormBanner />
        <TrusteeBanner />
        <Header isFooter={true} />
      </div>
  );
};

export default MainPage;
