import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

interface ContactMethod {
  icon: React.ElementType;
  title: string;
  value: string;
  link?: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: Phone,
    title: "Phone",
    value: "+358 40 123 4567",
    link: "tel:+358401234567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@company.com",
    link: "mailto:hello@company.com",
  },
];

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden px-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-7xl mx-auto py-12 md:py-24">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground/80">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-xl bg-background/50 border-primary/5 shadow-2xl rounded-3xl">
            <CardContent className="p-6 md:p-12">
              <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12">
                <div className="md:col-span-1">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    Contact Info
                  </h2>
                  <div className="flex flex-col gap-4">
                    {contactMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <div key={method.title} className="group">
                          <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-secondary/50 transition-all duration-300">
                            <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground/70 mb-1">
                                {method.title}
                              </p>
                              {method.link ? (
                                <a
                                  href={method.link}
                                  className="font-medium hover:text-primary transition-colors"
                                >
                                  {method.value}
                                </a>
                              ) : (
                                <p className="font-medium">{method.value}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    Send a Message
                  </h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground/70">
                          First Name
                        </label>
                        <Input className="rounded-xl bg-secondary/30 border-primary/5 backdrop-blur-sm" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground/70">
                          Last Name
                        </label>
                        <Input className="rounded-xl bg-secondary/30 border-primary/5 backdrop-blur-sm" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground/70">
                        Email
                      </label>
                      <Input
                        type="email"
                        className="rounded-xl bg-secondary/30 border-primary/5 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground/70">
                        Subject
                      </label>
                      <Input className="rounded-xl bg-secondary/30 border-primary/5 backdrop-blur-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground/70">
                        Message
                      </label>
                      <Textarea className="min-h-[120px] rounded-xl bg-secondary/30 border-primary/5 backdrop-blur-sm" />
                    </div>
                    <Button className="w-full rounded-xl bg-gradient-to-r from-primary via-purple-500 to-blue-600 hover:opacity-90">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
