const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ||
  'https://blog-backend-134263622082.us-east5.run.app/api/v1'

export const signup = async ({ username, password }) => {
  const res = await fetch(`${BACKEND_URL}/user/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })

  if (!res.ok) throw new Error('Failed to sign up')

  return await res.json()
}

export const login = async ({ username, password }) => {
  const res = await fetch(`${BACKEND_URL}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })

  if (!res.ok) throw new Error('Failed to login')

  return await res.json()
}

export const getUserInfo = async (id) => {
  const res = await fetch(`${BACKEND_URL}/users/${id}`)

  if (!res.ok) throw new Error('Failed to retrieve user')

  return await res.json()
}
