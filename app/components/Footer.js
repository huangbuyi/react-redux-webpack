import React from 'react'
import PopCard from '../commons/PopCard'

const json = {
	about: {
		title: '关于我们',
		content: <div>
					<p>网站虽然以周刊冠名，但并不保证周周更新。周刊内容多收藏于网络的公开信息，但仅保存内容引用，不保存引用内容，可能会导致死链或找不到链接的情况，为此造成的不便，可以联系我们予以修改。</p>
					<p>周刊主题并不固定，范围也不局限于前端，我们希望能以不同的角度展现Web开发领域各个方面。</p>
					<p>我们并不生产内容，我们只是互联网信息的搬运工。</p>
					<p>邮箱：admin@4bin.cn</p>
				</div>
	},
	copyright: {
		title: '版权声明',
		content: <div>
					<p>如果该网站所引用的文章侵犯了您的权利，请联系我们，我们将立刻对相关文章做处理。</p>
					<p>邮箱：admin@4bin.cn</p>
				 </div>
	},
	contact: {
		title: '联系我们',
		content: ( <div><p>邮箱: admin@4bin.cn</p><p>huang4bin@gmail.com</p><p>914584347@qq.com</p></div> )
	}

}
///
class Footer extends React.Component {

	getElement (button, title, content) {

		return (
			<PopCard title={ title } content={ content } placement='topLeft'> 
				<span style={ btnStyle }>{ button }</span>
			 </PopCard>
		)
	}

	render () {
		var { getElement } = this
		return (
			<div style={ style }>
				<div style={ innerStyle }>
					<p style={ hStyle }>© 版权所有</p>
					<div style={ dStyle }>
						{ getElement('关于', json.about.title, json.about.content) }
						{ getElement('版权', json.copyright.title, json.copyright.content) }
						{ getElement('联系我们', json.contact.title, json.contact.content) }
					</div>
				</div>
			</div>
		)
	}
}

const style = {
	boxSizing: 'border-box',
	marginTop: '12px',
	width: '100%',
	background: '#f5f5f5',
	padding: '20px 16px 12px 16px',
	borderTop: '1px solid #e0e0e0'
}
const hStyle = {
	fontSize: '13px',
	color: 'rgba(0,0,0,0.33)'
}
const innerStyle = {
	width: '1280px',
	margin: '0 auto'
}
const btnStyle = {
	fontSize: '13px',
	color: 'rgba(0,0,0,0.54)',
	marginRight: '24px',
	cursor: 'pointer'
}
const dStyle = {
	marginTop: '6px'
}
export default Footer