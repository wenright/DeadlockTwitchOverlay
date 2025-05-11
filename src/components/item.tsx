'use client';

import itemData from "../data/item-data.json";
import { UpgradeSpec, simpleUpgrades  } from "../data/upgradeMapping";
import { conditionalUpgrades } from "../data/conditionalUpgradeMapping";

export const colorLightBg = {
  Weapon: 'bg-orange-light',
  Armor: 'bg-green-light',
  Tech: 'bg-purple-light',
  Empty: 'bg-zinc-500 opacity-25',
};

export const colorDefaultBg = {
  Weapon: 'bg-orange-default',
  Armor: 'bg-green-default',
  Tech: 'bg-purple-default',
  Empty: 'bg-zinc-500 opacity-25',
};

export const colorDarkBg = {
  Weapon: 'bg-orange-dark',
  Armor: 'bg-green-dark',
  Tech: 'bg-purple-dark',
  Empty: 'bg-zinc-500 opacity-25',
};

export const colorDarkerBg = {
  Weapon: 'bg-orange-darker',
  Armor: 'bg-green-darker',
  Tech: 'bg-purple-darker',
  Empty: 'bg-zinc-500 opacity-25',
};

export const colorHoverDarkDefaultBg = {
  Weapon: 'hover:bg-orange-dark',
  Armor: 'hover:bg-green-dark',
  Tech: 'hover:bg-purple-dark',
  Empty: 'bg-zinc-500 opacity-25',
};
interface ItemCollection {
  [key: string]: any
}

const items: ItemCollection = itemData;

type ItemProps = {
  name: string,
  slot: string,
}

const Item = (props: ItemProps) => {
  const { name } = props;

  const friendlyName = name.replaceAll("_", " ");
  const item = items[name];

  const isTangible = (upgradeName: string) => item[upgradeName] && item[upgradeName] !== '0' && item[upgradeName] !== '0m';

  const itemType: 'Weapon' | 'Armor' | 'Tech' = item?.Slot ?? 'Empty';

  const cooldown = item?.Cooldown ?? item?.AbilityCooldown;
  
  return (
    <div className={`text-sm lg:text-lg w-9 h-9 p-0.5 text-white rounded-sm group/item flex items-center justify-center cursor-pointer`}>
      {name !== 'empty' && item && 
        <>
          <div className={`w-full h-full ${colorLightBg[itemType]} bg-cover`} style={{
            backgroundImage: `url(/item_images/${name}.png`,
          }}></div>
          <div className={`absolute left-0 right-0 w-[320px] z-30 overflow-hidden rounded-md mx-0.5 my-4 bottom-full hidden group-hover/item:block text-white/65 ${colorLightBg[itemType]}`}>
            <div className="flex justify-between p-2">
              <div className="">
                <div className="text-xl text-white capitalize">{friendlyName}</div>
                <div>
                  <img src="/icon.png" alt="" className="inline w-5" />
                  <div className="inline align-middle text-blue-soul">{parseInt(item.Cost).toLocaleString('en', {useGrouping: true})}</div>
                </div>
              </div>
            </div>
            <div className={`py-2 ${colorDarkBg[itemType]}`}>
              {Object.entries(simpleUpgrades)
                .filter(([upgradeRealName, upgradeSpec]: [string, UpgradeSpec]) => isTangible(upgradeRealName))
                .map(([upgradeRealName, upgradeSpec]: [string, UpgradeSpec]) => (
                  <div key={upgradeRealName} className={`px-2`}>{upgradeSpec.signPrefix}<p className="inline text-white">{item[upgradeRealName]}</p>{upgradeSpec.signSuffix} {upgradeSpec.readableName}</div>
                ))}
            </div>
            <div className={`text-sm flex items-center ${colorDarkerBg[itemType]}`}>
              <div className={`p-1 px-2 italic w-full`}>{item.Activation}</div>
              {cooldown && cooldown !== '0' &&
                <div className="flex p-2 bg-black opacity-90"><img className="mx-2" src="/clock-arrow.svg" width={16} height={16} alt="" /><p className="mr-6">{cooldown}s</p></div>
              }
            </div>
            {item.Description &&
              <div className={`p-1 px-2 ${colorDarkBg[itemType]}`} dangerouslySetInnerHTML={{__html: item.Description}}></div>
            }
            {Object.keys(conditionalUpgrades).some(upgrade => item[upgrade] && item[upgrade] !== '0') &&
              <div className={`p-1 ${colorDarkBg[itemType]}`}>
                <div className={`rounded-sm p-1 m-1 ${colorDarkerBg[itemType]}`}>
                  {Object.entries(conditionalUpgrades)
                    .filter(([upgradeRealName, upgradeSpec]: [string, UpgradeSpec]) => isTangible(upgradeRealName))
                    .map(([upgradeRealName, upgradeSpec]: [string, UpgradeSpec]) => (
                      <div key={upgradeRealName} className={`px-2`}>{upgradeSpec.signPrefix}<p className="inline text-white">{item[upgradeRealName]}</p>{upgradeSpec.signSuffix} {upgradeSpec.readableName}</div>
                    ))}
                </div>
              </div>
            }
          </div>
        </>
      }
    </div>
  );
};

export default Item;
