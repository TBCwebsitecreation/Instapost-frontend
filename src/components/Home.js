import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
	<div className='container' align='justify'>
		<div className='jumbotron mt-2'>
			<h1 className='display-1' align='center'>
				Insta Blog
			</h1>
			<h3 className='display-5'>What is Lorem Ipsum?</h3>
			<p className='lead mt-3'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</p>

			<h3 className='display-5'>What is Lorem Ipsum?</h3>
			<p className='lead mt-3'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</p>

			<h3 className='display-5'>What is Lorem Ipsum?</h3>
			<p className='lead mt-3'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</p>

			<hr className='my-4' />

			<p>
				Welcome to Insta Post
			</p>

			<p className='lead'>
				<Link className='btn btn-danger btn-lg' to='/blog' role='button'>
					Read More On The Blog
				</Link>
			</p>
		</div>
	</div>
);

export default Home;