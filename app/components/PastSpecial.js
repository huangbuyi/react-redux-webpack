import React from 'react'
import { Link } from 'react-router'
import './PastSpecial.css'

class PastSpecial extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		if(this.props.specialsCate === nextProps.specialsCate){
			return false
		}
		return true
	}

	render () {
		var {title, cate, specialsCate} = this.props
		var {data, isFetching} = Object.assign({
			data: [],
			isFetching: true
		}, specialsCate)
		var specials = data
		return (
			<div className="pastSpecial">
				<div className="pastTitle">{title + "往期专题"}</div>
				<ul className="pastList">
					{
						specials.map( (special, i) => (
							<li key={i}>
								<Link to={"/specials/" + special.id}>
									<p title={special.title}>
										{special.title}
									</p>
									<span>{special.create_at.split(' ')[0]}</span>
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
	}
}



export default PastSpecial