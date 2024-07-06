import PropTypes from 'prop-types'
import { memo } from 'react'
import * as Icons from '../icons/Icons'

const SelectableButton = memo(function SelectableButton({
  name,
  id,
  iconName,
  isSelected,
  onClickHandler,
  overrideStyles,
}) {
  const defaultButtonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 8px',
    gap: '8px',
    width: '95px',
    minWidth: 'fit-content',
    background: '#023B78',
    borderRadius: '2px',
    cursor: 'pointer',
  }
  const overrideButtonStyle = {
    ...defaultButtonStyle,
    ...overrideStyles,
  }
  const selectedButtonStyle = {
    ...overrideButtonStyle,
    background: '#2188FF',
    color: '#FFFFFF',
  }

  return (
    <div
      style={isSelected ? selectedButtonStyle : overrideButtonStyle}
      onClick={() => {
        onClickHandler(id)
      }}
    >
      {Icons[iconName](isSelected ? '#FFFFFF' : undefined)}
      <span>{name}</span>
    </div>
  )
})

SelectableButton.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  iconName: PropTypes.string,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func,
  overrideStyles: PropTypes.object,
}

export { SelectableButton }
