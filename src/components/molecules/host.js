import React from 'react'
import miniHostIconLight from './../../../assets/svg/mini-host-light.svg'
import miniHostIconDark from './../../../assets/svg/mini-host-dark.svg'

import Input from './../atoms/input'

const Login = (props) => (
  <Input
    type='host'
    {...props}
    icons={{
      light: miniHostIconLight,
      dark: miniHostIconDark
    }}
  />
)

export default Login
