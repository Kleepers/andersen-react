import {createContext, useEffect, useState} from "react";

export const FeatureContext = createContext(null as any);

export const FeatureProvider = ({children}: any) => {
    const [featureFlags, setFeatureFlags] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/feature-flags')
            .then(response => response.json())
            .then(data => {
                setFeatureFlags(data);
                setIsLoading(false);
            });
    }, [])

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <FeatureContext.Provider value={featureFlags}>
            {children}
        </FeatureContext.Provider>
    )
}

