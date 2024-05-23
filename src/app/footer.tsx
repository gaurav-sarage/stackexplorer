import MainNav from '@/components/main-nav';
import NewSubscriberForm from '@/components/new-subscriber-form';


export default function Footer() {
  return (
    <footer className="z-10 border-t border-gray-200 bg-white/50 py-8 backdrop-blur-lg">
      <div className="container w-full">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-end md:justify-between w-full ">
          <div className="space-y-8 flex flex-col">
            <MainNav />
            <p className="max-w-xs text-sm text-gray-500">
              Discover the right tools for your next project effortlessly,
              saving you hours of research time.
            </p>
          </div>
          <div className='md:max-w-sm w-full'>
            <NewSubscriberForm />
          </div>
        </div>
        <div className="mt-10 border-t border-gray-900/10 pt-8">
          <p className="text-sm leading-5 text-gray-500">
            @ 2024 StackExplorer. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
