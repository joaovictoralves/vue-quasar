import { handleResponse } from 'src/utils/exception-message'

export async function doGet (url, param, headers) {
  try {
    let res = await doGetFullResponse(url, param, headers)
    let data = await res.json()

    return {
      response: res,
      data: data
    }
  } catch (e) {
    throw  e
  }
}

export async function doGetFullResponse (url, param, headers) {
  try {
    let endPoint = param ? `${url}?` + new URLSearchParams(param) : url

    let res = await fetch(endPoint, {
      method: 'GET',
      headers: headers
    })

    if (res.status < 200 || res.status > 226) {
      await handleResponse(res, url, 'GET')
    }

    return res
  } catch (e) {
    throw  e
  }
}

export async function doPost (url, body, headers) {
  try {
    let res = await doPostFullResponse(url, body, headers)
    let data = await res.json()

    return {
      response: res,
      data: data
    }
  } catch (e) {
    throw  e
  }
}

export async function doPostFullResponse (url, body, headers) {
  try {
    let res = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    })

    if (res.status < 200 || res.status > 226) {
      await handleResponse(res, url, 'POST')
    }

    return res
  } catch (e) {
    throw  e
  }
}

//TODO: adicionar urls de producao

export function getEndPointkeycloak () {
  return 'https://sso.saneago.com.br/auth/realms'
}

export function getAgenciaEnvironment () {
  if (process.env.DEV) {
    return '/agencia_homolog'
  } else if (process.env.PROD) {
    return '/agencia_homolog'
  }
}

export function getInternetEnvironment () {
  if (process.env.DEV) {
    return '/internet_homolog'
  } else if (process.env.PROD) {
    return '/internet_homolog'
  }
}
