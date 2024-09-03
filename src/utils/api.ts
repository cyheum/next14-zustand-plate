import axios from 'axios'

export const API = 'https://domain.com'

const AUTH_TOKEN = 'auth-token'

const instance = axios.create({
  baseURL: API,
  timeout: 80000,
})

export const GET = async (entry: string, payload?: { params?: any }) => {
  try {
    const data = await instance({
      method: 'GET',
      url: entry,
      params: payload?.params,
    })

    return data.data
  } catch (error: any) {
    const code = error.response.status
    if (code === 403 || code === 401) {
      alert('로그인 후 이용해 주세요')
      window.location.href = '/login'
    }
    throw error
  }
}

export const POST = async (entry: string, payload?: { bodyData?: any }) => {
  try {
    const data = await instance({
      url: entry,
      method: 'POST',
      data: payload?.bodyData,
    })
    return data.data
  } catch (error: any) {
    const code = error.response.status
    if (code === 403 || code === 401) {
      alert('로그인 후 이용해 주세요')
      window.location.href = '/login'
      localStorage.removeItem(AUTH_TOKEN)
    }
    throw error
  }
}

export const DELETE = async (
  entry: string,
  payload?: { params?: any; bodyData?: any }
) => {
  try {
    const res = await instance({
      url: entry,
      method: 'DELETE',
      params: payload?.params,
      data: payload?.bodyData,
    })
    return res
  } catch (error: any) {
    const code = error.response.status
    if (code === 403 || code === 401) {
      alert('로그인 후 이용해 주세요')
      window.location.href = '/login'
    }
    throw error
  }
}

export const PATCH = async (entry: string, payload?: { bodyData?: any }) => {
  try {
    const res = await instance({
      url: entry,
      method: 'PATCH',
      data: payload?.bodyData,
    })
    return res.data
  } catch (error: any) {
    const code = error.response.status
    if (code === 403 || code === 401) {
      alert('로그인 후 이용해 주세요')
      window.location.href = '/login'
    }
    throw error
  }
}
