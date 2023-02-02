import { createContext, ReactNode, useState,useEffect} from "react";
import React from 'react'


interface IRouterContextProps{
    children: ReactNode
}

interface IContextProps{
    loading: ()=> boolean;
    isLoaded:boolean;
}

export const RouterContext = createContext<IContextProps>({} as IContextProps);

export const RouterProvider = ({ children }: IRouterContextProps) => {

    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    console.log(isLoaded)

        const loading = () =>{
            setIsLoaded(true) 
        }
    
    console.log(isLoaded)

    return(
        <RouterContext.Provider value={{ loading, isLoaded } as IContextProps}>
            {children}
        </RouterContext.Provider>
    )
}