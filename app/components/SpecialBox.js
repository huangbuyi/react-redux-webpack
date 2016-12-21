import React from 'react'
import { Link } from 'react-router'
import './specialBox.css'


const SpecialBox = ({special, onClick}) => (
	<div className="specialBox">
		<div className="specialBox-title">
			<Link to={special.cate}>
				<div>
					<img src={special.image} />
					<div className="blackFilter"></div>
					<h1>- {special.cateName} -</h1>
					<h2>{special.title}</h2>
				</div>
			</Link>
		</div>
		{
			special.items.map( (item, i) => (			
				<div key={i} className="specialBox-item">
					<Link to={"/" + special.cate + "/" + item.id}>
						<div>
							<div 
								title={"点击打开" + item.target}
								onClick={(e) => {
									e.preventDefault();
									onClick(item.target)
								}}
							>
								<h2>{item.title}</h2>
							</div>
							<p title="点击查看">{item.text}</p>
						</div>
					</Link>
				</div>
			))
		}
	</div>
)

export default SpecialBox