import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const res = await axios.get(
					`${process.env.REACT_APP_API_URL}/api/blog/`
				);
				setBlogs(res.data);
			} catch (err) {}
		};
		fetchBlog();
	}, []);

	
	const getBlogs = () => {
		let list = [];
		let result = [];

		blogs.map(blogPost => {
			return list.push(
				<div className='row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
					<div className='col p-4 d-flex flex-column position-static'>
						<strong className='d-inline-block mb-2 text-primary'>{blogPost.category}</strong>
						<h3 className='mb-0'>{blogPost.title}</h3>
						<div className='mb-1 text-muted'>Nov 12</div>
						<p className='card-text mb-auto'>
							{blogPost.excerpt}
						</p>
						<Link to={`/blog/${blogPost.slug}`} className='stretched-link'>
							Continue reading
						</Link>
					</div>
					<div className='col-auto d-none d-lg-block'>
						<img width='200' height='200' src={blogPost.thumbnail} alt='postpics'/>
					</div>
				</div>
			);
    });
    for(let i=0; i<list.length; i += 2){
      result.push(
        <div key={i} className='row mb-2'>
          <div className='col-md-6'>
            {list[i]}
          </div>
          <div className='col-md-6'>
            {list[i+1] ? list[i+1] : null}
          </div>
        </div>
      )
    }
    return result;
	};
	return (
		<div className='container mt-3'>
			<div className='nav-scroller py-1 mb-2'>
				<nav className='nav d-flex justify-content-between'>
					<Link className='p-2 text-muted' to='/category/about'>
						About
					</Link>
					<Link className='p-2 text-muted' to='/category/news'>
						News
					</Link>
					<Link className='p-2 text-muted' to='/category/sport'>
						Sport
					</Link>
					<Link className='p-2 text-muted' to='/category/travel'>
						Travel
					</Link>
					<Link className='p-2 text-muted' to='/category/culture'>
						Culture
					</Link>
					<Link className='p-2 text-muted' to='/category/politics'>
						Politics
					</Link>
					<Link className='p-2 text-muted' to='/category/lifestyle'>
						Lifestyle
					</Link>
					<Link className='p-2 text-muted' to='/category/health'>
						Health
					</Link>
					<Link className='p-2 text-muted' to='/category/entertainment'>
						Entertainment
					</Link>
					<Link className='p-2 text-muted' to='/category/fashion'>
						Fashion
					</Link>
					<Link className='p-2 text-muted' to='/category/books'>
						Books
					</Link>
					<Link className='p-2 text-muted' to='/category/review'>
						Review
					</Link>
				</nav>
			</div>
      {getBlogs()}
		</div>
	);
	
};

export default Blog;
