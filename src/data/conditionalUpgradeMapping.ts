
import { UpgradeSpec, defaultUpgradeSpec } from "./upgradeMapping"

export const conditionalUpgrades: { [key: string]: UpgradeSpec } = {
  BonusSpirit: {
    ...defaultUpgradeSpec,
    readableName: 'Bonus Spirit',
    signSuffix: ''
  },
  BonusSpiritWithMagicShield: {
    ...defaultUpgradeSpec,
    readableName: 'Bonus Spirit With Spirit Shield',
    signSuffix: ''
  },
  ConditionalLifestealPercentHero: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Life Steal',
  },
  SpiritPowerGainPct: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit power per stack',
    signSuffix: '%'
  },
  ActiveBonusLifesteal: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Lifesteal',
  },
  ActiveBonusFireRate: {
    ...defaultUpgradeSpec,
    readableName: 'Fire Rate',
  },
  ActiveBonusTechPower: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Power',
    signSuffix: '',
  },
  HealFromHero: {
    ...defaultUpgradeSpec,
    readableName: 'Healing From Heroes',
    signSuffix: ''
  },
  HealFromNPC: {
    ...defaultUpgradeSpec,
    readableName: 'Healing From NPCs',
    signSuffix: ''
  },
  DamageToStack: {
    ...defaultUpgradeSpec,
    readableName: 'Damage Taken to Stack',
    signSuffix: ''
  },
  WeaponPowerPerStack: {
    ...defaultUpgradeSpec,
    readableName: 'Damage per Stack',
  },
  BulletDamageReflectedPct: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Damage Returned',
    signPrefix: '',
  },
  SpiritDamageReflectedPct: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Damage Returned',
    signPrefix: '',
  },
  MaxStacks: {
    ...defaultUpgradeSpec,
    readableName: 'Max Stacks',
    signPrefix: '',
    signSuffix: '',
  },
  HealPerStack: {
    ...defaultUpgradeSpec,
    readableName: 'Heal per Stack',
    signPrefix: '',
    signSuffix: '',
  },
  ActiveBonusMoveSpeed: {
    ...defaultUpgradeSpec,
    readableName: 'Bonus Move Speed',
    signSuffix: '/s'
  },
  ConditionalBonusSprintSpeed: {
    ...defaultUpgradeSpec,
    readableName: 'Bonus Sprint Speed',
    signSuffix: '/s'
  },
  ConditionalBonusClipSizePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Temporary Ammo',
    signSuffix: ''
  },
  ActivatedFireRate: {
    ...defaultUpgradeSpec,
    readableName: 'Fire Rate',
  },
  ConditionalBonusMoveSpeed: {
    ...defaultUpgradeSpec,
    readableName: 'Move Speed',
    signSuffix: '/s'
  },
  MaxArmorStacks: {
    ...defaultUpgradeSpec,
    readableName: 'Max Bullet Resist',
  },
  BulletResistPerStack: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Resist per Stack',
  },
  BulletResistDuration: {
    ...defaultUpgradeSpec,
    readableName: 'Stack Duration',
    signSuffix: 's'
  },
  HeadShotBonusDamage: {
    ...defaultUpgradeSpec,
    readableName: 'Head Shot Bonus Damage',
    signSuffix: ''
  },
  HealPercentPerHeadshot: {
    ...defaultUpgradeSpec,
    readableName: 'Heal per Head Shot',
  },
  HeadShotCooldown: {
    ...defaultUpgradeSpec,
    readableName: 'Head Shot Bonus Cooldown',
    signSuffix: 's',
    signPrefix: ''
  },
  AttackDamageWhenShielded: {
    ...defaultUpgradeSpec,
    readableName: 'Weapon Damage While Shielded',
    signSuffix: '%',
  },
  FireRateWhenShielded: {
    ...defaultUpgradeSpec,
    readableName: 'Fire Rate While Shielded',
    signSuffix: '%',
  },
  CooldownReductionWithShield: {
    ...defaultUpgradeSpec,
    readableName: 'Cooldown Reduction While Shielded',
    signSuffix: '%',
  },
  SlowResistancePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Slow Resistance Percent',
    signSuffix: '%',
  },
  TotalHealthRegen: {
    ...defaultUpgradeSpec,
    readableName: 'Total Health Regen',
    signSuffix: ''
  },
  CastRange: {
    ...defaultUpgradeSpec,
    readableName: 'Cast Range',
    signPrefix: '',
    signSuffix: ''
  },
  LongRangeBonusWeaponPower: {
    ...defaultUpgradeSpec,
    readableName: 'Weapon Damage',
  },
  LongRangeBonusWeaponPowerMinRange: {
    ...defaultUpgradeSpec,
    readableName: 'Minimum Range',
    signPrefix: '',
    signSuffix: ''
  },
  BulletResistReduction: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Resist Reduction',
  },
  BulletArmorReduction: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Resist',
    signPrefix: '',
  },
  FireRateSlow: {
    ...defaultUpgradeSpec,
    readableName: 'Fire Rate Slow',
  },
  MagicResistReduction: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Resist Reduction',
  },
  ChannelTime: {
    ...defaultUpgradeSpec,
    readableName: 'Channel Duration',
    signSuffix: 's'
  },
  HealPercentAmount: {
    ...defaultUpgradeSpec,
    readableName: 'Heal Amount',
    signSuffix: '%'
  },
  OutgoingDamagePenaltyPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Damage Penalty',
    signSuffix: '%'
  },
  DamagePerChain: {
    ...defaultUpgradeSpec,
    readableName: 'Shock Damage',
    signPrefix: '',
    signSuffix: ''
  },
  BonusPerChain: {
    ...defaultUpgradeSpec,
    readableName: 'Damage on Jump',
    signPrefix: '',
    signSuffix: ''
  },
  Damage: {
    ...defaultUpgradeSpec,
    readableName: 'Damage',
    signPrefix: '',
    signSuffix: ''
  },
  BonusBaseWeaponDamageTaken: {
    ...defaultUpgradeSpec,
    readableName: 'Weapon Damage',
  },
  DPS: {
    ...defaultUpgradeSpec,
    readableName: 'DPS',
  },
  ConditionalMovespeed: {
    ...defaultUpgradeSpec,
    readableName: 'Movement Speed',
    signSuffix: '/s',
  },
  ConditionalFireRate: {
    ...defaultUpgradeSpec,
    readableName: 'Fire Rate',
  },
  ConditionalTechResist: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Resist',
  },
  ConditionalMovementSpeedSlow: {
    ...defaultUpgradeSpec,
    readableName: 'Movement Slow',
    signSuffix: '%'
  },
  ConditionalSlowPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Slow Percent',
    signPrefix: '',
    signSuffix: '%'
  },
  SlowDuration: {
    ...defaultUpgradeSpec,
    readableName: 'Slow Duration',
    signPrefix: '',
    signSuffix: 's'
  },
  DotHealthPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Bleed Damage',
    signSuffix: '%/sec'
  },
  AuraRadius: {
    ...defaultUpgradeSpec,
    readableName: 'Radius',
    signSuffix: '',
    signPrefix: '',
  },
  Radius: {
    ...defaultUpgradeSpec,
    readableName: 'Radius',
    signSuffix: '',
    signPrefix: '',
  },
  DamagePulseAmount: {
    ...defaultUpgradeSpec,
    readableName: 'Pulse Damage',
    signSuffix: ''
  },
  DamagePulseRadius: {
    ...defaultUpgradeSpec,
    readableName: 'Pulse Radius',
    signPrefix: '',
    signSuffix: ''
  },
  StunDuration: {
    ...defaultUpgradeSpec,
    readableName: 'Stun Duration',
    signSuffix: 's'
  },
  TechDamagePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Damage',
  },
  AmmoPerSoul: {
    ...defaultUpgradeSpec,
    readableName: 'Ammo per Soul',
    signSuffix: ''
  },
  SpiritPowerPerSoul: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit per Soul',
    signSuffix: ''
  },
  MagicIncreasePerStack: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Amp per Stack',
    signSuffix: '%'
  },
  ShreddersTechAmp: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Amp',
    signSuffix: '%'
  },
  ImbuedTechPower: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Power',
    signSuffix: ''
  },
  ConditionalStatusResistancePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Debuff Resist',
    signSuffix: '%'
  },
  ImpactDamage: {
    ...defaultUpgradeSpec,
    readableName: 'Damage',
    signPrefix: '',
    signSuffix: ''
  },
  CloseRangeBonusWeaponPower: {
    ...defaultUpgradeSpec,
    readableName: 'Weapon Damage',
  },
  CloseRangeBonusDamageRange: {
    ...defaultUpgradeSpec,
    readableName: 'Range',
    signPrefix: '',
    signSuffix: ''
  },
  BaseAttackDamagePercentAtMaxDuration: {
    ...defaultUpgradeSpec,
    readableName: 'Max Weapon Damage',
    signSuffix: ''
  },
  ShootDurationForMax: {
    ...defaultUpgradeSpec,
    readableName: 'Time for Max Damage',
    signSuffix: 's'
  },
  ConditionalBaseAttackDamagePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Weapon Damage',
  },
  BaseAttackDamagePercentBonus: {
    ...defaultUpgradeSpec,
    readableName: 'Weapon Damage',
  },
  WeaponPowerPerKill: {
    ...defaultUpgradeSpec,
    readableName: 'Weapon Damage per Kill',
  },
  CritProcChance: {
    ...defaultUpgradeSpec,
    readableName: 'Crit Proc Chance',
  },
  TeslaProcChance: {
    ...defaultUpgradeSpec,
    readableName: 'Proc Chance',
  },
  CritDamagePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Crit Bonus Damage',
  },
  RicochetDamagePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Ricochet Damage',
    signPrefix: '',
  },
  RicochetTargetsTooltipOnly: {
    ...defaultUpgradeSpec,
    readableName: 'Ricochet Targets',
    signPrefix: '',
    signSuffix: ''
  },
  HealthSteal: {
    ...defaultUpgradeSpec,
    readableName: 'Max HP Steal per Bullet',
    signPrefix: '',
    signSuffix: ''
  },
  ProcCooldown: {
    ...defaultUpgradeSpec,
    readableName: 'Max Frequency',
    signPrefix: '',
    signSuffix: 's'
  },
  BuildUpPerShot: {
    ...defaultUpgradeSpec,
    readableName: 'Buildup per Shot',
    signPrefix: '',
  },
  ActiveReloadPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Ammo',
    signPrefix: '%',
  },
  MaxHealthDamage: {
    ...defaultUpgradeSpec,
    readableName: 'Max Health Damage',
    signSuffix: '%'
  },
  ProcBonusMagicDamage: {
    ...defaultUpgradeSpec,
    readableName: 'Bonus Spirit Damage',
    signSuffix: ''
  },
  TechArmorDamageReduction: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Resist',
    signPrefix: '',
  },
  TechPowerGain: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Power',
    signPrefix: '+',
  },
  ConditionalTechPower: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Power',
    signSuffix: ''
  },
  BulletShieldOnCast: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Shield',
    signSuffix: ''
  },
  TechShieldOnCast: {
    ...defaultUpgradeSpec,
    readableName: 'Tech Shield',
    signSuffix: ''
  },
  HealAmpReceivePenaltyPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Healing Reduction',
    signPrefix: '',
    signSuffix: '%'
  },
  HealOnKill: {
    ...defaultUpgradeSpec,
    readableName: 'Heal on Kill',
    signPrefix: '',
    signSuffix: ''
  },
  HealAmpCastPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Healing Effectiveness',
    signSuffix: '%'
  },
  DegenResistance: {
    ...defaultUpgradeSpec,
    readableName: 'Heal Reduction Resistance',
    signSuffix: '%'
  },
  BarrierBulletMaxHealth: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Shield health',
    signPrefix: '',
    signSuffix: ''
  },
  BarrierTechMaxHealth: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Shield health',
    signPrefix: '',
    signSuffix: ''
  },
  DebuffDuration: {
    ...defaultUpgradeSpec,
    readableName: 'Debuff Duration',
    signPrefix: '',
    signSuffix: 's'
  },
  RegenDuration: {
    ...defaultUpgradeSpec,
    readableName: 'Regen Duration',
    signPrefix: '',
    signSuffix: 's'
  },
  Duration: {
    ...defaultUpgradeSpec,
    readableName: 'Duration',
    signPrefix: '',
    signSuffix: 's'
  },
  DamageDuration: {
    ...defaultUpgradeSpec,
    readableName: 'Duration',
    signPrefix: '',
    signSuffix: 's'
  },
  DelayDuration: {
    ...defaultUpgradeSpec,
    readableName: 'Delay Duration',
    signSuffix: 's'
  },
}
