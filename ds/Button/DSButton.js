import React from 'react'
import { DSIcon } from 'components/basic/Icon'
import aggregatedClasses from 'utilities/className/aggregatedClasses'
import {
  BUTTON_TYPE,
  BUTTON_SIZE,
} from './DSButtonTypes'

const blockName = 'button'

const Button = aggregatedClasses('button')(blockName, null, ({ iconOnly }) => ({ 'icon-only': iconOnly }))

const DSButton = ({
  id,
  innerRef,
  className = '',
  disabled = false,
  style = {},
  buttonType = BUTTON_TYPE.PRIMARY,
  fluidWidth = false,
  size = BUTTON_SIZE.M,
  labelText,
  onBlur = () => null,
  onClick = () => null,
  onFocus = () => null,
  onMouseEnter = () => null,
  onMouseLeave = () => null,
  tabIndex = 0,
  // TODO: allow custom icon component or just DSIcon ?
  icon = null,
  leftIcon = null,
}) => {
  return (
    <Button
      className={className}
      classProps={{
        id,
        disabled,
        buttonType,
        size,
        fluidWidth,
        iconOnly: !labelText && (icon || leftIcon),
      }}
      disabled={disabled}
      innerRef={innerRef}
      onBlur={e => onBlur(e, id)}
      onClick={e => onClick(e, id)}
      onFocus={e => onFocus(e, id)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      tabIndex={tabIndex}
      type='button'
    >
      {leftIcon && <DSIcon icon={leftIcon} size={size} />}
      {labelText && (
      <span>
        {labelText}
      </span>
      )}
      {icon && <DSIcon icon={icon} size={size} />}
    </Button>
  )
}

export {
  BUTTON_TYPE,
  BUTTON_SIZE,
}
export default DSButton
