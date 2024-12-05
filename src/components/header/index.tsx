const Header = () => {
  return (
    <nav className="fixed top-0 w-full max-w-4xl bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Logo
            </span>
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="/"
                className="text-sm font-medium hover:text-blue-500 transition-colors"
              >
                Home
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="/team"
                className="text-sm font-medium hover:text-blue-500 transition-colors"
              >
                Team
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="/services"
                className="text-sm font-medium hover:text-blue-500 transition-colors"
              >
                Services
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="/showcase"
                className="text-sm font-medium hover:text-blue-500 transition-colors"
              >
                Showcase
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="/contact"
                className="text-sm font-medium hover:text-blue-500 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
