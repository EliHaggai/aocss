'use client'
import React from 'react'
import AllEventSection3 from './AllEventSection3'
import AllEventPagination from './AllEventPagination'
import { useAocssContext } from '@/context/AocssContext'

const EventMainSection3 = () => {
    const {totalEventPages3} = useAocssContext()
  return (
    <>
        <AllEventSection3/>
        <AllEventPagination totalPage={totalEventPages3}/>
    </>
  )
}

export default EventMainSection3