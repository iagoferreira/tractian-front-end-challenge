import { memo } from 'react'
import PropTypes from 'prop-types'

const Row = memo(function Row({ name }) {
  return <div>{name}</div>
})

Row.propTypes = {
  name: PropTypes.string,
}

export { Row }
