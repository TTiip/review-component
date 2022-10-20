<template>
  <!-- <div>{{ tableList }}</div> -->
  <ul class="flex">
    <li v-for="item of review_table_head" :key="item.key" :style="{ 'width': `${item.width}px` }">{{ item.label }}</li>
  </ul>
</template>
<script lang="ts">
  import { defineComponent, ref, PropType } from 'vue-demi'
  import axios from 'axios'
  import { coverData } from '@/utils'
  import type { ReviewConfigType } from '@/type'

  export default defineComponent({
    name: 'Table',
    props: {
      reviewConfig: {
        type: Object as PropType<ReviewConfigType>,
        requied: true
      }
    },
    setup (props) {
      const tableList = ref([])
      const { review_api_url, review_table_head } = props.reviewConfig!

      axios({
        url: review_api_url,
        method: 'GET'
      }).then(res => {
        const data = coverData(res)
        tableList.value = data.reviewList[0]
        console.log(data, 'data')
      })
      return {
        tableList,
        review_table_head
      }
    }
  })
</script>
<style lang="postcss" scoped></style>
