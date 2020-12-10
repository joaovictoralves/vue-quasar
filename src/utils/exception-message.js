export async function handleResponse (response, url, tipoRequisicao) {
  if (url) {
    // if (url.includes(endPointConsultarUsuario()) && response.status === 403 && tipoRequisicao === 'GET') {
    //   throw {
    //     message: 'Cliente não encontrado e/ou cadastro não confirmado.',
    //     code: response.status
    //   }
    // }
    //
    // if (url.includes(endPointCadastroInicial()) && response.status === 403 && tipoRequisicao === 'POST') {
    //   throw {
    //     message: 'CPF já consta em nossa base de dados.',
    //     code: response.status
    //   }
    // }
  }

  if (response.status === 400) {
    throw {
      message: 'Requisição inválida.',
      code: response.status
    }
  }

  if (response.status === 401) {
    throw {
      message: 'Não autenticado.',
      code: response.status
    }
  }

  if (response.status === 403) {
    throw {
      message: 'Não autorizado.',
      code: response.status
    }
  }

  if (response.status === 404) {
    throw {
      message: 'Registro não encontrado.',
      code: response.status
    }
  }

  if (response.status === 422) {
    throw {
      message: 'Erro de validação.',
      code: response.status
    }
  }

  if (response.status === 500) {
    throw {
      message: 'Ocorreu um erro inesperado no servidor.',
      code: response.status
    }
  }

  throw {
    message: 'Ocorreu um erro inesperado na requisição. Tente novamente mais tarde.',
    code: response.status
  }
}
