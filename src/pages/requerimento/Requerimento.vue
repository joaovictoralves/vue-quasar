<template>
  <div
    class="bg-primary"
  >

    <div class="row">
      <div class="col-12">
        <q-img src="../../assets/header.jpg" style="height: 400px">

          <div class="absolute-full flex flex-center overlayTextoHeader">
            <div class="row justify-center" style="width: 100vw">
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" align="center">
                <q-img src="../../assets/logo.svg" style="max-width: 162px"></q-img>
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

    <div class="row">
      <div class="col-12 q-pa-lg">
        <q-card>
          <q-card-section class="text-h5 q-ml-sm">
            Requerimento de Materiais para recuperação de Nascentes
          </q-card-section>

          <q-card-section class="bg-grey-3 text-primary q-pa-xs" style="height: 30px">
            <div class="text-subtitle1 text-weight-bold text-center text-accent">
              Dados da Propriedade Cadastrados no CAR
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </q-card-section>

          <q-card-section class="bg-grey-3 text-primary q-pa-xs" style="height: 30px">
            <div class="text-subtitle1 text-weight-bold text-center text-accent">
              Endereço da Propriedade
            </div>
          </q-card-section>

          <q-card-section>
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="CEP"
                  outlined
                  bg-color="#FBFEFF"
                  :rules="[ val => val && val.length > 0  || '']"
                  v-model="cep"
                ></q-input>
              </div>

              <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Estado"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="estado"
                ></q-input>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Cidade"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="cidade"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Bairro"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="bairro"
                ></q-input>
              </div>
              <div class="col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Logradouro"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="logradouro"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-sm-12 col-xs-12">
                <q-checkbox v-model="naoTemBairro"
                            label="Bairro ainda não cadastrado na Saneago"/>
              </div>
              <div class="col-md-6 col-sm-12 col-xs-12">
                <q-checkbox v-model="naoTemLogradouro"
                            label="Logradouro ainda não cadastrado na Saneago"/>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Nome do Bairro"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="bairro"
                ></q-input>
              </div>
              <div class="col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Nome do Logradouro"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="logradouro"
                ></q-input>
              </div>
            </div>
          </q-card-section>

          <q-card-section class="bg-grey-3 text-primary q-pa-xs" style="height: 30px">
            <div class="text-subtitle1 text-weight-bold text-center text-accent">
              Marcando as Nascentes
            </div>
          </q-card-section>

          <q-card-section>

          </q-card-section>

        </q-card>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Requerimento',

    data: () => ({
      naoTemBairro: false,
      naoTemLogradouro: false
    }),

    computed: {
      smallSizeScreen () {
        return this.$q.screen.name === 'sm' || this.$q.screen.name === 'xs'
      }

    }
  }
</script>

<style scoped>

  .overlayTextoHeader {
    background-color: rgba(51, 105, 30, 0.60);
  }

  .headerSize {
    height: 400px;
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
