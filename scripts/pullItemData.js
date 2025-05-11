// Pull item data from wiki and rename things to match my image naming pattern

var fs = require('fs');

const dataUrl = 'https://raw.githubusercontent.com/deadlock-wiki/deadlock-data/refs/heads/develop/data/json/item-data.json';
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
            
            // Misspelled items
            if (itemName === 'cultlist_sacrifice') itemName = 'cultist_sacrifice';
            if (itemName === 'enchanted_holsters') itemName = 'spellslinger';
            if (itemName === 'spirit_bubble') itemName = 'spirit_shielding';
            if (itemName === 'emergency_shielding') itemName = 'weapon_shielding';

            // These effects should only apply under certain conditions
            if (itemName === 'infuser') renameToConditional(itemData, 'AbilityLifestealPercentHero');
            if (itemName === 'spirit_shredder_bullets') renameToConditional(itemData, 'AbilityLifestealPercentHero');
            if (itemName === 'spirit_rend') renameToConditional(itemData, 'AbilityLifestealPercentHero');
            if (itemName === 'burst_fire') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'headhunter') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'diviners_kevlar') renameToConditional(itemData, 'TechPower');
            if (itemName === 'diviners_kevlar') renameToConditional(itemData, 'CombatBarrier');
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
            if (itemName === 'veil_walker') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'colossus') renameToConditional(itemData, 'SlowPercent');
            if (itemName === 'colossus') renameToConditional(itemData, 'TechResist');
            if (itemName === 'colossus') renameToConditional(itemData, 'BulletResist');
            if (itemName === 'phantom_strike') renameToConditional(itemData, 'SlowPercent');
            if (itemName === 'quicksilver_reload') renameToConditional(itemData, 'BonusFireRate');
            if (itemName === 'cold_front') renameToConditional(itemData, 'SlowPercent');
            if (itemName === 'slowing_hex') renameToConditional(itemData, 'SlowPercent');
            if (itemName === 'mystic_slow') renameToConditional(itemData, 'MovementSpeedSlow');
            if (itemName === 'surge_of_power') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'surge_of_power') renameToConditional(itemData, 'FireRateBonus');
            if (itemName === 'arcane_surge') renameToConditional(itemData, 'SpiritPower');
            if (itemName === 'arcane_surge') renameToConditional(itemData, 'TechRangeMultiplier');
            if (itemName === 'arcane_surge') renameToConditional(itemData, 'TechRadiusMultiplier');
            if (itemName === 'arcane_surge') renameToConditional(itemData, 'BonusAbilityDurationPercent');
            if (itemName === 'spiritual_overflow') renameToConditional(itemData, 'BonusFireRate');
            if (itemName === 'divine_barrier') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'ethereal_shift') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'ethereal_shift') renameToConditional(itemData, 'TechResist');
            if (itemName === 'enchanters_emblem') renameToConditional(itemData, 'CooldownReduction');
            if (itemName === 'enchanters_emblem') renameToConditional(itemData, 'TechPower');
            if (itemName === 'cultist_sacrifice') renameToConditional(itemData, 'TechRangeMultiplier');
            if (itemName === 'cultist_sacrifice') renameToConditional(itemData, 'BonusFireRate');
            if (itemName === 'cultist_sacrifice') renameToConditional(itemData, 'BonusHealth');
            if (itemName === 'cheat_death') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'blood_tribue') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'blood_tribue') renameToConditional(itemData, 'BonusFireRate');
            if (itemName === 'blood_tribue') renameToConditional(itemData, 'StatusResistancePercent');
            if (itemName === 'hollow_point') renameToConditional(itemData, 'BaseAttackDamagePercent');
            if (itemName === 'hollow_point') renameToConditional(itemData, 'BaseAttackDamagePercent');
            if (itemName === 'hollow_point') renameToConditional(itemData, 'BaseAttackDamagePercent');
            if (itemName === 'spellslinger') renameToConditional(itemData, 'BonusFireRate');
            if (itemName === 'spellslinger') renameToConditional(itemData, 'BonusReloadSpeedMultiplerFireRate');
            if (itemName === 'battle_vest') renameToConditional(itemData, 'BaseAttackDamagePercent');
            if (itemName === 'battle_vest') renameToConditional(itemData, 'BonusFireRate');
            if (itemName === 'guardian_ward') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'spirit_shielding') renameToConditional(itemData, 'CombatBarrier');
            if (itemName === 'bullet_shielding') renameToConditional(itemData, 'CombatBarrier');
            if (itemName === 'counterspell') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'counterspell') renameToConditional(itemData, 'SpiritPower');
            if (itemName === 'fury_trance') renameToConditional(itemData, 'BulletResist');
            if (itemName === 'majestic_leap') renameToConditional(itemData, 'Barrier');
            if (itemName === 'trophy_collector') renameToConditional(itemData, 'BonusSprintSpeed');
            if (itemName === 'healing_tempo') renameToConditional(itemData, 'BonusFireRate');
            if (itemName === 'healing_tempo') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'cold_front') renameToConditional(itemData, 'MovementSpeedSlow');
            if (itemName === 'arctic_blast') renameToConditional(itemData, 'PercentDamage');
            if (itemName === 'boundless_spirit') renameToConditional(itemData, 'BonusMoveSpeed');
            if (itemName === 'mercurial_magnum') renameToConditional(itemData, 'BonusFireRate');
            if (itemName === 'scourge') renameToConditional(itemData, 'TechResist');
            if (itemName === 'vortex_web') renameToConditional(itemData, 'SlowPercent');

            // // Rename some similarly named effects
            if (itemName === 'shadow_weave') rename(itemData, 'AmbushBonusFireRate', 'ActiveBonusFireRate');
            if (itemName === 'shadow_weave') rename(itemData, 'AmbushBonusTechPower', 'ActiveBonusTechPower');
            if (itemName === 'frenzy') rename(itemData, 'FervorFireRate', 'ConditionalFireRate');
            if (itemName === 'frenzy') rename(itemData, 'FervorMovespeed', 'ConditionalMovespeed');
            if (itemName === 'frenzy') rename(itemData, 'FervorBulletResist', 'ConditionalBulletResist');
            if (itemName === 'frenzy') rename(itemData, 'FervorTechResist', 'ConditionalTechResist');
            if (itemName === 'magic_carpet') rename(itemData, 'FlyMoveSpeed', 'ConditionalMovespeed');
            if (itemName === 'lucky_shot') rename(itemData, 'ProcChance', 'CritProcChance');
            if (itemName === 'tesla_bullets') rename(itemData, 'ProcChance', 'TeslaProcChance');
            if (itemName === 'ethereal_shift') rename(itemData, 'BonusTechPower', 'ActiveBonusTechPower');
            if (itemName === 'backstabber') rename(itemData, 'BonusMoveSpeed', 'ActiveBonusMoveSpeed');
            if (itemName === 'weighted_shots') rename(itemData, 'BonusBulletSpeedPercent', 'NegativeBonusBulletSpeedPercent');
            if (itemName === 'weighted_shots') rename(itemData, 'StaminaCooldownReduction', 'NegativeStaminaCooldownReduction');
            if (itemName === 'guardian_ward') rename(itemData, 'GuardianWardCombatBarrier', 'ConditionalBarrier');
            if (itemName === 'divine_barrier') rename(itemData, 'CombatBarrier', 'ConditionalBarrier');
            if (itemName === 'infuser') rename(itemData, 'AbilityLifestealPercentHeroPassive', 'LifestealPercentHero');

            // Add missing data
            if (itemName === 'frenzy') itemData['Description'] = 'While you are below 50% health, you gain stat bonuses.';
            if (itemName === 'silencer') itemData['Description'] = 'Your bullets build up to a Silence. Victims are immune to the build up for 10s after silence expires. Your bullets reduce the target\'s outgoing sprit damage.';
            if (itemName === 'restorative_locket') itemData['Description'] = 'Consume all stacks to heal target ally and replenish 2 stamina points. Can be self-cast.';
            if (itemName === 'debuff_remover') itemData['Description'] = 'Purge all non-ultimate negative effects currently applied to you. If any effects were removed, heal yourself and gain a move speed bonus. Cannot be used while Stunned or Slept.';
            if (itemName === 'stamina_master') itemData['Description'] = 'Increases the number of Air Dashes and Air Jumps that can be performed before landing from 1 to 2';
            if (itemName === 'echo_shard') itemData['Description'] = 'Reset the cooldown of the imbued non-ultimate ability.';
            if (itemName === 'stamina_mastery') itemData['Description'] = 'Allows an additional use of Air Jump or Air Dash before landing.';
            if (itemName === 'juggernaut') itemData['Description'] = 'Enemies that shoot you have their Fire Rate slowed.';
            if (itemName === 'extended_magazine') itemData['BonusClipSizePercent'] = '25';
            if (itemName === 'extended_magazine') itemData['BaseAttackDamagePercent'] = '6';
            if (itemName === 'armor_piercing_rounds') itemData['BonusBulletSpeedPercent'] = '30';
            if (itemName === 'armor_piercing_rounds') itemData['TeslaProcChance'] = '65';

            // Delete bad data
            if (itemName === 'mystic_shot') delete itemData['Radius'];
            if (itemName === 'lucky_shot') delete itemData['Radius'];
            if (itemName === 'silencer') delete itemData['BaseAttackDamagePercent'];
            if (itemName === 'majestic_leap') delete itemData['SlowPercent'];
            if (itemName === 'extended_magazine') delete itemData['BonusClipSize'];
            if (itemName === 'cultist_sacrifice') delete itemData['BonusAbilityCharges'];
            if (itemName === 'restorative_shot') delete itemData['Radius'];
            if (itemName === 'mystic_shot') delete itemData['ProcCooldown'];
            if (itemName === 'armor_piercing_rounds') delete itemData['BaseAttackDamagePercent'];
            if (itemName === 'glass_cannon') delete itemData['SlowPercent'];
            if (itemName === 'leech') delete itemData['HealAmpReceivePenaltyPercent'];
            if (itemName === 'siphon_bullets') delete itemData['MaxStacks'];
            if (itemName === 'witchmail') delete itemData['CooldownReduction'];
            if (itemName === 'improved_spirit') delete itemData['BonusSprintSpeed'];
            if (itemName === 'improved_spirit') delete itemData['BonusHealth'];
            if (itemName === 'arctic_blast') delete itemData['SlowPercent'];
            if (itemName === 'boundless_spirit') delete itemData['BaseAttackDamagePercent'];
            if (itemName === 'lightning_scroll') delete itemData['SlowPercent'];
            if (itemName === 'mystic_reverb') delete itemData['MaxHealthDamage'];
            if (itemName === 'refresher') delete itemData['TechResist'];
            if (itemName === 'refresher') delete itemData['BulletResist'];
            
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