'use client'
import React from 'react'
import AllTeacherSection4 from './AllTeacherSection4'
import AllTeacherPagination from './AllTeacherPagination'
import { useAocssContext } from '@/context/AocssContext'

const TeacherMain4 = () => {
    const {totalTeamPages3} = useAocssContext()
  return (
    <>
        <AllTeacherSection4/>
        <AllTeacherPagination totalPage={totalTeamPages3}/>
    </>
  )
}

export default TeacherMain4