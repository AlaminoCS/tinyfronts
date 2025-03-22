import { createGlobalStyle } from 'styled-components'

const ParkAndCoStyles = createGlobalStyle`
  /* Importação das fontes */
  @font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/robotocondensed/v25/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    src: url('https://fonts.gstatic.com/s/robotocondensed/v25/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/opensans/v34/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVc.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: url('https://fonts.gstatic.com/s/opensans/v34/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4gaVc.woff2') format('woff2');
  }

  /* Estilos globais */
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: 'Open Sans', sans-serif; // Fonte padrão para o corpo do texto
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.primary};
    font-family: 'Roboto Condensed', sans-serif; // Fonte para títulos
    margin-top: ${(props) => props.theme.spacing.medium};
    margin-bottom: ${(props) => props.theme.spacing.small};
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.h1};
    text-align: center;
    margin-top: ${(props) => props.theme.spacing.large};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.h2};
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.h3};
  }

  h4 {
    font-size: ${(props) => props.theme.fontSizes.h4};
  }

  h5 {
    font-size: ${(props) => props.theme.fontSizes.h5};
  }

  h6 {
    font-size: ${(props) => props.theme.fontSizes.h6};
  }

  p {
    margin-bottom: ${(props) => props.theme.spacing.medium};
    font-family: 'Open Sans', sans-serif; // Fonte para parágrafos
  }

  figure {
    margin: 0;
  }

  #root {
    > div {
      > section, figure {
        margin-bottom: 3rem; 
      }  
    }
  }

  a {
    color: ${(props) => props.theme.colors.info};
    text-decoration: none;
    transition: ${(props) => props.theme.transitions.default};
    font-family: 'Open Sans', sans-serif; // Fonte para links

    &:hover {
      color: ${(props) => props.theme.colors.primary};
      text-decoration: underline;
    }
  }

  button {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.light};
    border: none;
    padding: ${(props) => props.theme.spacing.small} ${(props) => props.theme.spacing.medium};
    border-radius: ${(props) => props.theme.borderRadius.small};
    font-family: 'Open Sans', sans-serif; // Fonte para botões
    cursor: pointer;
    transition: ${(props) => props.theme.transitions.default};

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
    }

    &:disabled {
      background-color: ${(props) => props.theme.colors.secondary};
      cursor: not-allowed;
    }
  }

  input, textarea, select {
    width: 100%;
    padding: ${(props) => props.theme.spacing.small};
    margin-bottom: ${(props) => props.theme.spacing.medium};
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.borderRadius.small};
    font-family: 'Open Sans', sans-serif; // Fonte para inputs
    transition: ${(props) => props.theme.transitions.default};

    &:focus {
      border-color: ${(props) => props.theme.colors.primary};
      outline: none;
    }
  }

  label {
    display: block;
    margin-bottom: ${(props) => props.theme.spacing.small};
    font-weight: bold;
    font-family: 'Open Sans', sans-serif; // Fonte para labels
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    margin-bottom: ${(props) => props.theme.spacing.medium};
    padding-left: ${(props) => props.theme.spacing.medium};
    font-family: 'Open Sans', sans-serif; // Fonte para listas
  }

  li {
    margin-bottom: ${(props) => props.theme.spacing.small};
  }

  code {
    font-family: 'Open Sans', sans-serif; // Fonte para código
    background-color: ${(props) => props.theme.colors.secondary};
    padding: ${(props) => props.theme.spacing.small};
    border-radius: ${(props) => props.theme.borderRadius.small};
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${(props) => props.theme.spacing.medium};
  }

  .text-center {
    text-align: center;
  }

  .text-primary {
    color: ${(props) => props.theme.colors.primary};
  }

  .text-secondary {
    color: ${(props) => props.theme.colors.secondary};
  }

  .bg-primary {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.light};
  }

  .bg-secondary {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};
  }
`

export const parkAndCoTheme = {
  colors: {
    primary: '#721817', // Cor principal (vermelho/marrom escuro)
    secondary: '#9F2624', // Variação mais clara da cor principal
    background: '#ffffff', // Fundo claro
    text: '#000000', // Texto escuro
    success: '#4CAF50', // Verde para sucesso
    danger: '#D32F2F', // Vermelho para erro/perigo
    warning: '#FFA000', // Laranja para avisos
    info: '#2196F3', // Azul para informações
    muted: '#F5F5F5', // Fundo secundário ou elementos desabilitados
    accent: '#FFB74D', // Destaque amarelado para interações
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  fonts: {
    main: 'Open Sans, sans-serif', // Fonte principal
    heading: 'Raleway, sans-serif', // Fonte para títulos
    code: 'monospace', // Fonte para código
  },
  fontSizes: {
    h1: '3rem', // 48px (3 * 16px)
    h2: '2rem',
    h3: '1.75rem',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1rem',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
  shadows: {
    small: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    large: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  },
  transitions: {
    default: 'all 0.3s ease-in-out',
  },
}

export default ParkAndCoStyles
