<template>
  <div class="container-fluid">
    <section class="row">
      <!-- SECTION input -->
      <div class="col-3 bg-info">
        <form @submit.prevent="createGift()">
          <div class="d-flex flex-column">
            <label for="tag">Tag</label>
            <input v-model="editable.tag" type="text" name="tag" id="tag">
            <label for="url">url</label>
            <input v-model="editable.url" type="url" name="url" id="url">
            <button type="submit" class="btn btn-success mdi mdi-plus"></button>
          </div>
          </form>
          <section>
            <div v-for="giph in giphy" :key="giph.id" class="row justify-content-center align-items-center g-2">
              <div class="col">{{ giph.title }}</div>
              <img :src="giph.url" alt="gif">
            </div>
          </section>
      </div>
      <!-- SECTION gifts -->
      <div class="col-9">
        <section class="row">
          <div v-for="gift in gifts" :key="gift.id" class="col-3 bg-primary ">
            <GiftCard :giftProp="gift" />
            <!-- <div>
              <img :src="gift.url" :alt="gift.id" class="img-fluid">
              {{ gift.tag }}
            </div> -->
          </div>
        </section>
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted, ref } from "vue";
import Pop from "../utils/Pop.js";
import {giftService} from "../services/GiftService.js"
import { logger } from "../utils/Logger.js";
import { AppState } from '../AppState.js';
import { giphyService} from '../services/giphyService.js'
// import GiftCard from "../components/GiftCard.vue";

export default {
    setup() {

        const editable= ref({});

        async function getGifts() {
            try {
                await giftService.getGifts();
            }
            catch (error) {
                Pop.error(error);
            }
        }

        async function getFromGiphy(){
          try {
              await giphyService.getFromGiphy()
          } catch (error) {
            Pop.error(error)
          }
        }

        onMounted(() => {
            // logger.log("[Home Page Mounted]");
            getGifts();
            getFromGiphy();
        });
        return {
            editable,
            gifts: computed(() => AppState.gifts),
            giphy: computed(()=> AppState.giphy),

            async createGift(){
              try {
                const giftObject = editable.value
                // logger.log('[Gift Object]',giftObject)
                await giftService.createGift(giftObject)
              } catch (error) {
                Pop.error(error)
              }
            }
        };
    },
}
</script>


<style lang="scss" scoped>

</style>
