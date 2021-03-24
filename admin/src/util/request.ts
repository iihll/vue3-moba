import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'

const service = axios.create({
  baseURL: '/admin/api'
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    if (err.response.data.message) {
      ElMessage.error(err.response.data.message)
      if (err.response.status === 401) {
        router.push('/login')
      }
    }
    return Promise.reject(err)
  }
)

export default service
