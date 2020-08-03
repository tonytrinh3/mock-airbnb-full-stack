import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import {handleToken} from '../actions';

class Payments extends React.Component{
    render(){
      

        return (
            <StripeCheckout
                name = "Emaily"
                description = "$5 for 5 email credits"
                amount = {500}
                token = {token => this.props.handleToken(token)}
                // stripeKey = {pk_test_51HB78EI1UPQb82yREeqvZGYbcAb5lj4AyFso7iObcgwiygvIFSRgv5hvIMVGJEGhs9yzk7HLkqliDdmumKtQwS3B00yo83KE2X}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY }
            >
                <button className="awef">add credits</button>
            </StripeCheckout>
        )
    }
}

export default connect(null,{handleToken})(Payments);