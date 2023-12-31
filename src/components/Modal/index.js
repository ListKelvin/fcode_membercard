import { useEffect } from 'react'

import { StyledEventIndicator } from '../../container/home/style'
import { CloseButton } from '../Button'
import Divider from '../Divider'
import Wrapper from './../Wrapper'
import {
  StyledModal,
  StyledModalBody,
  StyledModalContent,
  StyledModalHeader,
  StyledModalTitle,
} from './style'

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  })

  if (!props.show) {
    return null
  }

  return (
    <StyledModal onClick={props.onClose}>
      <Wrapper>
        <StyledModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton size={1} onClick={props.onClose} position="top-right" positionOffset={2} />
          <StyledModalHeader justify="left" gap={4}>
            {props.indicator !== undefined && (
              <StyledEventIndicator
                size={12}
                indicatorColor={props.indicator.indicatorColor}
                style={{ borderRadius: '2px' }}
              />
            )}
            <StyledModalTitle>{props.title}</StyledModalTitle>
          </StyledModalHeader>
          <Divider margin={5} />
          <StyledModalBody>{props.children}</StyledModalBody>
        </StyledModalContent>
      </Wrapper>
    </StyledModal>
  )
}

export default Modal
