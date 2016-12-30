import React from 'react'
import { Link } from 'react-router'
import RaisedButton from './RaisedButton'
import './InformUs.css'

var text = "如果您有喜欢的网站、博客、学习资源或文章想推荐给我们，或是您有什么意见或者建议，快告诉我们吧！";
var btnText = "有话想说"

const InformUs = () => (
	<div className="informUs">
		<Link to="/suggest">
			<RaisedButton>有话想说</RaisedButton>
		</Link>
		<div className="informUs-tip">
			<p>{text}</p>
		</div>
	</div>
)

export default InformUs