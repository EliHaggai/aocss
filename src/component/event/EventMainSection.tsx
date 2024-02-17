'use client'
import React from 'react'
import AllEventSection from './AllEventSection'
import AllEventPagination from './AllEventPagination'
import { useAocssContext } from '@/context/AocssContext'

const EventMainSection = () => {
    const {totalEventPages} = useAocssContext()
  return (
    <>
        <AllEventSection/>
        <AllEventPagination totalPage={totalEventPages}/>
    </>
  )
}

export default EventMainSection