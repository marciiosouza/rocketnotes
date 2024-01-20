import { Container, Links, Content } from "./styles"

import { Tag } from "../../components/Tag"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1> Introdução ao React </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet temporibus nulla perspiciatis, a voluptates natus doloribus eos explicabo iure! Atque iste tempora incidunt commodi omnis consectetur officia iusto repellendus!</p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="NodeJS" />
          </Section>

          <Button name="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
