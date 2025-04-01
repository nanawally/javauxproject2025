import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useTabs } from './TabsContext'; 

interface TabsProps {
    children?: ReactNode;
    tabs: Record<string, string> | string[];
    defaultTab: string;
    onTabSelect: (tabValue: string) => void;
    className?: string;
    [key: string]: any; // For any additional props
}

interface TabProps {
    children?: ReactNode;
    id: string;
    [key: string]: any; // For any additional props
}

export const Tabs: React.FC<TabsProps> = function({ children, tabs, defaultTab, onTabSelect, className, ...props }) {
    const { currentTab, setCurrentTab } = useTabs();

    useEffect(() => {
        setCurrentTab(defaultTab);
    }, [setCurrentTab, defaultTab]);

    const handleTabClick = (tabValue: string) => {
        setCurrentTab(tabValue);
        onTabSelect(tabValue);
    };

    return (
        <div className={`tabs ${className}`} {...props}>
            <ul className="tabs-header">
                {Object.values(tabs).map((tabValue) => (
                    <li 
                        onClick={() => handleTabClick(tabValue)} 
                        className={`${currentTab === tabValue ? 'active' : ''}`} 
                        key={tabValue}
                    >
                        {tabValue}
                    </li>
                ))}
            </ul>
            <div className="tabs-body">
               {React.Children.map(children, (child) => {
               if (!React.isValidElement<TabProps>(child)) return null;
    
                 // Type-safe check using the component itself
                if ((child.type as React.ComponentType).displayName !== 'Tab') {
                throw new Error('The child components should be of type Tab');
                 }
      
                     // Now TypeScript knows child has props with id
                   return child.props.id === currentTab ? child : null;
                      })}
                   </div>
        </div>
    );
};

export const Tab: React.FC<TabProps> = function({ children, ...props }) {
    return <section {...props}>{children}</section>;
};

Tab.displayName = 'Tab';