import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { IPageLayout } from './interface'

const PageLayout: React.FC<IPageLayout> = ({ headerText, children }) => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h2" color='secondary' gutterBottom>
          {headerText}
        </Typography>
      </Grid>
      <Grid item>
        {children}
      </Grid>
    </Grid>

  )
}

export default PageLayout
