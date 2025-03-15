function ToursLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="py-2 w-1/2 mx-auto">
        <h1 className="text-3xl mb-4">Tours</h1>
      </header>
      {children}
    </div>
  );
}

export default ToursLayout;
