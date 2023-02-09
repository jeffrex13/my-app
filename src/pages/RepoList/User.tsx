import useStyles from './styles'
import { useCont } from '../../contexts'
import PeopleIcon from '@material-ui/icons/People'

const UserInfo = () => {
  const classes = useStyles()
  const { userData } = useCont()

  return (
    <>
      {userData.length !== 0 ? (
        <div className={classes.userInfo}>
          <div className={classes.avatarHolder}>
            <a>
              <img
                width="200"
                height="200"
                src={userData.data.avatar_url}
                className={classes.avatar}
              />
            </a>
          </div>
          <div className={classes.info}>
            <h2
              style={{
                paddingBottom: '0.5rem',
                borderBottom: '1px solid #00000052',
              }}
            >
              {userData.data.name}
            </h2>
            <p style={{ paddingTop: '5px' }}>{userData.data.login}</p>
            <p style={{ paddingTop: '15px' }}>{userData.data.bio}</p>
            <p
              style={{
                paddingTop: '5px',
                display: 'flex',
                alignItems: 'center',
                fontSize: '13px',
              }}
            >
              <PeopleIcon style={{ paddingRight: '10px' }} />
              {userData.data.followers} follower · {userData.data.following}{' '}
              following . {userData.data.public_repos} repositories
            </p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default UserInfo
