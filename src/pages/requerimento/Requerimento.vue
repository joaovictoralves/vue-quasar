<template>
  <div
    class="bg-primary"
  >

    <div class="row">
      <div class="col-12">
        <q-img src="../../assets/header.jpg" class="headerSize">

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
                ></q-input>
              </div>

              <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Estado"
                  outlined
                  bg-color="#FBFEFF"
                ></q-input>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Cidade"
                  outlined
                  bg-color="#FBFEFF"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Bairro"
                  outlined
                  bg-color="#FBFEFF"
                ></q-input>
              </div>
              <div class="col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Logradouro"
                  outlined
                  bg-color="#FBFEFF"
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
                ></q-input>
              </div>
              <div class="col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Nome do Logradouro"
                  outlined
                  bg-color="#FBFEFF"
                ></q-input>
              </div>
            </div>
          </q-card-section>

          <q-card-section class="bg-grey-3 text-primary q-pa-xs" style="height: 30px">
            <div class="text-subtitle1 text-weight-bold text-center text-accent">
              Nascentes da Propriedade
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row">
              <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                <template>
                  <div id="map" style="height: 600px; width: 100%"></div>
                </template>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="row q-pl-md q-pr-md" v-for="(item, index) in nascentes">
                  <q-separator color="black" v-if="index === 0"/>

                  <div class="col-12 q-pa-sm">
                    <div class="row q-pb-sm">
                      <div class="col-12 text-subtitle1 text-weight-bold">
                        Coordenadas da Nascente {{ item.id}}
                      </div>
                    </div>

                    <div class="row q-pb-sm">
                      <div class="col-6 text-primary text-weight-bold">
                        Latitude:
                      </div>
                      <div class="col-6 text-right text-weight-medium">
                        {{ item.lat}}
                      </div>
                    </div>

                    <div class="row q-pb-sm">
                      <div class="col-6 text-primary text-weight-bold">
                        Longitude:
                      </div>
                      <div class="col-6 text-right text-weight-medium">
                        {{ item.lng}}
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-6">
                      </div>
                      <div class="col-6 text-right">
                        <q-btn v-if="item.status !=='added'"
                               @click="adicionarNascente(item)"
                               rounded size="md" no-caps color="primary">
                          Adicionar
                        </q-btn>

                        <q-btn v-if="item.status ==='added'"
                               @click="removerNascente(item)"
                               rounded size="md" no-caps color="red">
                          Remover
                        </q-btn>
                      </div>
                    </div>
                  </div>

                  <q-separator color="black"/>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Requerimento',

    mounted () {
      this.initMap()
      this.carregarMarcadores()
    },

    data: () => ({
      naoTemBairro: false,
      naoTemLogradouro: false,

      iconeNascente: 'https://cdn1.iconfinder.com/data/icons/prettyoffice9/48/triangle.png',
      // iconeNascente: 'https://cdn0.iconfinder.com/data/icons/energy-free/32/Energy_Energy_Oil_Water_Drop_Fuel-48.png',
      // iconeNascente: require('src/assets/pin-blue-48.png'),
      map: null,
      markers: [],

      mapCenter: {
        lat: -16.6741051,
        lng: -49.2384353,
      },

      nascentes: [
        {
          id: 1,
          lat: -16.67352326583447,
          lng: -49.23972948244527,
          status: 'removed',
        },
        {
          id: 2,
          lat: -16.675725294274457,
          lng: -49.23896325281083,
          status: 'removed',
        },
        {
          id: 3,
          lat: -16.673511088828143,
          lng: -49.23793497288788,
          status: 'removed',
        },
        {
          id: 4,
          lat: -16.67484719095644,
          lng: -49.23688354703943,
          status: 'removed',
        },
      ]

    }),

    computed: {
      smallSizeScreen () {
        return this.$q.screen.name === 'sm' || this.$q.screen.name === 'xs'
      },

    },

    methods: {
      initMap () {
        let mapOptions = {
          // roadmap, satellite, hybrid, terrain
          mapTypeId: 'satellite',

          // mapTypeControl: true,
          // mapTypeControlOptions: {
          //   style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
          //   mapTypeIds: ['satellite', 'hybrid'],
          // },

          center: this.mapCenter,
          zoom: 17,
          // maxZoom: 20,
          // minZoom: 3,
          // streetViewControl: true,
          // fullscreenControl: true,
          // zoomControl: true,
        }

        this.map = new google.maps.Map(document.getElementById('map'), mapOptions)
      },

      setMarker (point, label) {
        const marker = new google.maps.Marker({
          position: point,
          map: this.map,
          icon: null,
          label: {
            text: label,
            color: '#FFFFFF',
            fontWeight: 'bold'
          }
        })

        this.markers.push(marker)
      },

      async carregarMarcadores () {
        await this.nascentes.forEach(item => {
          this.setMarker({
            lat: item.lat,
            lng: item.lng,
          }, item.id.toString())
        })
      },

      async removerNascente (item) {
        item.status = 'removed'

        await this.markers.forEach(val => {
          console.log(val)

          if (val && val.label && val.label.text == item.id) {
            val.setIcon(null)
            // val.setMap(null)
          }
        })
      },

      async adicionarNascente (item) {
        item.status = 'added'

        await this.markers.forEach(val => {
          if (val && val.label && val.label.text == item.id) {
            val.setIcon(this.iconeNascente)
            // val.setMap(this.map)
          }
        })
      },

    },

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
