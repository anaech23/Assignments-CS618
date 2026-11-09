import PropTypes from 'prop-types'

export function Post({ title, contents, author }) {
  const authorName =
    typeof author === 'object' && author !== null ? author.username : author

  return (
    <article>
      <h3>{title}</h3>
      <div>{contents}</div>
      {authorName && (
        <em>
          <br />
          Written by <strong>{authorName}</strong>
        </em>
      )}
    </article>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      username: PropTypes.string,
    }),
  ]),
}
