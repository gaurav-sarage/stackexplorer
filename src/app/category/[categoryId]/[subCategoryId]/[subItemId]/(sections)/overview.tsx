import React from 'react';

export default function Overview({ overview }: { overview: any }) {
  return (
    <div className="border p-8 leading-8 w-full grid grid-cols-4">
      {overview.features && overview.features.length > 0 && (
        <div className="col-span-4">
          <h2 className="font-bold mb-2">Overview</h2>
          <ul className="list-disc pl-5 mb-4">
            {overview.features.map((feature: any, idx: any) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
