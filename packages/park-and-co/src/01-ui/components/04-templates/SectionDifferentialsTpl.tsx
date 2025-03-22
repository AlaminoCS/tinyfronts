import { SectionWithImage } from 'cargo-components'
import { ISectionWithImage } from '../../../02-domain/interfaces/ISectionWithImage'

const SectionDifferentialsTpl = () => {
  const sectionData: ISectionWithImage = {
    imagePosition: 'left', // Pode ser 'left' ou 'right'
    title: 'Diferenciais',
    description: `
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat rem perspiciatis!</p>      
    `,
    image: {
      src: '/assets/images/about-us.jpg', // Caminho relativo à pasta public
      alt: 'Diferenciais',
    },
  }

  return <SectionWithImage {...sectionData} />
}

export default SectionDifferentialsTpl
