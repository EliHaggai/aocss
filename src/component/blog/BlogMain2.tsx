'use client'
import React from 'react'
import AllBlogSection2 from './AllBlogSection2'
import AllBlogPagination from './AllBlogPagination'
import { useAocssContext } from '@/context/AocssContext'

const BlogMain2 = () => {
    const {totalBlogPages2} = useAocssContext()
  return (
    <>
        <AllBlogSection2/>
        <AllBlogPagination totalPage={totalBlogPages2}/>
    </>
  )
}

export default BlogMain2