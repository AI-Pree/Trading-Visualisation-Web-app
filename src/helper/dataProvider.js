import * as React from 'react';

const dataContext = React.createContext()

function useData(){
    const context = React.useContext(dataContext)
    if(!context) {
        throw new error ("context cant be used outside the context provider");
    }
    return context
}

// context provider for the react data
// data is going to asyncronously updated using react-query
function DataProvider(props){
    const [data, useData] = React.useState(0)
    const value = React.useMemo(()=>[data, useData],[data])
    return <dataContext.Provider value={value} {...props} />
}

export {useData, DataProvider};