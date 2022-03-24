import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FAQ, GetFAQResults } from '../types';
import background from '../public/background.jpeg'

const Home: NextPage<{ faqs: FAQ[] }> = ({faqs}) => {
  const router = useRouter();

  return (
    <div>
      <div className={styles.language}>
        <Link href={router.asPath} locale={router.locale === 'en' ? 'es' : 'en'}>
          <a>
            {
              router.locale === 'en' ? 'Hablo Espanol?' : 'Speak English?'
            }
          </a>
        </Link>
      </div>
      <div className={styles.image}>
        <Image src={background} alt='background'></Image>
      </div>
      <div className={styles.content}>
        <div className={styles.titleBackground}>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
        </div>
        {faqs.map(faq => {
          return (
            <div key={faq.id} className={styles.FAQCard}>
              <h1 className={styles.question}>{faq.attributes.Question}</h1>
              <p className={styles.answer}>{faq.attributes.Answer}</p>
            </div>
          )
        })}
        <p>
          If you have any futher questions, please contact us at  
          <a href="mailto:info@standfortrees.org"> info@standfortrees.org</a>
        </p>
        <footer className={styles.footer}>
          <a
            href="https://ethan-kaseff.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed by Ethan Kaseff
          </a>
        </footer>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const res = await fetch(`http://localhost:1337/api/faqs?locale=${locale}`)
  const { data } : GetFAQResults = await res.json()

  return {
    props: {
      faqs: data,
    }
  }

}

export default Home;
