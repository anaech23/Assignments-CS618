const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ||
  'https://blog-backend-134263622082.us-east5.run.app'

export const getPosts = async (queryParams) => {
  const res = await fetch(
    `${BACKEND_URL}/posts?` + new URLSearchParams(queryParams),
  )
  return await res.json()
}

export const createPost = async (token, post) => {
  const res = await fetch(`${BACKEND_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(post),
  })
  return await res.json()
}
