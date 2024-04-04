import React from 'react'
import SideNavBar from './_components/SideNavBar'

function layout({children}) {
  return (
    <div>
        <div className=' h-full w-64 flex-col fixed inset-y-0 z-50'>
          <SideNavBar/>
        </div>
        <div className='ml-64'>
          {children}
        </div>
    </div>
  )
}

export default layout