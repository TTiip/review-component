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
        reviewTableHead: {
          reviewTitle: {
            label: '复核标题'
          },
          publishUser: {
            label: '提交人'
          },
          publishDate: {
            label: '发布时间'
          }
        },
        reviewTableConfig: {
          publishUser: {
            type: 'radio',
            mapData: {
              0: '饺子',
              1: '包子',
              2: '面条'
            }
          },
          reviewTitle: {
            type: 'string'
          },
          publishDate: {
            type: 'radio',
            mapData: {
              0: '否',
              1: '是'
            }
          }
        }
      }

      return {
        reviewConfig
      }
    }
  })
</script>

<style scoped></style>
