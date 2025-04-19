import { createContext, useContext, useState } from "react";

// Create a context for Tabs
const TabsContext = createContext();

export function Tabs({ children, value, onValueChange }) {
  const [activeTab, setActiveTab] = useState(value);

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
    if (onValueChange) onValueChange(newValue);
  };

  return (
    <TabsContext.Provider value={{ activeTab, handleTabChange }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children }) {
  return <div className="flex space-x-4">{children}</div>;
}

export function TabsTrigger({ value, children }) {
  const { activeTab, handleTabChange } = useContext(TabsContext);
  const isActive = value === activeTab;

  return (
    <button
      className={`px-4 py-2 rounded ${
        isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
      }`}
      onClick={() => handleTabChange(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }) {
  const { activeTab } = useContext(TabsContext);
  return activeTab === value ? <div>{children}</div> : null;
}