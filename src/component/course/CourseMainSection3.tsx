'use client'
import React from 'react'
import AllCourseSection3 from './AllCourseSection3'
import CoursePaginationSection from './CoursePaginationSection'
import { useAocssContext } from '@/context/AocssContext'

const CourseMainSection3 = () => {
    const {totalCoursePages3} = useAocssContext()
  return (
    <>
        <AllCourseSection3/>
        <CoursePaginationSection totalPage={totalCoursePages3} style="tl-pagination tl-pagination-3 pb-130"/>
    </>
  )
}

export default CourseMainSection3