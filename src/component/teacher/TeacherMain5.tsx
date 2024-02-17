'use client'
import React from 'react'
import AllTeacherSection5 from './AllTeacherSection5'
import AllTeacherPagination from './AllTeacherPagination'
import { useAocssContext } from '@/context/AocssContext'

const TeacherMain5 = () => {
    const {totalTeamPages2} = useAocssContext()
  return (
    <>
        <AllTeacherSection5/>
        <AllTeacherPagination totalPage={totalTeamPages2}/>
    </>
  )
}

export default TeacherMain5