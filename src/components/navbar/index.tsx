import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "goals", label: "Goals" },
    { id: "amounts", label: "Amounts" },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id as any);
    setOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <nav className="w-full max-w-4xl bg-background/80 backdrop-blur-sm border border-primary/10 rounded-b-2xl">
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold">HuikkaThon subathon</div>

            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[240px]">
                  <div className="mt-8 flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Button
                        key={item.id}
                        variant="ghost"
                        className="justify-start"
                        onClick={() => handleNavClick(item.id)}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
