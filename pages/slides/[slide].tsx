import path from 'path'
import fs from 'fs'
import { SlideLayout } from '../../layouts'
import dynamic from 'next/dynamic'
import { TotalPagesContext } from '../../lib/TotalPagesContext'

export default function slideShow({ totalSlidePages, currentSlide, filename }) {
  console.log({ filename: `../../${filename}` })

  const MDXContent = dynamic(() => import(`../../${filename}`))

  return (
    <TotalPagesContext.Provider value={totalSlidePages}>
      <SlideLayout>
        <MDXContent />
      </SlideLayout>
    </TotalPagesContext.Provider>
  )
}

export async function getStaticProps({ params }) {
  const slidesDirectory = path.join(process.cwd(), 'slides')
  const mdxFiles = fs.readdirSync(slidesDirectory)
  const totalSlidePages = mdxFiles.length
  const filename = path.join(process.cwd(), 'slides', `${params.slide}.mdx`)

  return {
    props: {
      totalSlidePages,
      currentSlide: params.slide,
      filename,
    },
  }
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'slides')
  const mdxFiles = fs.readdirSync(postsDirectory)

  // Loop through all post files and create array of slugs (to create links)
  const paths = mdxFiles.map((filename) => ({
    params: {
      slide: filename.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
