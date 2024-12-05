import { Button } from "@/components/ui/button";
import { ArrowDownRight } from "lucide-react";

function Frontpage() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Sup! We are Pöhinä Group 🚀
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              We are a group of passionate developers who love to create amazing
              things. We are always looking for new projects to work on and new
              people to work with. We don't just build SaaS products, we build
              digital experiences.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto">Meet our team</Button>
              <Button variant="outline" className="w-full sm:w-auto">
                See our projects
                <ArrowDownRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
              alt="placeholder hero"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Frontpage;
