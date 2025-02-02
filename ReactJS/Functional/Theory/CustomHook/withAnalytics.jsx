const withAnalytics = (WrappedComponent,eventName) => {
    return (props)=>{
        const handleEvent=(e)=>{
            console.log(`Event ${eventName} has been triggered`,e);
            if(props.onEvent) props.onEvent(e)
        };
    return <WrappedComponent {...props} onEvent={handleEvent}/>
    }
}