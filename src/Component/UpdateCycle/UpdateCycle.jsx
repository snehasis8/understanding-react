import React, { Component } from 'react'

export class UpdateCycle extends Component {

    static getDerivedStateFromProps(prop , state) {

        console.log("should component update from update")
        return null ;

    }
    shouldComponentUpdate(nextProp ,nextState){

        console.log( nextProp , this.prop ,"should Component Update hit" ,)
        return true

    }

    componentDidUpdate(prop , state, snapShot){

        console.log("component did update" )
    }

    componentWillUnmount(){
        //called immediately after the components get removed
        console.log(" it will hit once it unmounted")  
        window.removeEventListener()  ;
    }

    render() {

        console.log("redner hit ");
        const {showItem, countVal} = this.props;
        return (
           showItem && <div>
              showing count value from child :  {countVal}
            </div>
        )
    }
}

export default UpdateCycle
