import { action, computed, configure, observable } from 'mobx'

// Enforcing mutations from actions only
configure({ enforceActions: 'observed' })

export class UserStore {
  @observable userToken!: string

  @action.bound setUserToken(user: string) {
    this.userToken = user
  }

  @computed get getUserToken() {
    return this.userToken
  }
}
