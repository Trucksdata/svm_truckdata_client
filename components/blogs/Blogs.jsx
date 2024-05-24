import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import formattedDate from '../../utils/formattedDate'

function Blogs({blogList}) {
  return (
    <>
      {blogList?.map((item,i) => (
        <div
          className="col-lg-3 col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={i * 100}
        >
          <Link
            href={`/blog/${item.id}`}
            className="blogCard -type-1 d-block "
          >
            <div className="blogCard__image">
              <div className="ratio ratio-1:1 rounded-4 rounded-8">
                <Image
                  width={400}
                  height={400}
                  className="img-ratio js-lazy"
                  src={item?.thumbnail?.[0]?.thumbnail}
                  alt="image"
                />
              </div>
            </div>
            <div className="mt-20">
              <h4 className="text-dark-1 text-18 fw-500">{item.heading}</h4>
              <div className="text-light-1 text-15 lh-14 mt-5">{formattedDate(item.updated_at)}</div>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default Blogs