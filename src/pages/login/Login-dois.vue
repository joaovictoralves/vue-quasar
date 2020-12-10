<template>
  <div
    style="height: 100vh; background-color: #e1f5fe"
  >
    <div class="row" style="margin-left: 5%">
      <div class="col-8" style="padding: 12%">
        <div class="row q-pb-lg" align="center">
          <div class="col-12 q-pb-lg">
            <q-img src="../../assets/logo_azul.svg"
                   style="height: 132px; width: 162px"
            ></q-img>
          </div>
        </div>

        <div class="row justify-center q-pt-md q-pb-sm">
          <div class="col-8">
            <q-input
              label="Email"
              outlined
              bg-color="white"
              :rules="[ val => val && val.length <12  || 'CPF inválido!']"
              v-model="email"
            ></q-input>
          </div>
        </div>

        <div class="row justify-center">
          <div class="col-8">
            <q-input
              label="Senha"
              outlined
              bg-color="white"
              :type="'password'"
              v-model="senha"
            ></q-input>
          </div>
        </div>

        <div class="row q-pt-xl justify-center">
          <div class="col-2"></div>
          <div class="col-4">
            <q-btn outline rounded no-caps color="primary" label="Esqueci minha senha"/>
          </div>

          <div class="col-4" style="text-align: right">
            <q-btn
              rounded
              color="primary"
              to="/cadastro-dois"
            >
              Acessar
            </q-btn>
          </div>

          <div class="col-2"></div>
        </div>

        <div class="row q-pt-xl justify-center">
          <div class="col-8" style="text-align: right">
            <q-btn flat color="primary" no-caps>
              Não possui acesso?
              &nbsp;
              <span class="text-weight-bold">
                Cadastre-se aqui
              </span>
            </q-btn>
          </div>
        </div>
      </div>

      <div class="col-4" align="center">
        <q-img src="../../assets/nascente.jpg" style="height: 315px; width: 448px"></q-img>

        <q-img src="../../assets/header.jpg" style="height: calc(100vh - 315px); width: 448px">
          <div class="absolute-full flex flex-center overlayTextoNascente">

            <div class="row">
              <div class="col-12">
                <q-card flat class="q-mb-xl" style="background-color: transparent">
                  <q-card-section class="justify-center text-h5">
                    Conheça o formato de <br/>NASCENTE PROTEGIDA
                  </q-card-section>
                  <q-card-section class="text-subtitle1 text-justify">
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into
                  </q-card-section>
                </q-card>

                <q-btn
                  size="lg"
                  class="full-width text-italic text-accent text-weight-bold q-mb-lg"
                  style="background-color: #1FCB42"
                >
                  SAIBA MAIS SOBRE O PROJETO
                </q-btn>

                <q-btn
                  size="lg"
                  class="full-width text-italic text-weight-bold"
                  style="background-color: #E99D45"
                >
                  <span style="color: #074F7B">DÚVIDAS?</span> &nbsp; FALE CONOSCO
                </q-btn>
              </div>
            </div>
          </div>
        </q-img>
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
