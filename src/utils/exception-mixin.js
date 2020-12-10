export default {
  methods: {
    async handleException (error) {
      console.log(JSON.stringify(error))

      let msg = error && error.message || 'Ocorreu um erro inesperado. Tente novamente mais tarde.'

      this.$q.loading.hide()

      this.$q.dialog({
        color: 'red',
        html: true,
        title: `Erro ${error.code}`,
        message: `${msg} <hr/> <br/> ${JSON.stringify(error)}`,
        ok: {
          push: true
        },
      })

      // this.$q.notify({
      //   timeout: 8000,
      //   color: 'red-14',
      //   message: msg,
      //   icon: 'ion-alert',
      //   position: 'center',
      //   actions: [{
      //     label: 'Ok',
      //     color: 'white',
      //     handler: () => {
      //     }
      //   }],
      // })
    },
  }
}
