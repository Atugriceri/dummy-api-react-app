import React from 'react'
import styles from './styles.module.css'

const UserDetailCard = ({
  id,
  firstName,
  lastName,
  userImg,
  dateOfBirth,
  email,
  gender,
  phone,
  registerDate,
  updatedDate,
  location,
}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.userDetailCard}>
        <div className={styles.detailCardBg}></div>
        <div className={styles.detailCardHeader}>
          <div>
            <img src={userImg} alt="Profile" />
          </div>
          <div className={styles.borderLeft}>
            <p className={styles.userTitle}>
              {firstName} {lastName}
            </p>
            <p>
              Date Of Birth:
              <span>
                {" "}
                {new Date(Date.parse(dateOfBirth))
                  .toGMTString()
                  .split(" ")
                  .slice(1, 4)
                  .join(" ")}
              </span>
            </p>
            <p>
              Gender: <span>{gender}</span>
            </p>
            <p>
              Register Date:
              <span>
                {" "}
                {new Date(Date.parse(registerDate))
                  .toGMTString()
                  .split(" ")
                  .slice(1, 5)
                  .join(" ")}
              </span>
            </p>
            <p>
              Updated Date:
              <span>
                {" "}
                {new Date(Date.parse(updatedDate))
                  .toGMTString()
                  .split(" ")
                  .slice(1, 5)
                  .join(" ")}
              </span>
            </p>
            <p>
              Email: <span>{email}</span>
            </p>
            <p>
              Phone: <span>{phone}</span>
            </p>
          </div>
        </div>

        <div className={styles.address}>
          <p>Address:</p>
          <span className={styles.addressText}>{location?.street}</span>
          <span className={styles.addressText}>
            {location?.city}, {location?.state}
          </span>
          <span className={styles.addressText}>{location?.country}</span>
        </div>
        <div className="map">
          <iframe
            title={id}
            className={styles.googleMap}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.local.REACT_APP_GOOGLE_API_KEY}&q=${location?.street}`}
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default UserDetailCard
