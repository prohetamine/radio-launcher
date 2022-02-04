import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import useStore from './../../store'
import langs from './../../langs'
import { useAuth, useCheckAuth } from './../../auth-provider.js'

import SectionTitle from './../atoms/section-title'
import Navigation from './../molecules/navigation'
import NotifyItem from './../molecules/notify-item'
import StreamItem from './../molecules/stream-item'
import ShadowBackground from './../atoms/shadow-background'
import MainNavigation from './../molecules/main-navigation'

const Body = styled.div`
  width: 100%;
  height: 100%;
  min-width: 610px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Overflow = styled.div`
  width: 100%;
  height: calc(100% - 104px);
  box-sizing: border-box;
  padding: 0px 25px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`

const Stream = observer(() => {
  useCheckAuth()

  const store = useStore()
  const { socket, request } = useAuth()

  const ref = useRef()

  useEffect(() => {
    if (socket && request) {
      socket.on('onAllStream', data => {
        Promise.all(
          data
            .map(async track => {
              const { data } = await request.get(`/info?id=${track.id}`)

              if (data) {
                delete track.name

                return ({
                  artist: null,
                  date: null,
                  album: null,
                  title: null,
                  filename: data ? data.name : null,
                  isAlbumImage: data ? data.isAlbumImage : false,
                  ...data.common,
                  ...track,
                })
              }

              return false
            })
        ).then(stream => {
          store.stream = stream.filter(f => f)
        })
      })

      socket.emit('allStream')
      return () => socket.off('onAllStream')
    }
  }, [socket, request])

  useEffect(() => {
    const node = ref.current
    if (node) {
      node.scrollTo(0, node.scrollHeight)
    }
  }, [store.stream.length, ref.current])

  return (
    <Body>
      <Overflow
        style={{
          height: store.isEther
                    ? 'calc(100% - 160px)'
                    : 'calc(100% - 104px)'
        }}
        ref={ref}
      >
        <SectionTitle theme={store.settings.theme}>{langs[store.settings.lang].ether}</SectionTitle>
        <Navigation />
        <NotifyItem />
        {
          store.stream.map((track, key) => (
            <StreamItem
              isImage={store.settings.pictureAlbum}
              theme={store.settings.theme}
              key={`${track.streamId}-${track.id}-${key}-${track.type}`}
              track={track}
              count={store.tracks.length}
              onDelete={
                () =>
                  request.post(`/pop?id=${track.streamId}`)
              }
            />
          ))
        }
        <ShadowBackground
          style={{
            bottom: store.isEther
                      ? '160px'
                      : '104px'
          }}
        />
      </Overflow>
      <MainNavigation />
    </Body>
  )
})

export default Stream
