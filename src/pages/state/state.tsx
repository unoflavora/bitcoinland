import { type } from "os";
import { ReactNode, SetStateAction, createContext, useState } from "react";

type contextType = {
    showNav : boolean,
    setShowNav :  (val: boolean) => void
}

export const AppContext = createContext({} as contextType);

export function AppState({children} : {children : ReactNode})
{
    const [showNav, setShowNav] = useState(false);

    return(
        <AppContext.Provider value={{showNav, setShowNav}}>
            {children}
        </AppContext.Provider>
    )
}