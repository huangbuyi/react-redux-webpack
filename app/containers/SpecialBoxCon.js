import { connect } from 'react-redux'
import { openTarget } from '../actions'
import SpecialBox from '../components/SpecialBox'


const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (target) => { 
			dispatch(openTarget(target)) 
		}
	}
}

const SpecialBoxCon = connect(null, mapDispatchToProps)(SpecialBox)

export default SpecialBoxCon