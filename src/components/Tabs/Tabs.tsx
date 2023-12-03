import React, {useState} from 'react';

import {Tab} from '@models/common.models';
import {TabButton, TabContainer, TabContent, TabHeader, TextButton} from './styles';

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({tabs}) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <TabContainer>
      <TabHeader>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            onClick={() => handleTabClick(index)}
            isActived={index === activeTab}
          >
            <TextButton isActived={index === activeTab}>{tab.label}</TextButton>
          </TabButton>
        ))}
      </TabHeader>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </TabContainer>
  );
};

export {Tabs};
