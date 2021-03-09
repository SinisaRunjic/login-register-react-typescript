import { Grid, Switch } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';

const SwitchLanguage = () => {

  const { t, i18n } = useTranslation('translation');


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.checked? i18n.changeLanguage('rs'): i18n.changeLanguage('en')
  };
  return (
    <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>{t('english')}</Grid>
          <Grid item>
            <Switch onChange={handleChange} />
          </Grid>
          <Grid item>{t('serbian')}</Grid>
        </Grid>
  )
}

export default SwitchLanguage
