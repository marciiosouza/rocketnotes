import { createGlobalStyled } from 'styled-components'

export default createGlobalStyled`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
`;