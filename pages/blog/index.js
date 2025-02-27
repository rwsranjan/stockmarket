import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { shimmer, toBase64 } from '@/lib/imageLoader';
import Image from 'next/image';
import { format } from 'date-fns';


export default function Blog() {

  const router = useRouter();
  const imgurl = process.env.public_url;

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  const [blogdata, setBlogdata] = useState([]);


  useEffect(() => {


    FetchBlogData();
  }, []);

  const FetchBlogData = async () => {
    const response = await fetch('/api/blog');
    const res = await response.json();

    if (res) {
      setBlogdata(res.blogs_response)
      //   console.log(res.blogs_response);
    } else {
      alert('Something went wrong')
    }

  }


  return (
    <>
      <>


        <section
          className="page-title pagetitle2 centred"
          style={{
            backgroundImage: "url(assets/images/myimages/blogban5.avif)",

          }}
        >
          <div className="auto-container">
            <div className="content-box clearfix">
              <h1 style={{ color: "#fff" }}>Our Blogs</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="/" style={{ color: "#fff" }}>Home</a>
                </li>
                <li style={{ color: "#fff" }}>Blogs</li>
              </ul>
            </div>
          </div>
        </section>

        <br />
        <br />

        <section className="service-style-three">
          <div className="auto-container">
            <div className="row clearfix">
              {blogdata &&
                blogdata.map((bdata, index) => {
                  return (

                    <div className="col-lg-4 col-md-6 col-sm-12 news-block mt-4">
                      <div className="news-block-one wow fadeInUp animated animated py-3" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                          <figure className="image-box">
                            <a href={`blogdetail/` + bdata.seo_url}>
                              <div className="blogimg">
                                <Image
                                  src={bdata.main_image}
                                  height={0}
                                  width={0}
                                  alt={bdata.blog_title}
                                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1980, 700))}`}
                                />
                              </div>
                            </a>
                          </figure>
                          <div className="lower-content">
                            <ul className="post-info list-unstyled">
                              <li className="d-flex align-items-center">
                                <span className="author">By <a href="/">{bdata.author_name} </a></span>
                                <span className="date ms-auto"> {format(new Date(bdata.blog_date), 'dd-MM-yyyy')}</span>
                              </li>
                            </ul>
                            <h3 className="bloghead">
                              <a href={`blogdetail/` + bdata.seo_url}>
                                {truncateString(bdata.blog_title, 20)}
                              </a>
                            </h3>
                            <p className="blog-description">
                              <div dangerouslySetInnerHTML={{ __html: truncateString(bdata.blog_content, 40) }} />
                            </p>
                            <div className="read-more">
                              <a href={`blogdetail/` + bdata.seo_url}>
                                {/* <i className="fas fa-arrow-right" />  */}
                                <span>Read More</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>




                  )
                })}

            </div>
          </div>
        </section>

      </>

    </>
  );
}