/* eslint-disable @next/next/no-img-element */

import React from 'react'
import loadingStyles from '../styles/loading.module.scss'

const PageInit = () => {
  return (
    <>
      <div className={loadingStyles.PageInit}>
        <div>
          <img src={`${process.env.NODE_ENV=='development'?"":"portfolio"}/puppy/01.gif`} alt="moving image" />
        </div>
      </div>
    </>
  )
}

export default PageInit
