import { Container } from "./styles";

import { Button } from "../../components/Button"

export function Details() {
  return (
    <Container>
      <h1>Hello World</h1>
      <span>Marcio Souza</span>

      <Button name="Login" loading/>
      <Button name="Cadastrar" />
      <Button name="Sair" />
    </Container>
  )
}
