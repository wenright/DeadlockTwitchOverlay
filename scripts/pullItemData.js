// Pull item data from wiki and rename things to match my image naming pattern

var fs = require('fs');

const dataUrl = 'https://raw.githubusercontent.com/deadlock-wiki/deadlock-data/refs/heads/master/game-data/json/item-data.json';
const saveFilePath = 'src/data/item-data.json';
let formattedItemData = {};

// There are a few items that have actives that share an upgrade name with non-actives
// Prepend 'Conditional' to differentiate the two
function renameToConditional(itemData, toBeRenamed) {
  rename(itemData, toBeRenamed, 'Conditional' + toBeRenamed);
}

function rename(itemData, originalName, newName) {
  const originalData = itemData[originalName];
  delete itemData[originalName];
  itemData[newName] = originalData;
}

fetch(dataUrl)
  .then(res => {
    res.json()
      .then(jsonItemData => {
        for(const [_, itemData] of Object.entries(jsonItemData)) {
          let itemName = itemData['Name'];
          if (itemName) {
            itemName = itemName.toLowerCase().replaceAll('\'', '').replaceAll(' ', '_');

            if (itemName === 'infuser') renameToConditional(itemData, 'AbilityLifestealPercentHero');
            if (itemName === 'soul_shredder_bullets') renameToConditional(itemData, 'LifestealPercentHero');
            if (itemName === 'fleetfoot') renameToConditional(itemData, 'BonusClipSizePercent');
            if (itemName === 'burst_fire') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'headhunter') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'inhibitor') renameToConditional(itemData, 'SlowPercent');
            if (itemName === 'diviners_kevlar') renameToConditional(itemData, 'TechPower');
            if (itemName === 'mystic_reverb') renameToConditional(itemData, 'MovementSpeedSlow');
            if (itemName === 'hollow_point_ward') renameToConditional(itemData, 'BaseAttackDamagePercent');
            if (itemName === 'active_reload') renameToConditional(itemData, 'BulletLifestealPercent');
            if (itemName === 'active_reload') renameToConditional(itemData, 'BonusFireRate');
            if (itemName === 'kinetic_dash') renameToConditional(itemData, 'BonusFireRate');
            if (itemName === 'kinetic_dash') renameToConditional(itemData, 'BonusClipSize');
            if (itemName === 'slowing_bullets') renameToConditional(itemData, 'SlowPercent');
            if (itemName === 'point_blank') renameToConditional(itemData, 'SlowPercent');
            if (itemName === 'heroic_aura') renameToConditional(itemData, 'BonusFireRate');
            if (itemName === 'warp_stone') renameToConditional(itemData, 'BulletResist');
            if (itemName === 'lucky_shot') renameToConditional(itemData, 'SlowPercent');
            if (itemName === 'healing_rite') renameToConditional(itemData, 'BonusSprintSpeed');
            if (itemName === 'debuff_reducer') renameToConditional(itemData, 'StatusResistancePercent');
            if (itemName === 'fortitude') renameToConditional(itemData, 'BaseAttackDamagePercent');
            if (itemName === 'fortitude') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'lifestrike') renameToConditional(itemData, 'SlowPercent');
            if (itemName === 'veil_walker') renameToConditional(itemData, 'BonusFireRate');
            if (itemName === 'veil_walker') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'majestic_leap') renameToConditional(itemData, 'SlowDuration');
            if (itemName === 'colossus') renameToConditional(itemData, 'SlowPercent');
            if (itemName === 'colossus') renameToConditional(itemData, 'TechResist');
            if (itemName === 'colossus') renameToConditional(itemData, 'BulletResist');
            if (itemName === 'phantom_strike') renameToConditional(itemData, 'SlowPercent');
            if (itemName === 'quicksilver_reload') renameToConditional(itemData, 'FireRateBonus');
            if (itemName === 'cold_front') renameToConditional(itemData, 'SlowPercent');
            if (itemName === 'slowing_hex') renameToConditional(itemData, 'SlowPercent');
            if (itemName === 'mystic_slow') renameToConditional(itemData, 'FireRateSlow');
            if (itemName === 'mystic_slow') renameToConditional(itemData, 'MovementSpeedSlow');
            if (itemName === 'surge_of_power') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'surge_of_power') renameToConditional(itemData, 'FireRateBonus');
            if (itemName === 'arcane_surge') renameToConditional(itemData, 'SpiritPower');
            if (itemName === 'arcane_surge') renameToConditional(itemData, 'TechRangeMultiplier');
            if (itemName === 'arcane_surge') renameToConditional(itemData, 'TechRadiusMultiplier');
            if (itemName === 'arcane_surge') renameToConditional(itemData, 'BonusFireRate');
            if (itemName === 'arcane_surge') renameToConditional(itemData, 'BonusAbilityDurationPercent');
            if (itemName === 'soul_shredder_bullets') renameToConditional(itemData, 'AbilityLifestealPercentHero');
            if (itemName === 'spiritual_overflow') renameToConditional(itemData, 'BonusFireRate');
            if (itemName === 'divine_barrier') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'ammo_scavenger') renameToConditional(itemData, 'BonusSprintSpeed');
            if (itemName === 'ethereal_shift') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'ethereal_shift') renameToConditional(itemData, 'TechResist');

            // Rename some similarly named effects
            if (itemName === 'reactive_barrier') rename(itemData, 'VexBarrierBulletMaxHealth', 'BarrierBulletMaxHealth');
            if (itemName === 'reactive_barrier') rename(itemData, 'VexBarrierTechMaxHealth', 'BarrierTechMaxHealth');
            if (itemName === 'divine_barrier') rename(itemData, 'SaviorBulletShieldHealth', 'BarrierBulletMaxHealth');
            if (itemName === 'divine_barrier') rename(itemData, 'SaviorMagicShieldHealth', 'BarrierTechMaxHealth');
            if (itemName === 'shadow_weave') rename(itemData, 'AmbushBonusFireRate', 'ActiveBonusFireRate');
            if (itemName === 'shadow_weave') rename(itemData, 'AmbushBonusTechPower', 'ActiveBonusTechPower');
            if (itemName === 'frenzy') rename(itemData, 'FervorFireRate', 'ConditionalFireRate');
            if (itemName === 'frenzy') rename(itemData, 'FervorMovespeed', 'ConditionalMovespeed');
            if (itemName === 'frenzy') rename(itemData, 'FervorTechResist', 'ConditionalTechResist');
            if (itemName === 'magic_carpet') rename(itemData, 'FlyingBulletShield', 'BulletShieldOnCast');
            if (itemName === 'magic_carpet') rename(itemData, 'FlyingTechShield', 'SpiritShieldOnCast');
            if (itemName === 'magic_carpet') rename(itemData, 'FlyMoveSpeed', 'ConditionalMoveSpeed');
            if (itemName === 'lucky_shot') rename(itemData, 'ProcChance', 'CritProcChance');
            if (itemName === 'tesla_bullets') rename(itemData, 'ProcChance', 'TeslaProcChance');
            if (itemName === 'frenzy') rename(itemData, 'FervorBulletResist', 'ConditionalBulletResist');
            if (itemName === 'ethereal_shift') rename(itemData, 'BonusTechPower', 'ActiveBonusTechPower');

            // Missing data from item-data.json
            // TODO make sure these are still necessary at each update so as not to remove good data
            if (itemName === 'frenzy') itemData['Description'] = 'While you are below 40% health, you gain stat bonuses.';
            if (itemName === 'restorative_locket') itemData['Description'] = 'Consume all stacks to heal target ally. If used at the max stacks it replenishes a stamina point on the target. Can be self-cast.';
            if (itemName === 'fortitude') itemData['Description'] = 'After not taking damage for 11s, gain 4% Max Health Regen. When you are above 75% health, you have bonus Weapon Damage and Movement Speed.';
            if (itemName === 'superior_stamina') itemData['Description'] = 'Increases the number of Air Dashes and Air Jumps that can be performed before landing from 1 to 2';
            if (itemName === 'echo_shard') itemData['Description'] = 'Reset the cooldown of your most recently used non-ultimate ability.';

            // Delete some bad data
            // TODO double check these as well
            if (itemName === 'soul_shredder_bullets') delete itemData['ShreddersTechAmp'];
            if (itemName === 'mystic_shot') delete itemData['Radius'];
            if (itemName === 'silencer') delete itemData['TechPower'];
            if (itemName === 'majestic_leap') delete itemData['SlowPercent'];
            
            if (itemData['Activation'] === 'ActivationPress' || itemData['Activation'] === 'InstantCast') {
              itemData['Activation'] = 'Active';
            }
            
            formattedItemData[itemName] = itemData;
            delete itemData['Name'];
          }
        }

        fs.writeFile(saveFilePath, JSON.stringify(formattedItemData), () => {
          console.log('Saved file to "' + saveFilePath + '"');
        });
      });
  })
  .catch(e => {
    console.error(e);
  });