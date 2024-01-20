import PropTypes from 'prop-types';

import { Container } from "./styles"
import { Tag } from "../Tag"

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag =>
              <Tag key={tag.name} title={tag.name} />
             )
          }
        </footer>
      }
    </Container>
  )
}

Note.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  })
};

