import { IMAGES } from '../../../07-mocks/images'
import { mainLinks } from '../../../07-mocks/mainLinks'
import { banners } from '../../../07-mocks/banners'
import { locationData } from '../../../07-mocks/locationData'
import { sectionData } from '../../../07-mocks/sectionData'
import { imageData } from '../../../07-mocks/imageData'
import { differentialData } from '../../../07-mocks/differentialData'
import { whoWeAreData } from '../../../07-mocks/whoWeAreData'
import { whatsappData } from '../../../07-mocks/whatsappData'
import { socialMediaLinks } from '../../../07-mocks/socialMediaLinks'
import { footerData } from '../../../07-mocks/footerData'
import { sectionWithImagesData } from '../../../07-mocks/sectionWithImagesData'
import { contactLinks } from '../../../07-mocks/contactLinks'

import {
  ContactForm,
  Footer,
  HeaderTpl,
  SectionContainerImageTpl,
  SectionDifferentialsTpl,
  SectionLocationTpl,
  SectionOurServicesOrg,
  SectionWhoWeAreTpl,
  SectionWithImages,
  VideoCardMolecule,
  WhatsAppButtonAtom
} from 'cargo-components'

const HomePage = () => {
  const headerData = {
    contactLinks,
    mainLinks,
    logoSrc: IMAGES.logo,
    banners,
  }

  const typedWhoWeAreData = {
    ...whoWeAreData,
    sectionData: {
      ...whoWeAreData.sectionData,
      imagePosition: 'right' as const
    }
  }

  const typedDifferentialData = {
    ...differentialData,
    sectionData: {
      ...differentialData.sectionData,
      imagePosition: 'left' as const
    }
  }

  return (
    <>
      <HeaderTpl {...headerData} />
      <SectionOurServicesOrg {...sectionData} />
      <SectionWhoWeAreTpl {...typedWhoWeAreData} />
      <SectionContainerImageTpl image={imageData} />
      <SectionDifferentialsTpl {...typedDifferentialData} />
      <SectionLocationTpl {...locationData} />
      <SectionWithImages {...sectionWithImagesData} />
      <VideoCardMolecule
        videoUrl="https://www.youtube.com/embed/_tF4nhOCFAc"
        title="Institucional"
      />
      <ContactForm phoneNumber={whatsappData.phoneNumber} />
      <WhatsAppButtonAtom {...whatsappData} />
      <Footer
        socialMedia={socialMediaLinks.map(link => ({
          ...link,
          iconName: link.name as 'Facebook' | 'Instagram' | 'LinkedIn' | 'YouTube',
        }))}
        {...footerData}
      />
    </>
  )
}

export default HomePage
