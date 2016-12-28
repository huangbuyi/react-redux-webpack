import React from 'react'
import ProjectSpecial from './ProjectSpecial'
import PeriodDirectory from './PeriodDirectory'
import PastSpecial from './PastSpecial'
import InformUs from './InformUs'
import SpecialBoxCon from '../containers/SpecialBoxCon'
import './App.css'
import { periods } from "../test_data/past"

var period = periods["12"]


class Index extends React.Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		isFetching: false,
		weekly: {}	
	}

	shouldComponentUpdate(nextProps, nextState) {
		if(this.props.weekly === nextProps.weekly 
			&& this.props.specialList === nextProps.specialList){
			return false
		}
		return true
	}

	render () {
		var { weekly, specialList } = this.props;
		var order = ['topic', 'website', 'source', 'circle', 'other']
		var list = weekly.list;

		function getSpecials () {
			var sList = [];
			order.map( type => {
				if( !list[type] ){
					return null
				}

				type == 'topic'
				? list[type].map( topic => {
					sList.push(
						<div key={ topic.id } className="projectBoxList">
							<ProjectSpecial project={topic} />
						</div>
					)
				})
				: list[type].map( special => {
					sList.push(
						<div key={ special.id } className="specialBoxList">
							<SpecialBoxCon cate={type} special={special} />
						</div>
					)
				})
			})
			return sList
		}

		function getSpecialsList () {
			var pList = []

			order.map( (type, i) => {

				specialList[type] 
				? pList.push(
					<div key={i} className="pastSpecialAll">
						<PastSpecial cate={type} title={type} specialsCate={specialList[type]} />
					</div>
				) 
				: null
			})
			return pList
		}

		return (
			<div>
				<div className="leftSide">
					<PeriodDirectory order={order} period={ weekly }/>
				</div>
				<div className="specials">
					{ getSpecials() }
				</div>
				<div className="rightSide">
					<InformUs />
					{ getSpecialsList() }
				</div>		
			</div>		
		)
	}
}

export default Index