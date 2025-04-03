import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { IMAGES } from '../../../07-mocks/images'

import {
  ContactForm,
  Footer,
  HeaderTpl,
  ISectionDifferentialsProps,
  ISectionOurServicesProps,
  ISectionWhoWeAreProps,
  IService,
  SectionContainerImageTpl,
  SectionDifferentialsTpl,
  SectionLocationTpl,
  SectionOurServicesOrg,
  SectionWhoWeAreTpl,
  SectionWithImages,
  WhatsAppButtonAtom
} from 'cargo-components'

const HomePage = () => {
  const contactLinks = [
    {
      text: 'contato@parkandco.com',
      href: 'mailto:contato@parkandco.com',
      icon: <EmailIcon />,
    },
    {
      text: '(15) 99150-9557',
      href: 'tel:+5515991509557',
      icon: <PhoneIcon />,
    },
    {
      text: 'Comendador Pereira Inácio, 900',
      href: 'https://g.co/kgs/ACsrcY7',
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
      text: 'Onde estamos',
      href: '#localizacao',
    },
    {
      text: 'Contato',
      href: '#contato',
    },
  ]

  const banners = [
    {
      imageUrl: IMAGES.banner1,
      title: 'Bem-vindo ao Park & Co',
      description: 'Descubra nossos serviços exclusivos.',
    },
    {
      imageUrl: IMAGES.banner2,
      title: 'Qualidade e Excelência',
      description: 'Trabalhamos para superar suas expectativas.',
    },
    {
      imageUrl: IMAGES.banner3,
      title: 'Entre em Contato',
      description: 'Estamos prontos para atender você!',
    },
  ]

  const headerData = {
    contactLinks,
    mainLinks,
    logoSrc: IMAGES.logo,
    banners,
  }

  const locationData = {
    title: 'Onde estamos',
    locations: [
      {
        title: 'Sorocaba - Matriz',
        text: 'Avenida Comendador Pereira Inácio, 900 - Jardim Vergueiro, Sorocaba/SP',
        map: {
          title: 'Localização no Google Maps - Sorocaba',
          src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5213618891225!2d-47.458225425423954!3d-23.513743559843032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a84ebf90e83%3A0xaaba7d54565fad40!2sAv.%20Comendador%20Pereira%20In%C3%A1cio%2C%20900%20-%20Jardim%20Vergueiro%2C%20Sorocaba%20-%20SP%2C%2018030-005!5e0!3m2!1spt-BR!2sbr!4v1741374513958!5m2!1spt-BR!2sbr',
        },
      },
      {
        title: 'São Paulo - Filial',
        text: 'Avenida Paulista, 1000 - Bela Vista, São Paulo/SP',
        map: {
          title: 'Localização no Google Maps - São Paulo',
          src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098839460559!2d-46.65439708502168!3d-23.564616184685214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x63b9f0e3703c751a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1629900000000!5m2!1spt-BR!2sbr',
        },
      },
      {
        title: 'Campinas - Filial',
        text: 'Avenida Francisco Glicério, 500 - Centro, Campinas/SP',
        map: {
          title: 'Localização no Google Maps - Campinas',
          src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356219020248!2d-47.06277708503589!3d-22.902899385015085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8f6a9d99625%3A0x3c7498df0b6f4247!2sAv.%20Francisco%20Glic%C3%A9rio%2C%20500%20-%20Centro%2C%20Campinas%20-%20SP%2C%2013012-000!5e0!3m2!1spt-BR!2sbr!4v1629900000000!5m2!1spt-BR!2sbr',
        },
      },
    ],
    id: 'localizacao',
  };

  const ourServices: IService[] = [
    {
      image: IMAGES.servicos1,
      title: 'Administração de garagem',
      description:
        'Possuímos o que há de melhor em tecnologia e infraestrutura para garantir que o estacionamento de seu empreendimento traga conforto e segurança a seu cliente.',
    },
    {
      image: IMAGES.servicos2,
      title: 'Vallet e SelfPark',
      description:
        'Operamos em diversas modalidades, entre elas o valet park, oferecendo comodidade aos clientes e self park para os clientes que desejem estacionar seus veículos.',
    },
    {
      image: IMAGES.servicos3,
      title: 'Implantação',
      description:
        'Oferecemos um serviço completo desde a implantação de sistema, operacional, treinamento, manutenção.',
    },
  ]

  const sectionData: ISectionOurServicesProps = {
    sectionTitle: 'Conheça nossos serviços',
    services: ourServices,
    id: 'servicos',
  }

  const imageData = {
    src: IMAGES.separadora,
    alt: 'Imagem separadora',
  }

  const differentialData: ISectionDifferentialsProps = {
    sectionData: {
      imagePosition: 'left',
      title: 'Diferenciais',
      description: `
        <p>
          <strong>Gestão Transparente</strong>
        </p>
  
        <p>
          Em nossas operações, buscamos a proximidade de contratantes, colaboradores e clientes final.​
          Acreditamos que somente assim, ofereceremos uma gestão confortável e segura aos usuários.
        </p>
  
        <p>
          <strong>Tecnologias de Ponta</strong>
        </p>
  
        <p>
          Estamos sempre antenados ao mercado e buscamos oferecer as mais novas tecnologias 
          para as nossas operações.
        </p>
  
        <p>
          <strong>Capital Humano</strong>
        </p>
  
        <p>
          Em nossa base, priorizamos o bem estar e cuidado com nossos colabooradores, pois vemos 
          eles como base, onde se consolidam o bom atendimento e um bom funcionamento das operações.
        </p>
  
        <p>
          <strong>Melhorias Contínuas</strong>
        </p>
  
        <p>
          Não temos medo de mudanças. Buscamos sempre reavaliar processos para que sempre 
          haja melhorias nos pátios.
        </p>
      `,
      image: {
        src: IMAGES.diferenciais,
        alt: 'Diferenciais',
      },
      id: 'nossos-diferenciais',
    },
  }

  const whoWeAreData: ISectionWhoWeAreProps = {
    sectionData: {
      imagePosition: 'right',
      title: 'Quem somos',
      description: `
        <p>
          O <strong>Park&Co</strong> está no mercado desde 2016 e vem entendendo as necessidades dos clientes a 
          cada dia onde já coleciona cases importantes de sucesso com o atendimento em grandes 
          centros de referência em clínicas médicas, prédios comerciais, hospitais e academias 
          de ginástica como parceiros de trabalho, o que nos capacitou cada vez mais a oferecer 
          o melhor serviço para sua empresa.
        </p>
        <p>
          A empresa <strong>Park&Co</strong> é especializada no ramo de gestão de estacionamentos e garagens 
          onde busca primeiramente o conforto para seus clientes, segurança em confiar 
          seus veículos a nós, além da excelência no atendimento, tornando assim, uma 
          experiência diferenciada aos frequentadores.
        </p>
      `,
      image: {
        src: IMAGES.quemSomos,
        alt: 'Quem somos',
      },
      id: 'quem-somos',
    },
  }

  const sectionWithImagesData = {
    title: 'A melhor companhia para o seu empreendimento',
    text: 'O Park & Co. oferece uma diversidade de ações para seus clientes, contando com as tecnologias mais avançadas disponíveis para administração de estacionamento. Proporcionamos a todos maior conforto, segurança e acessibilidade. Realizamos serviços de implantação, viabilidade, otimização de espaço para que sua área seja rentável e bem aproveitada.',
    images: [IMAGES.imagem1, IMAGES.imagem2, IMAGES.imagem3, IMAGES.imagem4],
  };

  const whatsappData = {
    phoneNumber: '5515991509557',
    defaultMessage:
      'Olá! Vim através do seu site e gostaria de mais informações sobre os serviços da Park&Co.',
  };

  const socialMediaLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/cargotransportes',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/cargotransportes',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/cargotransportes',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/cargotransportes',
    },
  ];

  const footerData = {
    companyName: 'Park&Co',
    companyDescription:
      'Oferecemos soluções completas em estacionamento, com tecnologia avançada e atendimento personalizado para garantir a melhor experiência aos nossos clientes.',
  
    contact: {
      address: 'Avenida Comendador Pereira Inácio, 900 - Jardim Vergueiro, Sorocaba/SP',
      phone: '(15) 98137-7293',
      email: 'contato@parkandco.com',
      businessHours: ['Segunda a Sexta: 08h às 18h', 'Sábado: 09h às 13h', 'Domingo: Fechado'],
    },
  
    columns: [
      {
        title: 'Institucional',
        links: [
          { text: 'Início', href: '#home' },
          { text: 'Serviços', href: '#servicos' },
          { text: 'Sobre Nós', href: '#quem-somos' },
          { text: 'Nossos diferenciais', href: '#nossos-diferenciais' },
          { text: 'Localização', href: '#localizacao' },
          { text: 'Contato', href: '#contato' },
        ],
      },
      {
        title: 'Serviços',
        links: [
          { text: 'Estacionamento', href: '#' },
          { text: 'Valet', href: '#' },
          { text: 'Gestão de Frotas', href: '#' },
          { text: 'Consultoria', href: '#' },
        ],
      },
    ],
    legal: {
      privacyPolicy: '/privacidade',
      termsOfService: '/termos',
      cookiePolicy: '/cookies',
    },
    developerInfo: {
      name: 'Alamino Code Solutions',
      website: 'https://alaminocode.com',
    },
    // newsletter: {
    //   title: 'Fique por dentro!',
    //   description: 'Assine nossa newsletter e receba novidades e promoções exclusivas.',
    //   buttonText: 'Assinar',
    // },
  };

  return (
    <>
      <HeaderTpl {...headerData} />
      <SectionOurServicesOrg {...sectionData} />
      <SectionWhoWeAreTpl {...whoWeAreData} />
      <SectionContainerImageTpl image={imageData} />
      <SectionDifferentialsTpl {...differentialData} />
      <SectionLocationTpl {...locationData} />
      <SectionWithImages {...sectionWithImagesData} />
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
