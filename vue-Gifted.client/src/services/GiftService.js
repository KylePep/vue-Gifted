import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class GiftService {
  constructor() {
    // logger.log('[giftService]')
  }
  async getGifts() {
    const res = await api.get('api/gifts')
    // logger.log(res.data)
    const gifts = res.data.map(giftpojo => new Gift(giftpojo))

    AppState.gifts = gifts
    // logger.log(AppState.gifts)
  }

  async openGift(giftId) {
    const foundGift = AppState.gifts.find(g => g.id == giftId)

    if (!foundGift) {
      throw new Error("INVALID ID")
    }

    const giftData = { opened: true }
    const res = await api.put(`api/gifts/${foundGift.id}`, giftData)
    let gifts = AppState.gifts
    let giftToOpen = gifts.findIndex(g => g.id == giftId)
    const updateGift = new Gift(res.data)
    AppState.gifts.splice(giftToOpen, 1, updateGift)
    // logger.log(res.data)
  }

  async createGift(giftObject) {
    const res = await api.post('api/gifts', giftObject)
    // logger.log(res.data)
    AppState.gifts.unshift(new Gift(res.data))
  }

}
export const giftService = new GiftService()