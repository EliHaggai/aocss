'use client'
import React from 'react'
import AllBlogSection6 from './AllBlogSection6'
import AllBlogPagination from './AllBlogPagination'
import { useAocssContext } from '@/context/AocssContext'

const BlogMain6 = () => {
    const {totalBlogPages3} = useAocssContext()
  return (
    <>
        <AllBlogSection6/>
        <AllBlogPagination totalPage={totalBlogPages3}/>
    </>
  )
}

export default BlogMain6