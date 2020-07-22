import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Desarrolladores</>,
    imageUrl: 'img/developer.svg',
    description: (
      <>
        Ofrece una guía de inicio para elaborar facturas electrónicas, independiente 
        del lenguaje de programación empleado.
      </>
    ),
  },
  {
    title: <>Empresas</>,
    imageUrl: 'img/company.svg',
    description: (
      <>
        Conocer sobre las distintas opciones disponibles para empezar a emitir comprobantes electrónicos,
        y los requerimientos necesarios.
      </>
    ),
  },
  {
    title: <>Personas</>,
    imageUrl: 'img/person.svg',
    description: (
      <>
        Encuentra diferentes opciones de utilidad que puedes aplicar a tus comprobantes electrónicos
        recibidos.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Guia de inicio para implementar la facturación electrónica en Perú - SUNAT.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Empezar
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
