'use client'
import { useAocssContext } from '@/context/AocssContext'
import React from 'react'
import AllBlogSection from './AllBlogSection'
import AllBlogPagination from './AllBlogPagination'

const BlogMain1 = () => {
    const {totalBlogPages} = useAocssContext()
  return (
    <>
        <AllBlogSection/>
        <AllBlogPagination totalPage={totalBlogPages}/>
    </>
  )
}

export default BlogMain1