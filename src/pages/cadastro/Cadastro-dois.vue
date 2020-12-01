<template>
  <div
    class="white"
  >
    <div class="row q-pt-none">
      <div class="col-12 q-pa-none">
        <q-img src="../../assets/header.jpg" style="height: 400px">

          <div class="absolute-full flex flex-center overlayTextoHeader">
            <div class="" style="width: calc(100vw - 300px)">
              <div class="row">
                <div class="col-4" align="center" justify="center">
                  <img src="../../assets/logo.svg" style="height: 132px; width: 162px"/>
                </div>
                <div class="col-8" align="end">
                      <span class="text-h4">
                        Projeto de Recuperação das Nascentes
                      </span>
                  <br/>
                  <span class="text-h6">
                        Bacias do Rio Meia Ponte e Ribeirão Piancó
                      </span>
                </div>
              </div>
            </div>
          </div>
        </q-img>
      </div>
    </div>

    <div class="row q-pr-lg">
      <div class="col-8 q-pa-xl">
        <q-card flat style=" background-color: transparent">
          <q-card-section class="text-h5 q-ml-sm">
            Cadastro para acesso ao Portal
          </q-card-section>
          <q-card-section>
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-12 q-pa-sm">
                <q-input
                  label="CPF"
                  outlined
                  bg-color="#FBFEFF"
                  :rules="[ val => val && val.length <12  || 'CPF inválido!']"
                  v-model="cpf"
                ></q-input>
              </div>

              <div class="col-lg-9 col-md-6 col-sm-12 q-pa-sm">
                <q-input
                  label="Nome"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="nome"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-12 q-pa-sm">
                <q-input
                  label="CEP"
                  outlined
                  bg-color="#FBFEFF"
                  :rules="[ val => val && val.length > 0  || '']"
                  v-model="cep"
                ></q-input>
              </div>

              <div class="col-lg-3 col-md-3 col-sm-12 q-pa-sm">
                <q-input
                  label="Estado"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="estado"
                ></q-input>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 q-pa-sm">
                <q-input
                  label="Cidade"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="cidade"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-sm-12 q-pa-sm">
                <q-input
                  label="Bairro"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="bairro"
                ></q-input>
              </div>
              <div class="col-md-6 col-sm-12 q-pa-sm">
                <q-input
                  label="Rua/Avenida"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="logradouro"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-3 col-sm-12 q-pa-sm">
                <q-input
                  label="Número"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="numero"
                ></q-input>
              </div>
              <div class="col-md-3 col-sm-12 q-pa-sm">
                <q-input
                  label="Quadra"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="quadra"
                ></q-input>
              </div>
              <div class="col-md-6 col-sm-12 q-pa-sm">
                <q-input
                  label="Lote"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="lote"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 col-sm-12 q-pa-sm">
                <q-input
                  label="Complemento"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="complemento"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 q-pa-sm">
                <q-input
                  label="Telefone"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="telefone"
                ></q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 q-pa-sm">
                <q-input
                  label="Celular"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="celular"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 q-pa-sm">
                <q-input
                  label="E-mail"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="email"
                ></q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 q-pa-sm">
                <q-input
                  label="Confirmar E-mail"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="confirmaEmail"
                ></q-input>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 q-pa-sm">
                <q-input
                  label="Senha"
                  outlined
                  bg-color="#FBFEFF"
                  v-model="senha"
                ></q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 q-pa-sm">
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
                  no-caps
                  color="primary"
                >
                  Confirmar
                </q-btn>

              </div>
              <div class="col-6 q-pa-sm" style="text-align: left">
                <q-btn
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

      <div class="col-4" align="center">
        <q-img src="../../assets/nascente.jpg" style="width: 100%; margin-top: -50px"></q-img>

        <q-img src="../../assets/header.jpg" style="height: 550px">
          <div class="absolute-full flex flex-center overlayTextoNascente">

            <div class="row">
              <div class="col-12">
                <q-card flat class="q-mb-xl mdi-format-vertical-align-top" style="background-color: transparent">
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
  layout: 'externo',
  name: 'Cadastro-dois'
}
</script>

<style scoped>
.overlayTextoHeader {
  background-color: rgba(51, 105, 30, 0.60);
}

.overlayTextoNascente {
  background-color: rgba(12, 101, 153, 0.70);
}

</style>
