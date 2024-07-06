import { Filters } from './filters/Filters'
import { Labels } from './labels/Labels'

const Content = () => {
  const contentStyle = {
    backgroundColor: '#FFFFFF',
    margin: '12px',
    border: '1px solid #D8DFE6',
    borderRadius: '4px',
    height: '92vh',
    padding: '16px',
  }
  const labelsAndFiltersStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  }

  return (
    <div style={contentStyle}>
      <div style={labelsAndFiltersStyle}>
        <Labels />
        <Filters />
      </div>
    </div>
  )
}

export { Content }
