import React from 'react'
import SvgIcon from './SvgIcon'

var Write = props => {
	var { viewbox, ...p } = props
	return (
		<SvgIcon viewBox='0 0 200 200' {...p}>
			<path d="M152.8,28.3c-22.5,15.8-51.8,40.2-80.4,84.4c-28.5,44.2-42.4,83.6-24.1,72.3c0,0,30.4-58.5,52.2-68.3c21.9-9.8,42.9-12.2,56.3-28.1c0,0,6-11-20.1,0c0,0-9.1-1.3,4-8c13.1-6.7,40.5-20.5,44.2-32.2c0,0,5.8-7.5-12.1,0s-21.2,4.1-8-4c13.2-8.2,26.8-19.5,28.1-28.1C194.3,7.6,175.3,12.6,152.8,28.3z"/>
		</SvgIcon>
	)
	
}

export default Write