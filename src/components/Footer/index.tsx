import Logo from '~/assets/logo-mono.svg?react'
import FacebookIcon from '~/assets/facebook-icon.svg?react'
import InstagramIcon from '~/assets/instagram-icon.svg?react'
import TwitterIcon from '~/assets/twitter-icon.svg?react'
import YoutubeIcon from '~/assets/youtube-icon.svg?react'
import config from './config'

export const Footer = () => {
  return (
    <footer className="col-[wide] grid grid-cols-subgrid bg-blue-950 text-slatey-400">
      <div className="col-[main] py-8 min-h-40 flex items-center justify-between gap-8">
        <Logo className="w-32 md:w-45" />

        <nav>
          <ul className="flex items-center gap-4">
            {config.nav.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YoutubeIcon />
        </div>
      </div>
    </footer>
  )
}
