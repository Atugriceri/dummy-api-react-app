import axios from 'axios'

const BASE_URL = "https://dummyapi.io/data/v1/"

const APP_ID = "625404954bbe5f90f80e2cf8"

const ENDPOINTS = {
  fetchUserList: "user",
  fetchUserById: "user/",
  fetchPostList: "post",
}

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {"app-id": APP_ID}
})

export const fetchPosts = async (page) => {
  const { data } = await instance.get(
    `${ENDPOINTS.fetchPostList}?page=${page}&limit=10`
  )
  return data
}

export const fetchUsers = async (page) => {
  const { data } = await instance.get(
    `${ENDPOINTS.fetchUserList}?page=${page}&limit=20`,
  )
  return data
}

export const fetchUserById = async (userId) => {
  const { data } = await instance.get(
    `${ENDPOINTS.fetchUserById}${userId}`,
  )
  return data
}

