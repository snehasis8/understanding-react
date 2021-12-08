import React, { Component } from 'react'

export class UpdateCycle extends Component {

    static getDerivedStateFromProps(prop , state) {

        console.log("getDerivedStateFromProps update from update")
        return null ;

    }
    shouldComponentUpdate(nextProp ,nextState){

        console.log( nextProp.countVal , this.props.countVal ,"should Component Update hit" )

        if( nextProp.countVal !== this.props.countVal) {
            return true
        }else {
            return false
        }
        

    }

    componentDidUpdate(prop , state, snapShot){

        console.log("component did update" )
    }

    componentWillUnmount(){
        //called immediately after the components get removed
        console.log(" it will hit once it unmounted")  
       
    }

    render() {

        console.log("******************redner hit************ ");
        const {showItem, countVal} = this.props;
        return (
           showItem && <div>
              showing count value from child :  {countVal}
            </div>
        )
    }
}

export default UpdateCycle
