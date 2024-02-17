'use client'
import React from 'react'
import AllTeacherSection2 from './AllTeacherSection2'
import AllTeacherPagination from './AllTeacherPagination'
import { useAocssContext } from '@/context/AocssContext'

const TeacherMain2 = () => {
    const {totalTeamPages} = useAocssContext()
  return (
    <>
        <AllTeacherSection2/>
        <AllTeacherPagination totalPage={totalTeamPages}/>
    </>
  )
}

export default TeacherMain2