/* eslint-disable react/prop-types */
import ErrorBoundary from "./1.creating-error-boundary";

function ErrorFallback({error,resetErrorBoundary}){
    return(
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

function BUggyComponen(){
    throw new Error('Crashed')
}

export default function UsingErrorBoundary(){
    return(
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <BUggyComponen/>
        </ErrorBoundary>
    )
}