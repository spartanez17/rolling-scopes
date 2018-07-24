import { connect } from 'react-redux';
import { pickCard, updateStatus } from '../actions'
import Card from '../components/Card';


const mapStateToProps = state => {
    return { pickedCards: state.gameProgress.pickedCards }
}

const mapDispatchToProps = dispatch => ({
    pickCard: cardInfo => dispatch(pickCard(cardInfo)),
    updateStatus: cardInfo => dispatch(updateStatus(cardInfo)),
})

const CardContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Card);

export default CardContainer;
