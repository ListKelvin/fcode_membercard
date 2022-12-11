import React from 'react'

// import Wrapper from '../../../../components/Wrapper'
import { CheckMarkButton } from '../../../../components/Button/FixedButtonSuccess'
import { WarningButton } from '../../../../components/Button/FixedButtonWarning'
import Flexbox from '../../../../components/Flexbox'
// import Modal from '../../../../components/Modal'
import AttendanceModalAlert from '../../../../components/Modal/AttendanceModalAlert'

import {
  StyledStatusWarning,
  StyledCardTitle,
  StyledModalTitle,
  SubHeading,
  StyledStatusTitle,
} from '../style'

// import { SubHeading } from './../style'

const AlertAttendance = (props) => {
  const { user, show, onClose, status } = props
  console.log(status)
  return (
    <AttendanceModalAlert show={show} onClose={onClose}>
      {user && (
        <Flexbox justifyContent="center" flexDirection="column" alignItems="center">
          <StyledCardTitle> welcome</StyledCardTitle>
          <StyledModalTitle>{user.first_name + ' ' + user.last_name}</StyledModalTitle>
          <SubHeading>{user.member_id}</SubHeading>
          {status === 'present' ? <CheckMarkButton /> : <WarningButton />}
          {status === 'present' ? (
            <StyledStatusTitle>Present!</StyledStatusTitle>
          ) : (
            <StyledStatusWarning>Present but late!</StyledStatusWarning>
          )}
        </Flexbox>
      )}
    </AttendanceModalAlert>
  )
  //   title={user.first_name}
  //   subTitle={user.member_id}
  //   eventId = { eventId }
}

export default AlertAttendance