import { action, configure, observable } from 'mobx'

// Enforcing mutations from actions only
configure({ enforceActions: 'observed' })

export class ProductStore {
  @observable data: Array<object> = []
  @observable isLoading: boolean = false
  @observable state: string = 'pending' // "pending" / "done" / "error"

  @action.bound async getStockOverview() {
    this.data = []
    this.isLoading = true
    this.state = 'pending'

    // Fetch from api logic here
  }
}
