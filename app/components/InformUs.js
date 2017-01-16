import React from 'react'
import { Link } from 'react-router'
import RaisedButton from '../commons/Button/RaisedButton'
import './InformUs.css'
import Blog from '../commons/SvgIcon/blog'

var text = "如果您有喜欢的网站、博客、学习资源或文章想推荐给我们，或是您有什么意见或者建议，快告诉我们吧！";
var btnText = "有话想说"

const InformUs = () => (
	<div title="功能建设中...，请联系 admin@4bin.cn" className="informUs">
		<RaisedButton icon={ Blog }>
			有话想说
		</RaisedButton>
		<div className="informUs-tip">
			<p>{ text }</p>
		</div>
	</div>
)

export default InformUs