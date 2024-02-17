'use client'
import { useAocssContext } from '@/context/AocssContext'
import React from 'react'
import AllBlogSection7 from './AllBlogSection7'
import AllBlogPagination from './AllBlogPagination'

const BlogMain7 = () => {
    const {totalBlogPages4} = useAocssContext()
  return (
    <>
        <AllBlogSection7/>
        <AllBlogPagination totalPage={totalBlogPages4}/>
    </>
  )
}

export default BlogMain7