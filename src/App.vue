<template>
  <div>
    <Table :reviewConfig="reviewConfig" />
  </div>
</template>

<script lang="ts">
  import { Table } from '@/components/index'
  import { defineComponent } from 'vue-demi'
  import type { ReviewConfigType } from '@/type'

  export default defineComponent({
    components: {
      Table
    },
    setup () {
      const reviewConfig: ReviewConfigType = {
        reviewApiUrl: '/api/review/list',
        reviewTableHead: [
          {
            label: '复核标题',
            key: 'reviewTitle'
          },
          {
            label: '提交人',
            key: 'publishUser'
          },
          {
            label: '发布时间',
            key: 'publishDate'
          }
        ],
        reviewTableConfig: [
          {
            type: 'string',
            code: 'reviewTitle'
          },
          {
            type: 'radio',
            code: 'publishUser',
            mapData: {
              0: '饺子',
              1: '包子',
              2: '面条'
            }
          },
          {
            type: 'radio',
            code: 'publishDate',
            mapData: {
              0: '否',
              1: '是'
            }
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
