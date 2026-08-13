import Header from "../components/section/header.jsx";

export default function DefaultLayout({ children }) {
  return (
    <div className="bg-background text-primary">
      <header className="w-full">
        <Header />
      </header>
      <div className="mx-auto w-full px-4 sm:px-6  lg:pt-8 flex flex-col min-h-screen gap-2">
        <main className="flex flex-1 justify-center items-center">
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}