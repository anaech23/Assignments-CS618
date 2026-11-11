import { Post } from '../db/models/post.js'
import { User } from '../db/models/user.js'

export async function createPost(userId, { title, contents, tags }) {
  const post = new Post({
    title,
    author: userId,
    contents,
    tags,
  })
  const savedPost = await post.save()
  return await savedPost.populate('author', 'username')
}

async function listPosts(
  query = {},
  { sortBy = 'createdAt', sortOrder = 'descending' } = {},
) {
  return await Post.find(query)
    .populate('author', 'username')
    .sort({ [sortBy]: sortOrder })
}

export async function listAllPosts(options) {
  return await listPosts({}, options)
}

export async function listPostsByAuthor(authorUsername, options) {
  const user = await User.findOne({ username: authorUsername })
  if (!user) return []
  return await listPosts({ author: user._id }, options)
}

export async function listPostsByTag(tags, options) {
  return await listPosts({ tags }, options)
}

export async function getPostById(userId, postId) {
  return await Post.findOne({ _id: postId, author: userId })
}

export async function updatePost(userId, postId, updateData) {
  const updated = await Post.findOneAndUpdate(
    { _id: postId, author: userId },
    { $set: updateData },
    { new: true, runValidators: true },
  )
  return updated ? await updated.populate('author', 'username') : null
}

export async function deletePost(userId, postId) {
  return await Post.deleteOne({ _id: postId, author: userId })
}
