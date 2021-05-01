const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    height: "100%",
    backgroundColor: 'white',
    padding: '6rem',
  },
  swiperContainer: {
    width: '100%',
    '& > .swiper-wrapper': {
      display: 'flex',
      width: 'fit-content',
    }
  },
  bannerName: {
    fontWeight: 700,
    fontSize: '2.25rem',
    textTransform: 'uppercase',
    lineHeight: '45px'
  },
  cardsContainer: {
    display: 'flex',
    margin: '1.5rem 0',
    overflow: 'hidden',
  },
});

export default styles;