import Link from 'next/link'
import styles from '../styles/footer.module.scss'

const mainLinks = {
  Home: '/',
  Blog: '/blog',
  Projects: '/projects',
}

const footerLinks = [
  [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Projects', url: '/projects' },
    { name: 'RSS', url: '/feed.xml' },
  ],
  [
    { name: 'Mail', url: 'mailto:saikrishna.gdsv@gmail.com' },
    { name: 'GitHub', url: 'https://github.com/krishnagottipalli' },
    { name: 'Twitter', url: 'https://twitter.com/msshanmukh' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gottipalli/' },
  ],
]

export function Footer({}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <ul className={styles.links}>
          {footerLinks[0].map(link => (
            <li key={link.name}>
              <Link href={link.url}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>

        <ul className={styles.links}>
          {footerLinks[1].map(link => (
            <li key={link.name}>
              <Link href={link.url}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.copyright}>&copy; Sai Krishna {new Date().getFullYear()}</p>
    </footer>
  )
}
