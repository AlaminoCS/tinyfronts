import { ContactNavMolecule } from 'cargo-components'
import MainNavMolecule from '../02-molecules/MainNavMolecule'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const TopNavOrg = () => {
  const links = [
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

  return (
    <div>
      <ContactNavMolecule links={links} />
      <MainNavMolecule />
    </div>
  )
}

export default TopNavOrg
