<template>
<div>
    <image-container/>
</div>
<div>
<contact-info />
</div>
</template>
  <script>

import { ContactInfo } from "@/components/contact-information/ContactInfo.vue";
import {ImageContainer} from "@/components/profile/image-container/ImageContainer.vue"
export default {
  components: { ContactInfo, ImageContainer }
}
</script>

<style>

</style>