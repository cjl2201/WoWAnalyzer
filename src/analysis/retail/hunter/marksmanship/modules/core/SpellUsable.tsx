import SPELLS from 'common/SPELLS';
import { CastEvent, DamageEvent } from 'parser/core/Events';
import CoreSpellUsable from 'parser/shared/modules/SpellUsable';

class SpellUsable extends CoreSpellUsable {
  static dependencies = {
    ...CoreSpellUsable.dependencies,
  };

  lastPotentialTriggerForRapidFireReset: CastEvent | null = null;
  rapidFireResets = 0;

  onCast(event: CastEvent) {
    const spellId = event.ability.guid;
    if (this.selectedCombatant.hasLegendary(SPELLS.SURGING_SHOTS_EFFECT)) {
      if (spellId === SPELLS.AIMED_SHOT.id) {
        this.lastPotentialTriggerForRapidFireReset = event;
      } else if (spellId === SPELLS.RAPID_FIRE.id) {
        this.lastPotentialTriggerForRapidFireReset = null;
      }
    }
    super.onCast(event);
  }

  beginCooldown(triggerEvent: CastEvent | DamageEvent, spellId: number) {
    if (
      spellId === SPELLS.RAPID_FIRE.id &&
      this.selectedCombatant.hasLegendary(SPELLS.SURGING_SHOTS_EFFECT)
    ) {
      if (this.isOnCooldown(spellId)) {
        this.rapidFireResets += 1;
        this.endCooldown(
          spellId,
          this.lastPotentialTriggerForRapidFireReset
            ? this.lastPotentialTriggerForRapidFireReset.timestamp
            : undefined,
        );
      }
    }
    super.beginCooldown(triggerEvent, spellId);
  }
}

export default SpellUsable;
