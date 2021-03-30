import Head from 'next/head'
import { Header } from '../components/Header'
import { siteConfig } from '../site.config'

export function SlideLayout({ children }) {
  return (
    <>
      <Head>
        <title>
          {siteConfig.name} - {siteConfig.title}
        </title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header
        name={siteConfig.name}
        title={siteConfig.title}
        date={siteConfig.date}
        url={siteConfig.author.url}
      />
      <div>{children}</div>
    </>
  )
}
