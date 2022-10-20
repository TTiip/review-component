<template>
  <div>
    <Table :reviewConfig="reviewConfig" />
  </div>
</template>

<script lang="ts">
  import { Table } from '@/components/index'
  import { defineComponent } from 'vue-demi'

  export default defineComponent({
    components: {
      Table
    },
    setup () {
      const reviewConfig = {
        review_api_url: '/api/review/list',
        review_table_head: [
          {
            label: '复核标题',
            key: 'reviewTitle',
            width: 200
          },
          {
            label: '提交人',
            key: 'publishUser',
            width: 200
          },
          {
            label: '发布时间',
            key: 'publishDate',
            width: 200
          }
        ]
      }

      return {
        reviewConfig
      }
    }
  })
</script>

<style scoped></style>
