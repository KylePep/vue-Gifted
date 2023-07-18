import { AppState } from "../AppState.js"
import { Giphy } from "../models/Giphy.js"
import { logger } from "../utils/Logger.js"
import { gifApi } from "./AxiosService.js"

class GiphyService {
  async getFromGiphy() {
    const res = await gifApi.get('/trending')
    logger.log('[giphy Gifs]', res.data.data)
    const giphy = res.data.data.map(giphyPojo => new Giphy(giphyPojo))
    AppState.giphy = giphy
    logger.log('[APPSTATE GIPHY]', AppState.giphy)
  }
}
export const giphyService = new GiphyService()