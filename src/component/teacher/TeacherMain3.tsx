'use client'
import React from 'react'
import AllTeacherSection3 from './AllTeacherSection3'
import AllTeacherPagination from './AllTeacherPagination'
import { useAocssContext } from '@/context/AocssContext'

const TeacherMain3 = () => {
    const {totalTeamPages2} = useAocssContext()
  return (
    <>
        <AllTeacherSection3/>
        <AllTeacherPagination totalPage={totalTeamPages2}/>
    </>
  )
}

export default TeacherMain3