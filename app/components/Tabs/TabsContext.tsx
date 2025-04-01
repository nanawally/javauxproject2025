import { Component } from "lucide-react";
import { useContext, useState, createContext, ReactNode } from "react";

interface TabsContextType {
  currentTab?: string;
  setCurrentTab: (tab: string) => void;
}

export const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface WithTabsProps {
  children?: ReactNode;
  [key: string]: any;
}

export const withTabs = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return ({ children, ...props }: WithTabsProps & P) => {
    const [currentTab, setCurrentTab] = useState<string>();

    return (
      <TabsContext.Provider value={{ currentTab, setCurrentTab }}>
        <WrappedComponent {...(props as P)}>
          {children}
        </WrappedComponent>
      </TabsContext.Provider>
    );
  };
};

export const useTabs = (): TabsContextType => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs should be used inside TabsProvider');
  }
  return context;
};