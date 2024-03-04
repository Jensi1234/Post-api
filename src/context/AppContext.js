import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [showComments, setShowComments] = useState(true)

    const toggleComments = () => {
        setShowComments(!showComments)
    }

    return (
        <AppContext.Provider value={{
            showComments,
            toggleComments
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;