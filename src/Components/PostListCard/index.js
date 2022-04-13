import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { HeartIcon } from '@heroicons/react/solid'

const PostListCard = ({ id, image, likes, owner, publishDate, tags, text }) => {

  return (
    <div className={styles.card} id={id}>
      <Link to={`/users/${owner.id}`}>
        <div className={styles.cardHeader}>
          <div>
            <img src={owner.picture} alt="User Profile" />
          </div>
          <div>
            <div className={styles.cardTitle}>
              <span className={styles.userFullName}>{owner.firstName} {owner.lastName}</span>
              <span className={styles.userId}>@{owner.id}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.cardBody}>
        <img src={image} loading="lazy" alt={text} />
        <div className={styles.cardTags}>
          {tags.map((tag, index) => {
            return (<span className={styles.cardTag} key={`${tag}-${index}`}>{tag}</span>)
          })}
        </div>
        <p className={styles.cardText}>{text}</p>
      </div>
      <div className={styles.cardFooter}>
        <div>
          <div className={styles.like}>
            <HeartIcon className={styles.icon} />
            <span className={styles.likeCount}>{likes} Likes</span>
          </div>
        </div>
        <span className={styles.date}>
          {new Date(Date.parse(publishDate)).toGMTString().split(' ').slice(1, 5).join(' ')}
        </span>
      </div>
    </div>
  )
}

export default PostListCard