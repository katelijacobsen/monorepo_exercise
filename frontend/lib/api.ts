import axios from 'axios'

// Shared Axios instance — reads base URL from .env.local
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
})

// The fetcher SWR calls with the URL key — returns response.data directly
const fetcher = <T>(url: string): Promise<T> =>
  api.get<T>(url).then((res) => res.data)

export default fetcher