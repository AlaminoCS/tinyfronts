import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { TopNavProvider, TopNavOrg, BigImgCarousel } from 'cargo-components'

const HeaderTpl = () => {
  const url = '../../../04-assets/images'

  const IMAGES = {
    logo: new URL(`${url}/logo.png`, import.meta.url).href,
    banner: new URL(`${url}/banner.jpg`, import.meta.url).href,
  }

  const contactLinks = [
    {
      text: 'contato@parkandco.com',
      href: 'mailto:contato@parkandco.com',
      icon: <EmailIcon />,
    },
    {
      text: '+55 11 98765-4321',
      href: 'tel:+5511987654321',
      icon: <PhoneIcon />,
    },
    {
      text: 'Rua dos Parques, 789',
      href: 'https://maps.google.com/?q=R.+dos+Parques,+789',
      icon: <LocationOnIcon />,
    },
  ]

  const mainLinks = [
    {
      text: 'Quem somos',
      href: '#quem-somos',
    },
    {
      text: 'Nossos diferenciais',
      href: '#nossos-diferenciais',
    },
    {
      text: 'Serviços',
      href: '#servicos',
    },
    {
      text: 'Contato',
      href: '#contato',
    },
  ]

  const banners = [
    {
      imageUrl: IMAGES.banner,
      title: 'Bem-vindo ao Park and Co',
      description: 'Descubra nossos serviços exclusivos.',
    },
    {
      imageUrl: IMAGES.banner,
      title: 'Qualidade e Excelência',
      description: 'Trabalhamos para superar suas expectativas.',
    },
    {
      imageUrl: IMAGES.banner,
      title: 'Entre em Contato',
      description: 'Estamos prontos para atender você!',
    },
  ]

  return (
    <TopNavProvider
      value={{
        contactLinks,
        mainLinks,
        logoSrc: IMAGES.logo,
      }}
    >
      <header>
        <TopNavOrg />
        <BigImgCarousel banners={banners} />
      </header>
    </TopNavProvider>
  )
}

export default HeaderTpl
