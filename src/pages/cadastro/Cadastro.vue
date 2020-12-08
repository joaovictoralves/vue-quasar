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

    <q-separator color="white"/>

    <div class="row">
      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pl-lg q-pr-lg">
        <q-card style="margin-top: -30px">
          <q-card-section class="text-h5 q-ml-sm">
            Cadastro para acesso ao Portal
          </q-card-section>

          <q-card-section>
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="CPF"
                  outlined
                  bg-color="#FBFEFF"
                  :rules="[ val => val && val.length <12  || 'CPF inválido!']"
                  v-model="cpf"
                ></q-input>
              </div>

              <div class="col-lg-9 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Nome"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="nome"
                ></q-input>
              </div>
            </div>

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
                  label="Rua/Avenida"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="logradouro"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-3 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Número"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="numero"
                ></q-input>
              </div>
              <div class="col-md-3 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Quadra"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="quadra"
                ></q-input>
              </div>
              <div class="col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Lote"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="lote"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Complemento"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="complemento"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Telefone"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="telefone"
                ></q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Celular"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="celular"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="E-mail"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="email"
                ></q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Confirmar E-mail"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="confirmaEmail"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Senha"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="senha"
                ></q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                <q-input
                  label="Confirmar Senha"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="confrimaSenha"
                ></q-input>
              </div>
            </div>

            <div class="row q-pt-md">
              <div class="col-6 q-pa-sm" style="text-align: right">
                <q-btn
                  size="md"
                  no-caps
                  color="primary"
                >
                  Confirmar
                </q-btn>

              </div>
              <div class="col-6 q-pa-sm" style="text-align: left">
                <q-btn
                  size="md"
                  no-caps
                  color="red"
                >
                  Cancelar
                </q-btn>
              </div>
            </div>

          </q-card-section>
        </q-card>
      </div>

      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 bg-accent q-pa-xl">

        <div class="row q-pb-lg justify-center">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-8 col-xs-12 bg-white">
            <q-img src="../../assets/nascente.jpg" style="width: 100%;"></q-img>

            <q-card class="q-ma-md text-white" style="margin-top: -20px; background-color: #19AA75">
              <q-card-section style="width: 100%; text-align: center" class="text-h5">
                Conheça o formato de <br/>NASCENTE PROTEGIDA
              </q-card-section>

              <q-card-section class="text-white" style="text-align: justify">
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                it to make a type specimen book. It has survived not only five centuries, but also the leap into
              </q-card-section>
            </q-card>
          </div>
        </div>

        <div class="row justify-center">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-8 col-xs-12">
            <q-btn
              size="1.2rem"
              class="full-width text-italic text-accent text-weight-bold q-mb-lg"
              style="background-color: #1FCB42"
            >
              SAIBA MAIS SOBRE O PROJETO
            </q-btn>

            <q-btn
              size="1.2rem"
              class="full-width text-italic text-weight-bold q-mb-lg"
              style="background-color: #E99D45"
            >
              <span style="color: #074F7B">DÚVIDAS?</span> &nbsp;
              <span style="color: #FFFFFF">FALE CONOSCO</span>
            </q-btn>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cadastro',

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
