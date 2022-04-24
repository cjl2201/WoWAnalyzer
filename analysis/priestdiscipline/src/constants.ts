import SPELLS from 'common/SPELLS';
import { SpellFilter } from 'parser/core/EventFilter';

export const ABILITIES_AFFECTED_BY_HEALING_INCREASES = [
  SPELLS.ATONEMENT_HEAL_NON_CRIT.id,
  SPELLS.ATONEMENT_HEAL_CRIT.id,
  SPELLS.POWER_WORD_SHIELD.id,
  SPELLS.POWER_WORD_RADIANCE.id,
  SPELLS.HALO_TALENT.id,
  SPELLS.SHADOW_MEND.id,
  // While the following spells don't double dip in healing increases, they gain the same percentual bonus from the transfer
  SPELLS.LEECH.id,
];

export const ATONEMENT_DAMAGE_SOURCES = {
  [SPELLS.MAGIC_MELEE.id]: true, // Shadow Fiend Melee
  [SPELLS.LIGHTSPAWN_MELEE.id]: true, // Lightspawn Melee
  [SPELLS.SMITE.id]: true,
  [SPELLS.PENANCE.id]: true,
  [SPELLS.HALO_DAMAGE.id]: true,
  [SPELLS.SHADOW_WORD_PAIN.id]: true,
  [SPELLS.PURGE_THE_WICKED_TALENT.id]: true,
  [SPELLS.PURGE_THE_WICKED_BUFF.id]: true,
  [SPELLS.POWER_WORD_SOLACE_TALENT.id]: true,
  [SPELLS.SCHISM_TALENT.id]: true,
  [SPELLS.DIVINE_STAR_DAMAGE.id]: true,
  [SPELLS.HOLY_NOVA.id]: true,
  [SPELLS.MIND_SEAR.id]: true,
  [SPELLS.MIND_BLAST.id]: true,
  [SPELLS.MINDGAMES.id]: true,
  [SPELLS.MINDGAMES_REVERSAL.id]: true,
  [SPELLS.ASCENDED_BLAST.id]: true,
  [SPELLS.ASCENDED_NOVA.id]: true,
  [SPELLS.ASCENDED_ERUPTION.id]: true,
};

export const ATONEMENT_SOURCE_FILTER: SpellFilter = [
  SPELLS.MAGIC_MELEE,
  SPELLS.LIGHTSPAWN_MELEE,
  SPELLS.SMITE,
  SPELLS.PENANCE,
  SPELLS.HALO_DAMAGE,
  SPELLS.SHADOW_WORD_PAIN,
  SPELLS.PURGE_THE_WICKED_TALENT,
  SPELLS.PURGE_THE_WICKED_BUFF,
  SPELLS.POWER_WORD_SOLACE_TALENT,
  SPELLS.SCHISM_TALENT,
  SPELLS.DIVINE_STAR_DAMAGE,
  SPELLS.HOLY_NOVA,
  SPELLS.MIND_SEAR,
  SPELLS.MIND_BLAST,
  SPELLS.MINDGAMES,
  SPELLS.MINDGAMES_REVERSAL,
  SPELLS.ASCENDED_BLAST,
  SPELLS.ASCENDED_NOVA,
  SPELLS.ASCENDED_ERUPTION,
];

export const SPIRIT_SHELL_COEFFICIENT = 0.8;
export const ATONEMENT_COEFFICIENT = 0.5;

export const PENANCE_COEFFICIENCT = 0.4;
export const SMITE_COEFFICIENT = 0.47;

export const POWER_WORD_SHIELD_ATONEMENT_DUR = 15000;
export const POWER_WORD_RADIANCE_ATONEMENT_DUR = 9000;
export const SHADOW_MEND_ATONEMENT_DUR = 15000;

export const SHINING_RADIANCE_INCREASE = [
  0,
  0.4,
  0.44,
  0.48,
  0.52,
  0.56,
  0.6,
  0.64,
  0.68,
  0.72,
  0.76,
  0.8,
  0.84,
  0.88,
  0.92,
  0.96,
];

export const EXALTATION_SPIRIT_SHELL_INCREASE = [
  0.05,
  0.055,
  0.06,
  0.065,
  0.07,
  0.075,
  0.08,
  0.085,
  0.09,
  0.095,
  0.1,
  0.105,
  0.11,
  0.115,
  0.12,
];

export const SHATTERED_PERCEPTIONS_INCREASE = [
  0.13,
  0.143,
  0.156,
  0.169,
  0.182,
  0.195,
  0.208,
  0.221,
  0.234,
  0.247,
  0.26,
  0.273,
  0.286,
  0.299,
  0.312,
];

export const SWIFT_PENITENCE_INCREASE = [
  0.3,
  0.33,
  0.36,
  0.39,
  0.42,
  0.45,
  0.48,
  0.51,
  0.54,
  0.57,
  0.6,
  0.63,
  0.66,
];
