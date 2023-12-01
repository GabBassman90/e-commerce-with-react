import React, { ReactNode, createContext, useState, useCallback } from "react";

// Definizione dell'interfaccia per il contesto della barra laterale
interface SidebarContextInterface {
  open: boolean; // Flag per indicare se la barra laterale è aperta o chiusa
  setOpen: () => void; // Funzione per aprire o chiudere la barra laterale
}

// Interfaccia per i children che saranno avvolti dal provider del contesto
interface SidebarProviderInterface {
  children: ReactNode;
}

// Valore predefinito per il contesto iniziale
const defaultContextValue: SidebarContextInterface = {
  open: false,
  setOpen: () => {},
};

// Creazione del contesto con il valore predefinito
export const SidebarContext =
  createContext<SidebarContextInterface>(defaultContextValue);

export const SidebarProvider = ({ children }: SidebarProviderInterface) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  // Funzione per aprire o chiudere la barra laterale
  const toggleSidebar = useCallback(() => {
    setOpenSidebar((prevOpen) => !prevOpen);
  }, []);

  const contextValue: SidebarContextInterface = {
    open: openSidebar,
    setOpen: toggleSidebar,
  };

  // Il provider avvolge i suoi children con il contesto e il suo valore
  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};
