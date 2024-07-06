import { SelectableButton } from '../../selectable-button/SelectableButton'
import { useState } from 'react'

export const Filters = () => {
  // TODO: wrap it in memo if zustand is not used, to prevent unnecessary re-renders
  const [placeholderState1, setPlaceholderState1] = useState(false)
  const [placeholderState2, setPlaceholderState2] = useState(false)

  const filtersStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    width: '281px', // TODO: remove need for explicit width style
  }
  const overrideButtonStyle = {
    background: '#FFFFFF',
    color: '#77818C',
    fontWeight: '600',
    border: '1.5px solid #D8DfE6',
  }

  return (
    <div style={filtersStyle}>
      <SelectableButton
        name={'Sensor de Energia'}
        // id={}
        iconName={'ThunderboltIcon'}
        isSelected={placeholderState1}
        onClickHandler={() => {
          setPlaceholderState1(!placeholderState1)
        }}
        overrideStyles={overrideButtonStyle}
      />
      <SelectableButton
        name={'Crítico'}
        // id={}
        iconName={'ExclamationCircleIcon'}
        isSelected={placeholderState2}
        onClickHandler={() => {
          setPlaceholderState2(!placeholderState2)
        }}
        overrideStyles={overrideButtonStyle}
      />
    </div>
  )
}
