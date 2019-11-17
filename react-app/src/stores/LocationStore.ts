import { observable, action, configure } from 'mobx'

// Constants
import { ENDPOINT } from '../constants'

// Enforcing mutations from actions only
configure({ enforceActions: 'observed' })

export class LocationStore {
  @observable locations!: Array<object>
  @observable isLoading: boolean = false

  @action.bound async getLocations() {
    this.locations = []
    this.isLoading = true

    // Fetch from api logic here
  }
}
