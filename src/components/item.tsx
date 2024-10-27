'use client';

import itemData from "../data/item-data.json";
import { UpgradeSpec, simpleUpgrades  } from "../data/upgradeMapping";
import { conditionalUpgrades } from "../data/conditionalUpgradeMapping";

export const colorLightBg = {
  Weapon: 'bg-orange-light',
  Armor: 'bg-green-light',
  Tech: 'bg-purple-light',
  Empty: 'bg-zinc-500',
};

export const colorDefaultBg = {
  Weapon: 'bg-orange-default',
  Armor: 'bg-green-default',
  Tech: 'bg-purple-default',
  Empty: 'bg-zinc-500',
};

export const colorDarkBg = {
  Weapon: 'bg-orange-dark',
  Armor: 'bg-green-dark',
  Tech: 'bg-purple-dark',
  Empty: 'bg-zinc-500',
};

export const colorDarkerBg = {
  Weapon: 'bg-orange-darker',
  Armor: 'bg-green-darker',
  Tech: 'bg-purple-darker',
  Empty: 'bg-zinc-500',
};

export const colorHoverDarkDefaultBg = {
  Weapon: 'hover:bg-orange-default',
  Armor: 'hover:bg-green-default',
  Tech: 'hover:bg-purple-default',
  Empty: 'bg-zinc-500',
};

const tierUpgrades = {
  Weapon: ['', '6%', '10%', '14%', '18%'], // Bonus weapon damage
  Armor: ['', '11%', '14%', '17%', '20%'], // Bonus max health
  Tech: ['', '4', '8', '12', '16'],        // Bonus spirit power
}
const getTierDescription = (itemType: string) => {
  switch(itemType) {
    case 'Weapon':
      return (
        <>Weapon<br />Damage</>
      )
    case 'Armor':
      return (
        <>Base<br />Health</>
      )
    case 'Tech':
      return (
        <>Spirit<br />Power</>
      )
    default:
      break;
  }
}
const tierDescriptions = {
  Weapon: 'Weapon Damage',
  Armor: 'Base Health',
  Tech: 'Spirit Power'
}

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

  const isTangible = (upgradeName: string) => item[upgradeName] && item[upgradeName] !== '0' && item[upgradeName] !== '0m';

  const itemType: 'Weapon' | 'Armor' | 'Tech' = item?.Slot ?? 'Empty';
  
  return (
    <div className={`text-sm lg:text-lg w-6 h-6 lg:w-9 lg:h-9 text-white rounded-md group/item flex items-center justify-center cursor-pointer ${colorLightBg[itemType]} ${colorHoverDarkDefaultBg[itemType]}`}>
      {name !== 'empty' && item && 
        <>
          <img className=" p-0.5 lg:p-1 opacity-75 invert" src={"/item_images/" + name + ".png"} />
          <div className={`absolute left-0 right-0 w-[320px] z-30 overflow-hidden rounded-md mx-0.5 my-4 bottom-full hidden group-hover/item:block text-white/65 ${colorLightBg[itemType]}`}>
            <div className="flex justify-between p-2">
              <div className="">
                <div className="text-xl text-white capitalize">{friendlyName}</div>
                <div>
                  <img src="/icon.png" alt="" className="inline w-5" />
                  <div className="inline text-white align-middle">{item.Cost}</div>
                </div>
              </div>

              <div className={`w-20 rounded-sm ${colorDefaultBg[itemType]}`}>
                <div className="p-1 text-center">+<b className="text-white">{tierUpgrades[itemType][item.Tier]}</b></div>
                <div className={`p-1 text-center text-xs text-white ${colorDarkBg[itemType]}`}>
                  {getTierDescription(itemType)}
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
              {item.Cooldown && item.Cooldown !== '0' &&
                <div className="flex p-2 bg-black opacity-90"><img className="mx-2" src="/clock-arrow.svg" width={16} height={16} alt="" /><p className="mr-6">{item.Cooldown}s</p></div>
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
