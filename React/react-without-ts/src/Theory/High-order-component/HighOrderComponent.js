import React from 'react'

const WithLogger=(wrappedComponent)=>{
    return class extends React.Component{
        render(){
            return(
                <div>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}

export default WithLogger;
