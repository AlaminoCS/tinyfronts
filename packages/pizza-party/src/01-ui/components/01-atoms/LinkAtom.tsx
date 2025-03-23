import { IPropsLinkAtom } from '../../../02-domain/interfaces/ILinkAtom'

const LinkAtom: React.FC<IPropsLinkAtom> = (props) => {
  const { text, icon, href } = props

  return (
    <a href={href}>
      {icon}
      {text}
    </a>
  )
}

export default LinkAtom
