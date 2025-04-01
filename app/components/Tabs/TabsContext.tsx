import { Component } from "lucide-react";
import { useContext, useState, createContext } from "react";
import type { ReactNode } from "react";  
import React from 'react';
import styles from './TabsComponent.module.css';


interface TabsContextType {
  currentTab?: string;
  setCurrentTab: (tab: string) => void;
  
}

interface TabProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

export const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState('ingredients');

  const tabs: TabProps[] = [
    {
      id: 'ingredients',
      label: 'Ingredienser',
      children: <div>Ingredients content goes here</div>
    },
    {
      id: 'instructions',
      label: 'Så gör man',
      children: <div>Instructions content goes here</div>
    },
    {
      id: 'nutrition',
      label: 'Näringsinnehåll',
      children: <div>Nutrition content goes here</div>
    }
  ];

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsHeader}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabsContent}>
        {tabs.find((tab) => tab.id === activeTab)?.children}
      </div>
    </div>
  );
};

export const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface WithTabsProps {
  children?: ReactNode;
  [key: string]: any;
}

export const TabsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentTab, setCurrentTab] = useState('');
  
    return (
      <TabsContext.Provider value={{ currentTab, setCurrentTab }}>
        {children}
      </TabsContext.Provider>
    );
  };

/* export const withTabs = <P extends object>(
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
*/


export const useTabs = (): TabsContextType => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs should be used inside TabsProvider');
  }
  return context;
};