<template>
  <div class="row">
    <div class="col-12">
      <q-img src="../assets/header.jpg" class="headerSize">

        <div class="absolute-full flex flex-center overlayTextoHeader">
          <div class="row justify-center" style="width: 100vw">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" align="center">
              <q-img src="../assets/logo.svg" style="max-width: 162px"></q-img>
            </div>

            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pt-lg q-pr-md" align="end">
                <span v-bind:class="{fontTitleSmallScreen: smallSizeScreen, fontTitleBiggerScreen : !smallSizeScreen}">
                  Projeto de Recuperação das Nascentes
                </span>
              <br/>
              <span
                v-bind:class="{fontSubtitleSmallScreen: smallSizeScreen, fontSubtitleBiggerScreen : !smallSizeScreen}">
                  Bacias do Rio Meia Ponte e Ribeirão Piancó
                </span>
            </div>
          </div>
        </div>

      </q-img>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderSaneago',
    props: {},
    created () {
    },
    data () {
      return {}
    },
    computed: {
      smallSizeScreen () {
        return this.$q.screen.name === 'sm' || this.$q.screen.name === 'xs'
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .overlayTextoHeader {
    background-color: rgba(51, 105, 30, 0.60);
  }

  .headerSize {
    height: 350px;
  }

  .fontTitleBiggerScreen {
    font-size: 2.6rem;
    font-weight: bold;
  }

  .fontTitleSmallScreen {
    font-size: 1.6rem;
    font-weight: bold;
    color: #e1f5fe;
  }

  .fontSubtitleBiggerScreen {
    font-size: 1.5rem;
    font-style: italic;
  }

  .fontSubtitleSmallScreen {
    font-size: 1.1rem;
    font-style: italic;
    color: #e1f5fe;
  }
</style>
