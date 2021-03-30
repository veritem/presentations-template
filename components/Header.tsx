import Link from 'next/link'

export function Header({ name, title, date, url }) {
  return (
    <header>
      <div>
        <a href={url}>
          <span>{name}</span>
        </a>
      </div>
      <Link href="/">
        <a>{title}</a>
      </Link>
      <time>{date}</time>
    </header>
  )
}
