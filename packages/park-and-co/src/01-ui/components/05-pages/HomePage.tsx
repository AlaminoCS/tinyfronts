import { Container } from '@mui/material'
import SectionOurServicesOrg from '../03-organisms/SectionOurServicesOrg'
import HeaderTpl from '../04-templates/HeaderTpl'
import SectionContainerImageTpl from '../04-templates/SectionContainerImageTpl'
import SectionDifferentialsTpl from '../04-templates/SectionDifferentialsTpl'
import SectionWhoWeAreTpl from '../04-templates/SectionWhoWeAreTpl'
import { SectionLocationTpl } from 'cargo-components'

const HomePage = () => {
  const locationData = {
    title: 'Onde estamos',
    text: 'Avenida Comendador Pereira Inácio, 900 - Jardim Vergueiro, Sorocaba/SP',
    map: {
      title: 'Localização no Google Maps',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5213618891225!2d-47.458225425423954!3d-23.513743559843032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a84ebf90e83%3A0xaaba7d54565fad40!2sAv.%20Comendador%20Pereira%20In%C3%A1cio%2C%20900%20-%20Jardim%20Vergueiro%2C%20Sorocaba%20-%20SP%2C%2018030-005!5e0!3m2!1spt-BR!2sbr!4v1741374513958!5m2!1spt-BR!2sbr',
    },
  }

  return (
    <Container>
      <HeaderTpl />
      <SectionOurServicesOrg />
      <SectionWhoWeAreTpl />
      <SectionContainerImageTpl />
      <SectionDifferentialsTpl />
      <SectionLocationTpl {...locationData} />
    </Container>
  )
}

export default HomePage
