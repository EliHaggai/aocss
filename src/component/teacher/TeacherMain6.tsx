'use client'
import React from 'react'
import AllTeacherSection6 from './AllTeacherSection6'
import AllTeacherPagination from './AllTeacherPagination'
import { useAocssContext } from '@/context/AocssContext'

const TeacherMain6 = () => {
    const {totalBlogPages3} = useAocssContext()
  return (
    <>
        <AllTeacherSection6/>
        <AllTeacherPagination totalPage={totalBlogPages3}/>
    </>
  )
}

export default TeacherMain6