// Making item-data.json more readable
export type UpgradeSpec = {
  readableName: string,
  signPrefix: string,
  signSuffix: string,
}

export const defaultUpgradeSpec = {
  signPrefix: '+',
  signSuffix: '%',
}

export const simpleUpgrades: { [key: string]: UpgradeSpec } = {
  BonusHealth: {
    ...defaultUpgradeSpec,
    readableName: 'Bonus Health',
    signSuffix: '',
  },
  BonusHealthRegen: {
    ...defaultUpgradeSpec,
    readableName: 'Health Regen',
    signSuffix: '',
  },
  MaxHealthLossPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Max Health',
    signSuffix: '%',
    signPrefix: '',
  },
  CooldownReduction: {
    ...defaultUpgradeSpec,
    readableName: 'Cooldown Reduction',
  },
  CooldownBetweenChargeReduction: {
    ...defaultUpgradeSpec,
    readableName: 'Cooldown Between Charge Reduction',
  },
  CooldownReductionOnChargedAbilities: {
    ...defaultUpgradeSpec,
    readableName: 'Cooldown Reduction for Charged Abilities',
  },
  BonusAbilityCharges: {
    ...defaultUpgradeSpec,
    readableName: 'Bonus Ability Charges',
    signSuffix: '',
  },
  ImbuedCooldownReduction: {
    ...defaultUpgradeSpec,
    readableName: 'Non-imbued Ability Cooldown Reduction',
  },
  NonImbuedCooldownReduction: {
    ...defaultUpgradeSpec,
    readableName: 'Imbued Ability Cooldown Reduction',
  },
  BaseAttackDamagePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Weapon Damage',
  },
  BonusFireRate: {
    ...defaultUpgradeSpec,
    readableName: 'Fire Rate',
    signSuffix: '%',
  },
  BonusFireRatePlayerUnit: {
    ...defaultUpgradeSpec,
    readableName: 'Minions Fire Rate',
  },
  BonusClipSizePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Ammo',
  },
  BonusClipSize: {
    ...defaultUpgradeSpec,
    readableName: 'Ammo',
    signPrefix: '+',
    signSuffix: '',
  },
  BonusBulletSpeedPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Velocity',
  },
  BonusZoomPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Weapon Zoom',
  },
  BonusAttackRangePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Weapon Fall-off Range',
  },
  BonusMeleeDamagePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Melee Damage',
  },
  MeleeDistanceScale: {
    ...defaultUpgradeSpec,
    readableName: 'Heavy Melee Distance',
    signPrefix: '',
  },
  MeleeResistPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Melee Resist',
  },
  NonPlayerBonusWeaponPower: {
    ...defaultUpgradeSpec,
    readableName: 'Weapon Damage vs NPCs',
  },
  NonPlayerBulletResist: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Resist vs NPCs',
  },
  ReloadSpeedMultipler: {
    ...defaultUpgradeSpec,
    readableName: 'Reload Time',
    signPrefix: '',
  },
  TechPower: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Power',
    signSuffix: '',
  },
  SpiritPower: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Power',
    signSuffix: '',
  },
  ShreddersTechAmp: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Amp Proc',
  },
  LifestealPercentHero: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Lifesteal',
  },
  AbilityLifestealPercentHero: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Lifesteal',
  },
  BulletLifestealPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Lifesteal',
  },
  MovementSpeedSlow: {
    ...defaultUpgradeSpec,
    readableName: 'Movement Speed Slow',
  },
  BulletResist: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Resist',
  },
  LocalBulletArmorReduction: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Resist',
    signPrefix: '',
  },
  TechResist: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Resist',
  },
  BulletShieldMaxHealth: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Shield Health',
    signSuffix: '',
  },
  TechShieldMaxHealth: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Shield Health',
    signSuffix: '',
  },
  Charges: {
    ...defaultUpgradeSpec,
    readableName: 'Charges',
    signSuffix: '',
  },
  TechRangeMultiplier: {
    ...defaultUpgradeSpec,
    readableName: 'Ability Range',
  },
  ImbuedTechRangeMultiplier: {
    ...defaultUpgradeSpec,
    readableName: 'Imbued Ability Range',
  },
  NonImbuedTechRangeMultiplier: {
    ...defaultUpgradeSpec,
    readableName: 'Non-imbued Ability Range',
  },
  BonusAbilityDurationPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Ability Duration',
  },
  ImbuedBonusDuration: {
    ...defaultUpgradeSpec,
    readableName: 'Imbued Ability Duration',
  },
  NonImbuedBonusDuration: {
    ...defaultUpgradeSpec,
    readableName: 'Non-imbued Ability Duration',
  },
  BonusSprintSpeed: {
    ...defaultUpgradeSpec,
    readableName: 'Sprint Speed',
    signSuffix: '/s',
  },
  BonusMoveSpeed: {
    ...defaultUpgradeSpec,
    readableName: 'Move Speed',
    signSuffix: '/s',
  },
  SlideScale: {
    ...defaultUpgradeSpec,
    readableName: 'Slide Distance',
  },
  Stamina: {
    ...defaultUpgradeSpec,
    readableName: 'Stamina',
    signSuffix: '',
  },
  CombatBarrier: {
    ...defaultUpgradeSpec,
    readableName: 'Barrier',
    signSuffix: '',
  },
  StaminaCooldownReduction: {
    ...defaultUpgradeSpec,
    readableName: 'Stamina Recovery',
  },
  AirMoveIncreasePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Stamina Recovery',
  },
  StatusResistancePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Debuff Resist',
    signSuffix: '%'
  },
  SlowPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Slow',
  },
  SlowResistancePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Movement Slow Resist ',
  },
}
