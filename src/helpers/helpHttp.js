/* eslint-disable prettier/prettier */
export const helpHttp = () => {
  const customfetch = (endpoint, options) => {
    const defaultHeader = {
      accept: 'application/json',
    }

    const controller = new AbortController()
    options.signal = controller.signal

    options.method = options.method || 'GET'
    options.header = options.header ? { ...defaultHeader, ...options.headers } : defaultHeader

    options.body = JSON.stringify(options.body) || false
    if (!options.body) delete options.body

    setTimeout(() => controller.abort(), 30000)
    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({ err: true, status: res.status || '00', statusText: res.statusText }),
      )
      .catch((err) => err)
  }

  const get = (url, options = {}) => customfetch(url, options)

  const post = (url, options = {}) => {
    options.method = 'POST'
    return customfetch(url, options)
  }
  const put = (url, options) => {
    options.method = 'PUT'
    return customfetch(url, options)
  }
  const del = (url, options) => {
    options.method = 'DELETE'
    return customfetch(url, options)
  }

  return { get, post, put, del }
}
