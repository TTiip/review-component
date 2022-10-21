<template>
  <div>
    <div>{{ reviewTableHead }}</div>
    <table>
      <thead>
        <th class="w-[200px] text-center" v-for="item of Object.keys(reviewTableHead)" :key="item">{{ reviewTableHead[item]?.label }}</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) of tableList" :key="index">
          <td class="w-[200px] text-center" v-for="it of Object.keys(reviewTableHead)" :key="it">{{ formatItemData(item, it) }}</td>
          <td><button @click="testClick(item)">click</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, PropType } from 'vue-demi'
  import axios from 'axios'
  import { checkType, coverData } from '@/utils'
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
      const {
        reviewApiUrl,
        reviewTableHead,
        reviewTableConfig
      } = props.reviewConfig!

      function testClick(item: any) {
        console.log(item.modifyContent, 'item.modifyContent')
        if (checkType(item.modifyContent, 'string')) {
          console.log(JSON.parse(item.modifyContent))
        }
      }

      function formatItemData (data: any, key: string) {
        console.log(data, key)
        return (
          reviewTableConfig ?
            reviewTableConfig[key].format ?
              reviewTableConfig[key].format!(data) :
              'aa'
            : data[key]
        )
      }

      axios({
        url: reviewApiUrl,
        method: 'GET'
      }).then(res => {
        const data = coverData(res)
        tableList.value = data.reviewList
        console.log(data, 'data')
      })
      return {
        tableList,
        reviewTableHead,
        reviewTableConfig,
        formatItemData,
        testClick
      }
    }
  })
</script>
<style lang="postcss" scoped></style>
