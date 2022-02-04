import { createContext, useContext } from 'react'
import { observable, autorun, toJS } from 'mobx'

let defaultStore = null

try {
  defaultStore = JSON.parse(localStorage.store)
} catch (e) {
  defaultStore = {
    auth: {
      login: '',
      password: '',
      token: '',
      host: ''
    },
    settings: {
      theme: 'light',
      lang: 'en',
      pictureAlbum: true,
      brightness: 1,
      backgroundImage: '',
      echoCancellation: false
    },
    tracks: [],
    stream: [],
    favorites: []
  }
}

const store = observable(defaultStore)

autorun(() => {
  localStorage.store = JSON.stringify(toJS(store))
})

const context = createContext(store)

const useStore = () => useContext(context)

export default useStore
