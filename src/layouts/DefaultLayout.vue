<template>
  <!--  <q-layout view="hHh lpR fFf">-->
  <q-layout view="lHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left"/>
        <q-toolbar-title>
          <img class="vertical-middle" src="../assets/logo-nome.svg" width="111" height="42"/>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
  export default {
    data () {
      return {
        left: false
      }
    }
  }
</script>
