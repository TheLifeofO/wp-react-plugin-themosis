import { createContext } from 'react'
import { CounterStore } from 'stores/CounterStore'
import { UserStore } from 'stores/UserStore'
import { LocationStore } from 'stores/LocationStore'
import { ProductStore } from 'stores/ProductStore'

export const storesContext = createContext({
  counterStore: new CounterStore(),
  locationStore: new LocationStore(),
  productStore: new ProductStore(),
  userStore: new UserStore(),
})
