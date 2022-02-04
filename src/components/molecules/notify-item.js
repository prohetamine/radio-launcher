import React, { useState } from 'react'
import styled from 'styled-components'
import useStore from './../../store'
import langs from './../../langs'
import { observer } from 'mobx-react'

import miniDeleteBackgroundLight from './../../../assets/svg/mini-delete-backgroud-light.svg'
import miniDeleteBackgroundDark from './../../../assets/svg/mini-delete-backgroud-dark.svg'

const MainBody = styled.div`
  user-select: none;
  overflow: hidden;
  width: 560px;
  min-width: 560px;
  height: 174px;
  min-height: 174px;
  box-shadow: ${props => props.theme === 'dark' ? '0px 2px 8px rgba(40, 40, 40, 0.15), 0px 0px 2px rgb(68, 68, 68, 0.30)' : '0px 2px 8px rgba(111, 111, 111, 0.15), 0px 0px 2px rgb(34, 34, 34, 0.30)'};
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 14px;
`

const Body = styled.div`
  width: 525px;
  min-width: 525px;
  height: 100%;
  background: ${props => props.theme === 'dark' ? '#020202' : '#fff'};
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: ${props => props.theme === 'dark' ? '#BDBDBD' : '#424242'};
  box-sizing: border-box;
  padding: 10px;
`

const OtherBody = styled.div`
  width: 100%;
  height: 100%;
`

const EmptyBody = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme === 'dark' ? '#020202' : '#fff'};
`

const DeleteBody = styled.div`
  width: 35px;
  height: 33px;
  background-image: url(${props => props.theme === 'dark' ? miniDeleteBackgroundDark : miniDeleteBackgroundLight});
  position: relative;
`

const Delete = styled.div`
  top: 6px;
  right: 8px;
  width: 17px;
  height: 17px;
  position: absolute;
  cursor: pointer;
`

const NotifyItem = observer(() => {
  const { settings } = useStore()
  const [hideNotify, setHideNotify] = useState(false)

  return hideNotify ? null : (
    <MainBody theme={settings.theme}>
      <Body theme={settings.theme}>
        {langs[settings.lang].notify[0]}
        <br />
        <br />
        <b>1.</b> {langs[settings.lang].notify[1]}
        <br />
        <br />
        <b>2.</b> {langs[settings.lang].notify[2]}
        <br />
        <br />
        <b>3.</b> {langs[settings.lang].notify[3]}
      </Body>
      <OtherBody>
        <DeleteBody theme={settings.theme}>
          <Delete onClick={() => setHideNotify(true)} />
        </DeleteBody>
        <EmptyBody theme={settings.theme} />
      </OtherBody>
    </MainBody>
  )
})

export default NotifyItem
