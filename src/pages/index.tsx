import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout title="Restlyn" description="Gherkin-powered REST API & contract testing framework">
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <img src={useBaseUrl('img/favicon.svg')} alt="Restlyn" height={96} style={{marginBottom: 16}} />
          <h1 className={styles.title}>Restlyn</h1>
          <p className={styles.tagline}>Gherkin-powered REST API & contract testing framework</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to={useBaseUrl('docs/getting-started')}>Get Started</Link>
            <a className="button button--secondary button--lg" href="https://github.com/amiya-pattnaik/restlyn" target="_blank" rel="noreferrer">GitHub</a>
            <a className="button button--secondary button--lg" href="https://www.npmjs.com/package/restlyn" target="_blank" rel="noreferrer">npm</a>
            <Link className="button button--secondary button--lg" to={useBaseUrl('docs/cli')}>CLI</Link>
          </div>
          <div className={styles.badges} style={{marginTop: 16}}>
            <a href="https://www.npmjs.com/package/restlyn" target="_blank" rel="noreferrer">
              <img src="https://img.shields.io/npm/v/restlyn" alt="npm version" />
            </a>
            <a href="https://www.npmjs.com/package/restlyn" target="_blank" rel="noreferrer">
              <img src="https://img.shields.io/npm/dm/restlyn.svg" alt="npm downloads" />
            </a>
            <a href="https://github.com/amiya-pattnaik/restlyn" target="_blank" rel="noreferrer">
              <img src="https://img.shields.io/github/stars/amiya-pattnaik/restlyn?style=social" alt="GitHub stars" />
            </a>
            <a href="https://github.com/amiya-pattnaik/restlyn/blob/main/LICENSE" target="_blank" rel="noreferrer">
              <img src="https://img.shields.io/npm/l/restlyn" alt="license" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.features}>
          <h2>Why Restlyn?</h2>
          <div className={styles.featureGrid}>
            <FeatureCard title="Gherkin → Tests" colorClass="bg7">
              Convert feature files to executable Mocha tests without step definitions.
            </FeatureCard>
            <FeatureCard title="Data Driven" colorClass="bg2">
              Run scenarios from CSV/JSON files and iterate rows with ease.
            </FeatureCard>
            <FeatureCard title="Schema Validation" colorClass="bg8">
              Validate responses with JSON Schema via AJV. Auto-generate schema from live response with <code>restlyn schema</code>.
            </FeatureCard>
            <FeatureCard title="Retry & Tokens" colorClass="bg3">
              Built-in retry helpers and token extraction to chain requests.
            </FeatureCard>
            <FeatureCard title="Beautiful Reports" colorClass="bg4">
              HTML report included; optional PDF if puppeteer is installed.
            </FeatureCard>
            <FeatureCard title="Easy CLI" colorClass="bg6">
              <code>restlyn steps</code>, <code>restlyn tests</code>, <code>restlyn verify</code>
            </FeatureCard>
            <FeatureCard title="Scenario Tags" colorClass="bg9">
              Control runs with <code>@skip</code>, <code>@only</code>, <code>@debug</code>, <code>@retry(2)</code>.
            </FeatureCard>
            <FeatureCard title="Mock Server" colorClass="bg5">
              Spin up a quick mock API with <code>restlyn mock</code>.
            </FeatureCard>
            <FeatureCard title="Warnings & CI" colorClass="bg5">
              Aggregated warnings JSON; exit codes for CI with <code>--warn-as-error</code>.
            </FeatureCard>
            <FeatureCard title="Configurable Paths" colorClass="bg10">
              Flexible <code>.restlynrc</code> for features, schemas, outputs, base URLs.
            </FeatureCard>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function FeatureCard({title, children, colorClass}: {title: string; children: React.ReactNode; colorClass: string}) {
  return (
    <div className={`${styles.featureCard} ${styles[colorClass]}`}> 
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
