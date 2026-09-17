import { Check } from "lucide-react";
import type { PricingPlan } from "@/data/pricing";

export function PricingFeatureList({ groups }: { groups: PricingPlan["featureGroups"] }) {
  return (
    <div className="pricing-feature-groups">
      {groups.map((group) => (
        <div className="pricing-feature-group" key={group.label}>
          <p>{group.label}</p>
          <ul>
            {group.features.map((feature) => (
              <li key={feature}><Check size={15} strokeWidth={2.5} />{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
