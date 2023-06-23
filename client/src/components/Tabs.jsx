import { TabItem } from "./TabItem";

export function Tabs({ list, activeTab, onTabSwitch }) {
  let active = activeTab === "" ? list[0] : activeTab;
  return (
    <div className="sticky z-100">
      <div className="container mx-auto flex items-center border-b-gray-400 border-b-2 ">
        {list.map((item, index) => {
          return (
            <TabItem
              title={item}
              key={index}
              index={index}
              active={active === item}
              setActive={onTabSwitch}
            />
          );
        })}
      </div>
    </div>
  );
}
