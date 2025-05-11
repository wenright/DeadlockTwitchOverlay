
import { UpgradeSpec, defaultUpgradeSpec } from "./upgradeMapping"

export const conditionalUpgrades: { [key: string]: UpgradeSpec } = {
  BonusSpirit: {
    ...defaultUpgradeSpec,
    readableName: 'Bonus Spirit Power',
    signSuffix: ''
  },
  BonusSpiritWithMagicShield: {
    ...defaultUpgradeSpec,
    readableName: 'Bonus Spirit With Spirit Shield',
    signSuffix: ''
  },
  ProcBonusMagicDamage: {
    ...defaultUpgradeSpec,
    readableName: 'Bonus Spirit Damage',
    signSuffix: ''
  },
  ConditionalLifestealPercentHero: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Lifesteal',
  },
  ConditionalAbilityLifestealPercentHero: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Lifesteal',
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
  ConditionalBulletLifestealPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Lifesteal',
  },
  ActiveBonusFireRate: {
    ...defaultUpgradeSpec,
    readableName: 'Fire Rate',
  },
  ConditionalBonusFireRate: {
    ...defaultUpgradeSpec,
    readableName: 'Fire Rate',
    signSuffix: '%',
  },
  ConditionalFireRateBonus: {
    ...defaultUpgradeSpec,
    readableName: 'Fire Rate',
    signSuffix: '%',
  },
  ConditionalFireRateSlow: {
    ...defaultUpgradeSpec,
    readableName: 'Fire Rate Slow',
    signPrefix: '',
  },
  DeflectionPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Deflection Percent',
    signPrefix: '',
  },
  BulletProcDeflectionPercent: {
    ...defaultUpgradeSpec,
    readableName: 'On-Hit Prevention Percent',
    signPrefix: '',
  },
  ActiveBonusTechPower: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Power',
    signSuffix: '',
  },
  HealFromHero: {
    ...defaultUpgradeSpec,
    readableName: 'Healing From Heroes',
    signPrefix: '',
    signSuffix: '',
  },
  HealingPerCast: {
    ...defaultUpgradeSpec,
    readableName: 'Healing on Ability Cast',
    signPrefix: '',
    signSuffix: '',
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
  SpiritDamage: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Damage',
    signPrefix: '',
    signSuffix: '',
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
  ConditionalBonusClipSize: {
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
  BulletResistBelowThreshold: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Resist',
  },
  TechResistBelowThreshold: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Resist',
  },
  BuffBulletResist: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Resist',
  },
  BuffTechResist: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Resist',
  },
  HealOnActivate: {
    ...defaultUpgradeSpec,
    readableName: 'HP Healed on Activate',
    signPrefix: '',
    signSuffix: '',
  },
  BulletResistDuration: {
    ...defaultUpgradeSpec,
    readableName: 'Stack Duration',
    signSuffix: 's'
  },
  ReturnFireBulletResist: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Resist',
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
  ConditionalCooldownReduction: {
    ...defaultUpgradeSpec,
    readableName: 'Cooldown Reduction',
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
  TechRangeMultiplierBuff: {
    ...defaultUpgradeSpec,
    readableName: 'Ability Range',
  },
  TechPowerReduction: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Power',
    signPrefix: '',
    signSuffix: '',
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
    signPrefix: '',
    readableName: 'Bullet Resist Reduction',
  },
  ConditionalBulletResist: {
    ...defaultUpgradeSpec,
    readableName: 'Bullet Resist',
  },
  ConditionalBulletResistReloadSpeedMultipler: {
    ...defaultUpgradeSpec,
    readableName: 'Reload Time',
    signPrefix: '',
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
    signPrefix: '',
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
    signPrefix: '',
    signSuffix: '%'
  },
  OutgoingDamagePenaltyPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Damage Penalty',
    signPrefix: '',
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
    signPrefix: '',
    signSuffix: '',
  },
  MaxHealthPercentAsDPS: {
    ...defaultUpgradeSpec,
    readableName: 'Max Health per Second',
    signPrefix: '',
  },
  ExplosionDamage: {
    ...defaultUpgradeSpec,
    readableName: 'Explosion Damage',
    signPrefix: '',
    signSuffix: '',
  },
  BulletsBonusMagicDamage: {
    ...defaultUpgradeSpec,
    readableName: 'Base Bullet Damage',
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
    signPrefix: '',
    signSuffix: '%',
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
  ConditionalTechRangeMultiplier: {
    ...defaultUpgradeSpec,
    readableName: 'Ability Range',
  },
  ConditionalBonusAbilityDurationPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Ability Duration',
  },
  ConditionalSpiritPower: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Power',
    signSuffix: '',
  },
  DamagePulseAmount: {
    ...defaultUpgradeSpec,
    readableName: 'Pulse Damage',
    signPrefix: '',
    signSuffix: '',
  },
  DamagePulseRadius: {
    ...defaultUpgradeSpec,
    readableName: 'Pulse Radius',
    signPrefix: '',
    signSuffix: ''
  },
  PercentDamage: {
    ...defaultUpgradeSpec,
    readableName: 'Frozen Bonus Damage',
  },
  StunDuration: {
    ...defaultUpgradeSpec,
    readableName: 'Stun Duration',
    signPrefix: '',
    signSuffix: 's',
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
    signSuffix: '%'
  },
  ShootDurationForMax: {
    ...defaultUpgradeSpec,
    readableName: 'Time for Max Damage',
    signSuffix: 's'
  },
  BonusHeavyMeleeDamage: {
    ...defaultUpgradeSpec,
    readableName: 'Bonus Heavy Damage',
    signSuffix: '%'
  },
  WeaponDamagePerStack: {
    ...defaultUpgradeSpec,
    readableName: 'Weapon Damage per Stack',
  },
  DotHealthPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Bleed Damage/sec',
    signPrefix: '',
  },
  ConditionalBaseAttackDamagePercent: {
    ...defaultUpgradeSpec,
    readableName: 'Weapon Damage',
  },
  ProcBaseAttackDamagePercent: {
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
    signPrefix: '',
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
  DeathImmunityDamageReduction: {
    ...defaultUpgradeSpec,
    readableName: 'Damage Reduction ',
    signPrefix: '',
    signSuffix: '%'
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
  },
  MaxHealthDamage: {
    ...defaultUpgradeSpec,
    readableName: 'Max Health Damage',
    signSuffix: '%'
  },
  Regeneration: {
    ...defaultUpgradeSpec,
    readableName: 'Regeneration',
    signPrefix: '',
    signSuffix: 'HP/s',
  },
  TechArmorDamageReduction: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Resist',
    signPrefix: '',
  },
  SpiritDamageReductionProc: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Damage Reduction',
    signPrefix: '',
  },
  TechPowerGain: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Power for You',
    signSuffix: '',
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
    readableName: 'Spirit Shield',
    signSuffix: ''
  },
  SpiritShieldOnCast: {
    ...defaultUpgradeSpec,
    readableName: 'Spirit Shield',
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
  VexBarrierCombatBarrier: {
    ...defaultUpgradeSpec,
    readableName: 'Barrier',
    signPrefix: '',
    signSuffix: ''
  },
  ConditionalBarrier: {
    ...defaultUpgradeSpec,
    readableName: 'Barrier',
    signPrefix: '',
    signSuffix: ''
  },
  ConditionalCombatBarrier: {
    ...defaultUpgradeSpec,
    readableName: 'Barrier',
    signPrefix: '',
    signSuffix: ''
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
  MoveWhileShootingSpeedPenaltyReductionPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Shooting Move Speed Penalty Reduction',
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
  StackingBonusHealth: {
    ...defaultUpgradeSpec,
    readableName: 'Bonus Health',
    signSuffix: ''
  },
  StackingTechRangeMultiplier: {
    ...defaultUpgradeSpec,
    readableName: 'Ability Range',
  },
  StackingGoldPerMinute: {
    ...defaultUpgradeSpec,
    readableName: 'Souls per Minute',
  },
  HealOnVeil: {
    ...defaultUpgradeSpec,
    readableName: 'Heal',
    signPrefix: '',
    signSuffix: '',
  },
  GroundDashReductionPercent: {
    ...defaultUpgradeSpec,
    readableName: 'Dash Distance',
    signPrefix: '',
  },
  ActiveMoveSpeedPenalty: {
    ...defaultUpgradeSpec,
    readableName: 'Active Movespeed Penalty',
    signPrefix: '',
    signSuffix: '/s',
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
