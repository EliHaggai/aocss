'use client';
import React from 'react'
import AllCourseSection2 from './AllCourseSection2';
import CoursePaginationSection from './CoursePaginationSection';
import { useAocssContext } from '@/context/AocssContext';

const CourseMainSection2 = () => {
    const {totalCoursePages2} = useAocssContext()
  return (
    <>
        <AllCourseSection2/>
        <CoursePaginationSection totalPage={totalCoursePages2} style="tl-pagination tl-pagination-2 pb-120"/>
    </>
  )
}

export default CourseMainSection2