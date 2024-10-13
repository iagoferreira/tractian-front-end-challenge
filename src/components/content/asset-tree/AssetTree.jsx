import PropTypes from 'prop-types'
import { Row } from './row/Row'

export const AssetTree = ({ data }) => {
  return (
    <div style={{ color: '#000000' }}>
      <input type="text" placeholder="search..." />
      {data.map((row, index) => {
        return <Row name={row.name} key={index} />
      })}
    </div>
  )
}

AssetTree.propTypes = {
  data: PropTypes.arrayOf(Object),
}
