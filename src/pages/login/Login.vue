<template>
  <div
    class="bg-primary" style="height: 100vh;"
  >
    <div class="row justify-center">
      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 q-pa-lg">
        <div class="q-pa-lg">
          <div class="row q-pb-lg" style="text-align: center">
            <div class="col-12 q-pb-xl">
              <q-img src="../../assets/logo.svg"
                     style="height: 132px; width: 162px"
              ></q-img>
            </div>
          </div>

          <div class="row justify-center q-pt-md q-pb-sm">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-12">
              <div class="row">
                <div class="col-12">
                  <q-input
                    label="Email"
                    outlined
                    bg-color="white"
                    :rules="[ val => val && val.length <12  || 'CPF inválido!']"
                    v-model="email"
                  ></q-input>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <q-input
                    label="Senha"
                    outlined
                    bg-color="white"
                    :type="'password'"
                    v-model="senha"
                  ></q-input>
                </div>
              </div>

              <div class="row q-pt-xl">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pb-md">
                  <q-btn outline rounded no-caps color="white"
                         label="Esqueci minha senha"/>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                     style="text-align: right"
                >
                  <q-btn
                    rounded
                    text-color="primary"
                    color="white"
                    to="/cadastro"
                  >
                    Acessar
                  </q-btn>
                </div>
              </div>

              <div class="row q-pt-xl">
                <div class="col-12" style="text-align: right">
                  <!--                <div class="col">-->
                  <q-btn flat color="white" no-caps>
                    Não possui acesso?
                    &nbsp;
                    <span class="text-weight-bold">
                      Cadastre-se aqui
                    </span>
                  </q-btn>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 bg-accent q-pa-xl" style="height: 100vh;">

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
    name: 'Login-dois.vue'
  }
</script>

<style scoped>

  .overlayTextoNascente {
    background-color: rgba(12, 101, 153, 0.70);
  }

</style>
