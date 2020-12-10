export function isCPFValido (cpfParametro) {
  let cpf = cpfParametro.split('.').join('').replace('-', '')

  var numeros, digitos, soma, i, resultado, digitos_iguais
  digitos_iguais = 1
  if (cpf.length < 11) {
    return false
  }

  for (i = 0; i < cpf.length - 1; i++) {
    if (cpf.charAt(i) != cpf.charAt(i + 1)) {
      digitos_iguais = 0
      break
    }
  }
  if (!digitos_iguais) {
    numeros = cpf.substring(0, 9)
    digitos = cpf.substring(9)
    soma = 0
    for (i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (resultado != digitos.charAt(0)) {
      return false
    }
    numeros = cpf.substring(0, 10)
    soma = 0
    for (i = 11; i > 1; i--) {
      soma += numeros.charAt(11 - i) * i
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (resultado != digitos.charAt(1)) {
      return false
    }
    return true
  } else {
    return false
  }
}

export function isEmailValido (email) {
  const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/

  return emailPattern.test(email)
}

export function validarSenha (senha) {
  if (!senha) {
    return 'Necessário informar uma senha!'
  }

  if (senha.length < 8) {
    return 'Senha deve possuir 8 caracteres (letras e números) com no mínimo uma letra maiúscula!'
  }

  const regexpLetraMaiuscula = /[A-Z]/

  if (!regexpLetraMaiuscula.test(senha)) {
    return 'Senha deve possuir no mínimo uma letra maiúscula!'
  }

  if (senha.toUpperCase() === senha) {
    return 'Senha deve possuir diferenciação entre letras maiúsculas e minúsculas!'
  }

  return true
}

export function isDataValida (date) {
  try {
    let dateParts = date.split('/')
    let y = dateParts[2]
    let m = dateParts[1]
    let d = dateParts[0]
    m = parseInt(m) - 1
    let dateParser = new Date(y, m, d)
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateParser)
    let mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(dateParser)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dateParser)
    if (mo < 10) {
      mo = '0' + mo
    }
    let test = `${da}/${mo}/${ye}`

    if (date === test) {
      return true
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

export function converterStringEmDate (str) {
  if (str) {
    if (str instanceof Date) {
      return str
    } else {
      var day = null
      var month = null
      var year = null

      if (str.length == 7) {
        day = '01'
      }
      var dataArray = str.split('/').reverse()

      if (dataArray.length == 1) {
        dataArray = str.split('-').reverse()
      }
      if (!day) {
        day = dataArray[2]
        month = dataArray[1] - 1
        year = dataArray[0]
      } else {
        month = dataArray[1] - 1
        year = dataArray[0]
      }

      return new Date(year, month, day)
    }
  }
}

export async function getSHA (str) {
  let rotate_left = function (n, s) {
    let t4 = (n << s) | (n >>> (32 - s))
    return t4
  }

  let cvt_hex = function (val) {
    let str = ''
    let i
    let v

    for (i = 7; i >= 0; i--) {
      v = (val >>> (i * 4)) & 0x0f
      str += v.toString(16)
    }
    return str
  }

  let blockstart
  let i, j
  let W = new Array(80)
  let H0 = 0x67452301
  let H1 = 0xEFCDAB89
  let H2 = 0x98BADCFE
  let H3 = 0x10325476
  let H4 = 0xC3D2E1F0
  let A, B, C, D, E
  let temp

  str = unescape(encodeURIComponent(str)) // ENCODE para UTF8
  let str_len = str.length

  let word_array = []
  for (i = 0; i < str_len - 3; i += 4) {
    j = str.charCodeAt(i) << 24 | str.charCodeAt(i + 1) << 16 | str.charCodeAt(i + 2) << 8 | str.charCodeAt(i + 3)
    word_array.push(j)
  }

  switch (str_len % 4) {
    case 0:
      i = 0x080000000
      break
    case 1:
      i = str.charCodeAt(str_len - 1) << 24 | 0x0800000
      break
    case 2:
      i = str.charCodeAt(str_len - 2) << 24 | str.charCodeAt(str_len - 1) << 16 | 0x08000
      break
    case 3:
      i = str.charCodeAt(str_len - 3) << 24 | str.charCodeAt(str_len - 2) << 16 | str.charCodeAt(str_len - 1) <<
        8 | 0x80
      break
  }

  word_array.push(i)

  while ((word_array.length % 16) != 14) {
    word_array.push(0)
  }

  word_array.push(str_len >>> 29)
  word_array.push((str_len << 3) & 0x0ffffffff)

  for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
    for (i = 0; i < 16; i++) {
      W[i] = word_array[blockstart + i]
    }
    for (i = 16; i <= 79; i++) {
      W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1)
    }

    A = H0
    B = H1
    C = H2
    D = H3
    E = H4

    for (i = 0; i <= 19; i++) {
      temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff
      E = D
      D = C
      C = rotate_left(B, 30)
      B = A
      A = temp
    }

    for (i = 20; i <= 39; i++) {
      temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff
      E = D
      D = C
      C = rotate_left(B, 30)
      B = A
      A = temp
    }

    for (i = 40; i <= 59; i++) {
      temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff
      E = D
      D = C
      C = rotate_left(B, 30)
      B = A
      A = temp
    }

    for (i = 60; i <= 79; i++) {
      temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff
      E = D
      D = C
      C = rotate_left(B, 30)
      B = A
      A = temp
    }

    H0 = (H0 + A) & 0x0ffffffff
    H1 = (H1 + B) & 0x0ffffffff
    H2 = (H2 + C) & 0x0ffffffff
    H3 = (H3 + D) & 0x0ffffffff
    H4 = (H4 + E) & 0x0ffffffff
  }

  temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4)
  return temp.toLowerCase()
}

export function protegerEmail (email) {
  if (!email) {
    return ''
  }

  let parteEmailOfuscar = email.substring(3, email.lastIndexOf('@'))

  let qtdAsteriscos = ''

  for (let i = 0; i < parteEmailOfuscar.length; i++) {
    qtdAsteriscos = qtdAsteriscos.concat('*')
  }

  return email.replace(parteEmailOfuscar, qtdAsteriscos)
}

export function dataURLtoFile (dataurl, filename) {
  let arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}

export function dataURLtoBlob (dataurl) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new Blob([u8arr], { type: 'image/jpeg' })
}

export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = error => reject(error)
})
