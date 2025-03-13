import styled from 'styled-components'

const primary = '#721817'
const light = '#ffffff'

export const ContactNav = styled.nav`
  background-color: ${primary};
  color: ${light};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${light};
    margin: 0 20px;
  }
`
