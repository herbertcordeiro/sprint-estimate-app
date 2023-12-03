import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';

import {Tab} from '@models/common.models';
import {TabButton, TabContainer, TabContent, TabHeader, TextButton} from './styles';

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({tabs}) => {
  const [t] = useTranslation();
  const [activeTab, setActiveTab] = useState<number>(0);

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
            <TextButton isActived={index === activeTab}>{t(tab.label)}</TextButton>
          </TabButton>
        ))}
      </TabHeader>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </TabContainer>
  );
};

export {Tabs};
