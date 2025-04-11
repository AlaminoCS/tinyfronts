import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export const contactLinks = [
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