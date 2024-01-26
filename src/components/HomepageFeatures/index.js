import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Portfolio',
    Svg: require('@site/static/img/illustration1.svg').default,
    description: (
      <>
        회사에서 수행했던 프로젝트부터 개인 프로젝트까지. 경력과 기술스택을 정리하는 공간입니다.
      </>
    ),
  },
  {
    title: 'Develop Nook',
    Svg: require('@site/static/img/illustration7.svg').default,
    description: (
      <>
        여러가지를 만들어 올리는 체험 페이지. 
        개인 프로젝트와 공부한 코드를 모아두는 작은 개발 모음 공간입니다.
      </>
    ),
  },
  {
    title: 'Diary',
    Svg: require('@site/static/img/illustration9.svg').default,
    description: (
      <>
        아무거나 쓰는 일기장. 
        공부하며 정리한 노트, 일상 일기 등 기록하는 공간입니다.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
