import GothamProRegularWOFF2 from '../../assets/fonts/GothamPro/Regular.woff2'
import GothamProRegularWOFF from '../../assets/fonts/GothamPro/Regular.woff'
import GothamProRegularTTF from '../../assets/fonts/GothamPro/Regular.ttf'
import GothamProBoldWOFF2 from '../../assets/fonts/GothamPro/Bold.woff2'
import GothamProBoldWOFF from '../../assets/fonts/GothamPro/Bold.woff'
import GothamProBoldTTF from '../../assets/fonts/GothamPro/Bold.ttf'
import MuseoSansCyrlLightWOFF2 from '../../assets/fonts/MuseoSansCyrl/MuseoSansCyrl-300.woff2'
import MuseoSansCyrlLightWOFF from '../../assets/fonts/MuseoSansCyrl/MuseoSansCyrl-300.woff'
import MuseoSansCyrlLightTTF from '../../assets/fonts/MuseoSansCyrl/MuseoSansCyrl-300.ttf'
import MuseoSansCyrlMediumWOFF2 from '../../assets/fonts/MuseoSansCyrl/MuseoSansCyrl-500.woff2'
import MuseoSansCyrlMediumWOFF from '../../assets/fonts/MuseoSansCyrl/MuseoSansCyrl-500.woff'
import MuseoSansCyrlMediumTTF from '../../assets/fonts/MuseoSansCyrl/MuseoSansCyrl-500.ttf'
import MuseoSansCyrlBoldWOFF2 from '../../assets/fonts/MuseoSansCyrl/MuseoSansCyrl-700.woff2'
import MuseoSansCyrlBoldWOFF from '../../assets/fonts/MuseoSansCyrl/MuseoSansCyrl-700.woff'
import MuseoSansCyrlBoldTTF from '../../assets/fonts/MuseoSansCyrl/MuseoSansCyrl-700.ttf'
import GeometricSansSerifWOFF2 from '../../assets/fonts/Geometric/geometricsansserifv1.woff2'
import GeometricSansSerifWOFF from '../../assets/fonts/Geometric/geometricsansserifv1.woff'
import GeometricSansSerifTTF from '../../assets/fonts/Geometric/geometricsansserifv1.ttf'

const styles = () => ({
  '@global': {
    '@font-face': [
      {
        fontFamily: 'Gotham Pro',
        fontWeight: 400,
        src: `url("${GothamProRegularWOFF2}") format('woff2'),
          url("${GothamProRegularWOFF}") format('woff'),
          url("${GothamProRegularTTF}") format('truetype')`
      },
      {
        fontFamily: 'Gotham Pro',
        fontWeight: 700,
        src: `url("${GothamProBoldWOFF2}") format('woff2'),
          url("${GothamProBoldWOFF}") format('woff'),
          url("${GothamProBoldTTF}") format('truetype')`
      },
      {
        fontFamily: 'Museo Sans Cyrl',
        fontWeight: 300,
        src: `url("${MuseoSansCyrlLightWOFF2}") format('woff2'),
          url("${MuseoSansCyrlLightWOFF}") format('woff'),
          url("${MuseoSansCyrlLightTTF}") format('truetype')`
      },
      {
        fontFamily: 'Museo Sans Cyrl',
        fontWeight: 500,
        src: `url("${MuseoSansCyrlMediumWOFF2}") format('woff2'),
          url("${MuseoSansCyrlMediumWOFF}") format('woff'),
          url("${MuseoSansCyrlMediumTTF}") format('truetype')`
      },
      {
        fontFamily: 'Museo Sans Cyrl',
        fontWeight: 700,
        src: `url("${MuseoSansCyrlBoldWOFF2}") format('woff2'),
          url("${MuseoSansCyrlBoldWOFF}") format('woff'),
          url("${MuseoSansCyrlBoldTTF}") format('truetype')`
      },
      {
        fontFamily: 'Geometric Sans Serif',
        fontWeight: 400,
        src: `url("${GeometricSansSerifWOFF2}") format('woff2'),
          url("${GeometricSansSerifWOFF}") format('woff'),
          url("${GeometricSansSerifTTF}") format('truetype')`
      }
    ],
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'Gotham Pro'
    },
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    }
  }
});

export default styles;
