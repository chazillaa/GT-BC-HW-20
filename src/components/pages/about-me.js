import React from 'react';

export default function About() {
    return (
      
        <div className="m-3 nes-container is-rounded text-center">
		<h1 className="text-center nes-text is-primary">About Me</h1>
		<div className="text-center row">
			{/* <div className="col-md-4">
				<img src="https://via.placeholder.com/300x300" alt="My Profile Picture" className="img-fluid">
			</div> */}
			<div className="text-center">
				<h2>Introduction</h2>
				<p>Hi! My name is Isaac Cha, and I am a new web developer. I am almost done with my bootcamp program and this portolio is a showcase of my ability to use react. As you can see I can use a lot of work but I have learned that developing is always a learning process and that the only way to continue to get better is to continue to learn more about coding each and every day. </p>
				<h2>Education</h2>
				<ul>
					<p>Bachelor's degree in Graphic Design from Georgia State University</p>
					
				</ul>
				<h2>Skills</h2>
				<ul>
					<h5>HTML, CSS, Javascript, Bootstrap, jQuery, MySQL, React, Mongo, Node</h5>
				</ul>
			</div>
		</div>
	</div>
    )
  }