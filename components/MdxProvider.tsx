import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import SlidePage from '../layouts/SlidesPage'

const mdComponent = {
  h1: (props) => <h1 {...props} />,
  pre: (props) => props.children,
  Image,
  SlidePage,
}

export default function Provider({ children }) {
  return <MDXProvider components={mdComponent}>{children}</MDXProvider>
}
