<template>
  <q-item
    clickable
    @click="goPage(route)"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon color="primary" :name="icon"/>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-grey-10 text-weight-medium text-subtitle2">
        {{ title }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
  export default {
    name: 'LinkDrawer',
    props: {
      title: {
        type: String,
      },

      icon: {
        type: String,
        default: ''
      },

      route: {
        type: String,
        default: '/'
      }
    },
    methods: {
      goPage (route) {
        this.$router.push({ path: route })
      }
    }
  }
</script>
