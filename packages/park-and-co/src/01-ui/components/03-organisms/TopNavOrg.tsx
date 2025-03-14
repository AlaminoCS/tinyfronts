import { ContactNavMolecule, MainNavMolecule } from 'cargo-components'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const TopNavOrg = () => {
  const contactLinks = [
    {
      text: 'adm@parkcoestacionamentos.com',
      href: 'mailto:adm@parkcoestacionamentos.com',
      icon: <EmailIcon />,
    },
    {
      text: '15.99159.2329',
      href: 'tel:15.99159.23299',
      icon: <PhoneIcon />,
    },
    {
      text: '15.99150.9557',
      href: 'tel:15.99150.9557',
      icon: <PhoneIcon />,
    },
    {
      text: 'Avenida Comendador Pereira Inácio,900 Jardim Vergueiro Sorocaba/SP',
      href: 'https://g.co/kgs/v4aNwVq',
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

  const IMAGES = {
    logo: new URL('../../../04-assets/images/logo.png', import.meta.url).href,
  }

  return (
    <div>
      <ContactNavMolecule links={contactLinks} />
      <MainNavMolecule links={mainLinks} logoSrc={IMAGES.logo} />
    </div>
  )
}

export default TopNavOrg
