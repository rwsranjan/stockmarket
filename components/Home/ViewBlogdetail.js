import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { shimmer, toBase64 } from '@/lib/imageLoader';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { format } from 'date-fns';


function View({ slug }) {

    const router = useRouter();

    const [data, setData] = useState([]);

    const fetchUsers = async ({ queryKey }) => {
        const [slug] = queryKey;
        const response = await fetch('/api/blogdetails/' + slug);
        const res = await response.json();
        if (response.status == 200) {
            //  console.log(res.blogdetail_response);
            setData(res.blogdetail_response);
        } else {
            throw response.status
        }
        return res;
    };

    const { isLoading, isError, error, isSuccess, sdata } = useQuery([slug], fetchUsers);


    const [blogdata, setBlogdata] = useState([]);


    useEffect(() => {

        FetchBlogData();
    }, []);

    const FetchBlogData = async () => {
        const response = await fetch('/api/blogfive');
        const res = await response.json();

        if (res) {
            setBlogdata(res.blogs_response);
        } else {
            alert('Something went wrong');
        }
    }

    if (!isLoading) {
        return (
            <>
               
                <section
                    className="page-title pagetitle2 centred"
                    style={{
                        backgroundImage: "url(assets/images/myimages/ban2.jpg)"
                    }}
                >
                    <div className="auto-container">
                        <div className="content-box clearfix">
                            <h1 style={{ color: "#fff" }}>{data['0']['blog_title']}</h1>
                            <ul className="bread-crumb clearfix">
                                <li>
                                    <a href="/" style={{ color: "#fff" }}>Home</a>
                                </li>
                                <li>
                                    <a href="/blog" style={{ color: "#fff" }}>Blog</a>
                                </li>
                                <li>
                                    <a href={`/blogdetail/${slug}`} style={{ color: "#fff" }}>Blogdetail</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <br />
                <br />

                <section className="sidebar-page-container">
                    <div className="auto-container">
                        <div className="row clearfix">
                            {data &&
                                data.map((bdata, index) => {
                                    return (
                                        <div className="col-lg-9 col-md-12 col-sm-12 content-side">
                                            <div className="blog-details-content ">
                                                <figure className="image-box wow slideInUp">
                                                    <div className="blogdetailimg" key={index}>

                                                        <Image
                                                            src={bdata.main_image}
                                                            height={200}
                                                            width={100}
                                                            alt={bdata.blog_title}
                                                            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1980, 700))}`}
                                                        />

                                                    </div>
                                                </figure>
                                                <div className="inner-box">
                                                    <ul className="post-info clearfix">
                                                        <li>
                                                            <i className="far fa-user" />
                                                            <a href="/">{bdata.author_name}</a>
                                                        </li>
                                                        <li>
                                                            <i className="far fa-calendar-alt" />
                                                            {format(new Date(bdata.blog_date), 'dd-MM-yyyy')}
                                                        </li>
                                                    </ul>

                                                    <div className="text wow slideInUp">
                                                        <div dangerouslySetInnerHTML={{ __html: bdata.blog_content }} />

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                                <div className="sidebar">
                                    <div className="sidebar-widget sidebar-post">
                                        <div className="widget-title">
                                            <h3>Recent Blogs</h3>
                                        </div>
                                        {blogdata &&
                                            blogdata.map((bdata, index) => {
                                                return (

                                                    <div className="widget-content">
                                                        <div className="post">
                                                            <figure className="post-thumb">
                                                                <a href={bdata.seo_url}>
                                                                    <div className='smallblogimg'>
                                                                        <Image
                                                                            src={bdata.main_image}
                                                                            height={54}
                                                                            width={44}
                                                                            alt={bdata.blog_title}
                                                                            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1980, 700))}`}
                                                                        />
                                                                    </div>

                                                                </a>
                                                            </figure>
                                                            <h6>
                                                                <a href={bdata.seo_url}>
                                                                    {bdata.blog_title}
                                                                </a>
                                                            </h6>
                                                            <div className="post-date">
                                                                <i className="far fa-calendar-alt" />
                                                                {format(new Date(bdata.blog_date), 'dd-MM-yyyy')}

                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default View;