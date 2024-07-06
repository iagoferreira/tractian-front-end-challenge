import PropTypes from 'prop-types'
import { SelectableButton } from '../../selectable-button/SelectableButton'
import { useCompanieStore } from '../../../stores/CompanieStore'
import { memo } from 'react'
import { useShallow } from 'zustand/react/shallow'

const Selector = memo(function Selector({ values }) {
  const [selectedId, setSelectedId] = useCompanieStore(
    useShallow((state) => [state.selectedId, state.setSelectedId])
  )

  const selectorStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  }

  console.log('b')

  return (
    <div style={selectorStyle}>
      {values.map((value) => (
        <SelectableButton
          name={value.name}
          id={value.id}
          iconName={'CompanieLogoIcon'}
          isSelected={selectedId === value.id ? true : false}
          onClickHandler={setSelectedId}
          key={value.id}
        />
      ))}
    </div>
  )
})

Selector.propTypes = {
  values: PropTypes.array,
}

export { Selector }
