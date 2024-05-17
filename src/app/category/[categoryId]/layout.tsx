import HorizontalNav from '@/components/horizontal-nav';

import Header from './header';

export default function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    categoryId: string;
  };
}) {
  return (
    <div className="mb-6">
      <div className="flex flex-col space-y-6 flex-1 container">
        <HorizontalNav categoryId={params.categoryId} />
        {children}
      </div>
    </div>
  );
}
