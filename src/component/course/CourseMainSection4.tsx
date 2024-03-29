'use client'
import { useAocssContext } from '@/context/AocssContext'
import React from 'react'
import AllCourseSection4 from './AllCourseSection4'
import CoursePaginationSection from './CoursePaginationSection'

const CourseMainSection4 = () => {
    const {totalCoursePages4} = useAocssContext()
  return (
    <>
        <AllCourseSection4/>
        <CoursePaginationSection style="tl-pagination pb-130" totalPage={totalCoursePages4}/>
    </>
  )
}

export default CourseMainSection4