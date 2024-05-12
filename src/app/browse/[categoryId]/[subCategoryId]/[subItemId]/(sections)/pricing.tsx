import React from "react";

export default function Pricing({
    pricing,
}: {
    pricing: {
        name: string;
    }[];
}) {
    return (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {pricing.map((plan: any, idx: any) => (
                <div
                    key={idx}
                    className="text-center gap-4 flex flex-col border p-4 rounded-lg bg-slate-50"
                >
                    <h3 className="font-bold">{plan.name}</h3>
                    <p>{plan.price}</p>
                    {plan.features && plan.features.length > 0 && (
                        <ul className="leading-8 pl-5">
                            {plan.features.map((feature: any, featureIdx: any) => (
                                <li key={featureIdx}>
                                    {feature}
                                </li>
                            ))};
                        </ul>
                    )};
                </div>
            ))};
        </div>
    );
};