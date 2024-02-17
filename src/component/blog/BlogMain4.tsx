'use client'
import React from 'react'
import AllBlogSection4 from './AllBlogSection4'
import AllBlogPagination from './AllBlogPagination'
import { useAocssContext } from '@/context/AocssContext'

const BlogMain4 = () => {
    const {totalBlogPages} = useAocssContext()
  return (
    <>
        <AllBlogSection4/>
        <AllBlogPagination totalPage={totalBlogPages}/>
    </>
  )
}

export default BlogMain4