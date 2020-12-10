<template>
  <!--  <q-layout view="hHh lpR fFf">-->
  <!--  <q-layout view="lHh lpR fFf">-->
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left"/>
        <q-toolbar-title>
          <img class="vertical-middle q-ml-sm" src="../assets/logo-nome.svg" width="111" height="42"/>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left"
              side="left" bordered
    >
      <LinkDrawer
        v-for="rota in rotas"
        :key="rota.title"
        v-bind="rota"
      />
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
  import LinkDrawer from 'components/LinkDrawer'

  export default {
    components: { LinkDrawer },
    data () {
      return {
        left: false,
        rotas: [
          {
            title: 'Página Inicial',
            icon: 'home',
            route: '/pages/home',
          },
          {
            title: 'Dados Pessoais',
            icon: 'fas fa-barcode',
            route: '/pages/dados-pessoais',
          },
          {
            title: 'Requerimento',
            icon: 'description',
            route: '/pages/requerimento',
          },
          {
            title: 'Acompanhamento',
            icon: 'search',
            route: '/pages/acompanhamento',
          },
        ],
      }
    },
  }
</script>
