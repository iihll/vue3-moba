import request from '@/util/request'

const url = '/categories'

export function postCategory(data: object, id: string) {
  return request({
    url,
    method: 'POST',
    data
  })
}

export function putCategory(data: object, id: string) {
  return request({
    url: url + `/${id}`,
    method: 'PUT',
    data
  })
}

export function getCategory(id: string) {
  return request({
    url: url + `/${id}`,
    method: 'GET'
  })
}

export function getCategoryParents() {
  return request({
    url,
    method: 'GET'
  })
}