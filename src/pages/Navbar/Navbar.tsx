import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import useStyles from './styles'

export default function SearchAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#21094E' }} position="sticky">
        <Toolbar>
          <p className={classes.logo}>
            <GitHubIcon style={{ fontSize: '2rem' }} />
          </p>
        </Toolbar>
      </AppBar>
    </div>
  )
}
