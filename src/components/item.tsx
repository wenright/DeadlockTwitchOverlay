'use client';

import itemData from "../data/item-data.json";
import { UpgradeSpec, simpleUpgrades  } from "../data/upgradeMapping";
import { conditionalUpgrades } from "../data/conditionalUpgradeMapping";

export const colorLightBg = {
  Weapon: 'bg-orange-light',
  Armor: 'bg-green-light',
  Tech: 'bg-purple-light',
};

export const colorDarkBg = {
  Weapon: 'bg-orange-dark',
  Armor: 'bg-green-dark',
  Tech: 'bg-purple-dark',
};

export const colorDarkDefaultBg = {
  Weapon: 'hover:bg-orange-default',
  Armor: 'hover:bg-green-default',
  Tech: 'hover:bg-purple-default',
};

export const colorDarkerBg = {
  Weapon: 'bg-orange-darker',
  Armor: 'bg-green-darker',
  Tech: 'bg-purple-darker',
};

// Reading item-data.json
interface ItemCollection {
  [key: string]: any
}

const items: ItemCollection = itemData;

type ItemProps = {
  name: string,
  slot: string,
}

const Item = (props: ItemProps) => {
  const {name, slot} = props;

  const friendlyName = name.replaceAll("_", " ");
  const item = items[name];

  if (!item || name === 'empty') {
    return (
      <div className={`w-[64px] h-[64px] m-1 text-white rounded-md group/item flex items-center justify-center cursor-pointer bg-zinc-500`}></div>
    );
  }

  const isTangible = (upgradeName: string) => item[upgradeName] && item[upgradeName] !== '0' && item[upgradeName] !== '0m';

  const itemType: 'Weapon' | 'Armor' | 'Tech' = item.Slot;
  
  return (
    <div className={`w-[64px] h-[64px] m-1 text-lg text-white rounded-md group/item flex items-center justify-center cursor-pointer ${colorLightBg[itemType]} ${colorDarkDefaultBg[itemType]}`}>
      <img className="w-12 h-12 opacity-75 invert" src={"/item_images/" + name + ".png"} />
      {item &&
        <div className={`absolute left-0 right-0 w-[320px] z-30 overflow-hidden rounded-md mx-1 my-4 bottom-full hidden group-hover/item:block text-white/65 ${colorLightBg[itemType]}`}>
          <div className="p-4">
            <div className="text-3xl text-white capitalize">{friendlyName}</div>
            <div>
              <img src="/souls_icon.png" alt="" className="inline w-5 p-1" />
              <div className="inline text-white">{item.Cost}</div>
            </div>
          </div>
          <div className={`py-4 ${colorDarkBg[itemType]}`}>
            {Object.entries(simpleUpgrades)
              .filter(([upgradeRealName, upgradeSpec]: [string, UpgradeSpec]) => isTangible(upgradeRealName))
              .map(([upgradeRealName, upgradeSpec]: [string, UpgradeSpec]) => (
                <div key={upgradeRealName} className={`px-4`}>{upgradeSpec.signPrefix}<p className="inline text-white">{item[upgradeRealName]}</p>{upgradeSpec.signSuffix} {upgradeSpec.readableName}</div>
            ))}
          </div>
          <div className={`text-sm flex`}>
            <div className={`p-2 px-4 italic w-full ${colorDarkerBg[itemType]}`}>{item.Activation}</div>
            {item.Cooldown && item.Cooldown !== '0' &&
              <div className="flex p-2 bg-black opacity-90"><img className="mx-2" src="/clock-arrow.svg" width={16} height={16} alt="" /><p className="mr-6">{item.Cooldown}s</p></div>
            }
          </div>
          {item.Description &&
            <div className={`p-2 px-4 ${colorDarkBg[itemType]}`} dangerouslySetInnerHTML={{__html: item.Description}}></div>
          }
          {Object.keys(conditionalUpgrades).some(upgrade => item[upgrade] && item[upgrade] !== '0') &&
            <div className={`p-2 ${colorDarkBg[itemType]}`}>
              <div className={`rounded-sm p-2 ${colorDarkerBg[itemType]}`}>
                {Object.entries(conditionalUpgrades)
                  .filter(([upgradeRealName, upgradeSpec]: [string, UpgradeSpec]) => isTangible(upgradeRealName))
                  .map(([upgradeRealName, upgradeSpec]: [string, UpgradeSpec]) => (
                    <div key={upgradeRealName} className={`px-4`}>{upgradeSpec.signPrefix}<p className="inline text-white">{item[upgradeRealName]}</p>{upgradeSpec.signSuffix} {upgradeSpec.readableName}</div>
                ))}
              </div>
            </div>
          }
        </div>
      }
    </div>
  );
};

export default Item;
