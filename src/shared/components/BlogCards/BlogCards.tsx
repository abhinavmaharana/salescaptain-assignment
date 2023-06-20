import React from 'react'

interface Props {
    blogImg: string;
    blogTitle:  string;
    blogDescription: string;
    styles: React.CSSProperties;
    className: string;
}

const BlogCards: React.FC<Props> = ({
    blogImg,
    blogTitle,
    blogDescription,
    styles,
    className
}) => {
  return (
    <div className={className} style={styles || {}}>
        <div>
            <img className='rounded-xl' src={blogImg} alt='' />
        </div>
        <div className='space-y-4'>
            <h1 className='text-2xl font-bold hover:text-secondary'>{blogTitle}</h1>
            <p className='text-xl text-gray-500'>{blogDescription}</p>
        </div>
    </div>
  )
}

export default BlogCards