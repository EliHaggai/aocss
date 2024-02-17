'use client'
import React from 'react'
import AllTeacherSection from './AllTeacherSection'
import AllTeacherPagination from './AllTeacherPagination'
import { useAocssContext } from '@/context/AocssContext'

const TeacherMain = () => {
    const {totalTeamPages} = useAocssContext()
  return (
    <>
        <AllTeacherSection/>
        <AllTeacherPagination totalPage={totalTeamPages
        }/>
    </>
  )
}

export default TeacherMain