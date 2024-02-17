'use client'
import React from 'react'
import AllCourseSection from './AllCourseSection'
import CoursePaginationSection from './CoursePaginationSection'
import { useAocssContext } from '@/context/AocssContext'

const CourseMainSection = () => {
    const {totalCoursePages} = useAocssContext()
  return (
    <>
        <AllCourseSection/>
        <CoursePaginationSection totalPage={totalCoursePages} style="tl-pagination pb-130 tl-pagination-1"/>
    </>
  )
}

export default CourseMainSection