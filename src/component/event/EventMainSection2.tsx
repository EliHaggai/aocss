'use client'
import React from 'react'
import AllEventSection2 from './AllEventSection2'
import AllEventPagination from './AllEventPagination'
import { useAocssContext } from '@/context/AocssContext'

const EventMainSection2 = () => {
    const {totalEventPages2} = useAocssContext()
  return (
    <>
        <AllEventSection2/>
        <div className='tl-pagination-container-dark'>
           <AllEventPagination totalPage={totalEventPages2}/> 
        </div>
    </>
  )
}

export default EventMainSection2