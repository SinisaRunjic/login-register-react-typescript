import React from 'react'
import PageLayout from 'components/shared/PageLayout'
import HomeDisplay from './HomeDisplay'


const HomeDescription:React.FC = () => {

  return (
    <PageLayout headerText={'dashboard'}>
      <HomeDisplay />
    </PageLayout>
  )
}

export default HomeDescription
