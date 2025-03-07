import { IPropsLinkAtom } from '../../../02-domain/interfaces/ILinkAtom'
import LinkAtom from '../01-atoms/LinkAtom'

const ContactNavMolecule = () => {
  const linksAtom: IPropsLinkAtom[] = [
    {
      text: 'email@email.com',
      icon: 'aqui',
      href: 'email@email.com',
    },
    {
      text: 'email@email.com',
      icon: 'aqui',
      href: 'email@email.com',
    },
    {
      text: 'email@email.com',
      icon: 'aqui',
      href: 'email@email.com',
    },
  ]

  return (
    <nav>
      {linksAtom.map((item: IPropsLinkAtom, index: number) => {
        return (
          <LinkAtom
            key={index}
            text={item.text}
            icon={item.icon}
            href={item.href}
          />
        )
      })}
    </nav>
  )
}

export default ContactNavMolecule
