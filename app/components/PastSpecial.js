import React from 'react'
import { Link } from 'react-router'
import './PastSpecial.css'

const PastSpecial = ({ title, cate, specials, onClick }) => (
	<div className="pastSpecial">
		<div className="pastTitle">{title + "往期专题"}</div>
		<ul className="pastList">
			{
				specials.map( (special, i) => (
					<li key={i}>
						<Link to={"/" + cate + "/" + special.id}>
							<p title={special.title}>
								{special.title}
							</p>
							<span>{special.date}</span>
						</Link>
					</li>
				) )
			}
		</ul>
		<Link to={"/" + cate}>
			<div className="pastMore">- MORE -</div>
		</Link>
	</div>
)


export default PastSpecial