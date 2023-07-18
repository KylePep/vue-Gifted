<template>
    <div @click="openGift(giftProp.id)">
      <img :src="giftProp.url" alt="Bad Image" class="img-fluid">
      {{ giftProp.tag }}
    </div>
</template>


<script>
import { Gift } from "../models/Gift.js";
import { giftService } from "../services/GiftService.js";
import Pop from "../utils/Pop.js";

export default {
  props:{
    giftProp: {type: Gift, required: true}
  },
  setup(){

    return {
      async openGift(giftId) {
        try {
          await giftService.openGift(giftId)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>