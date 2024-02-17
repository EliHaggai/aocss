'use client'
import React from 'react'
import AllBlogSection3 from './AllBlogSection3'
import AllBlogPagination from './AllBlogPagination'
import { useAocssContext } from '@/context/AocssContext'

const BlogMain3 = () => {
    const {totalBlogPages3} = useAocssContext()
  return (
    <>
        <AllBlogSection3/>
        <AllBlogPagination totalPage={totalBlogPages3}/>
    </>
  )
}

export default BlogMain3