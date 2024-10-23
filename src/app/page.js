"use client";
import * as React from "react";
import Link from "next/link";
import {
  MountainIcon,
  BarChartIcon,
  LineChartIcon,
  PieChartIcon,
  Check,
  ChevronDown,
  Menu,
  ArrowRight,
  Star,
  Users,
  Zap,
  Shield,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Component() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Supercharge Your PPC Campaigns
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Boost your ROI with Profici&apos;s expert pay-per-click
                  management. Tailored strategies, real-time optimisation, and
                  transparent reporting.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Why Choose Profici?
            </h2>
            <Tabs defaultValue="strategies" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="strategies">
                  Data-Driven Strategies
                </TabsTrigger>
                <TabsTrigger value="optimisation">
                  Real-Time Optimisation
                </TabsTrigger>
                <TabsTrigger value="reporting">
                  Transparent Reporting
                </TabsTrigger>
              </TabsList>
              <TabsContent value="strategies">
                <Card>
                  <CardHeader>
                    <CardTitle>Data-Driven Strategies</CardTitle>
                    <CardDescription>
                      Leverage advanced analytics for optimal campaign
                      performance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <BarChartIcon className="h-12 w-12 text-primary" />
                      <p>
                        Our team of experts uses cutting-edge analytics tools to
                        craft strategies that maximize your ROI.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="optimisation">
                <Card>
                  <CardHeader>
                    <CardTitle>Real-Time Optimisation</CardTitle>
                    <CardDescription>
                      Continuous monitoring and adjustments for peak efficiency.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <LineChartIcon className="h-12 w-12 text-primary" />
                      <p>
                        We constantly monitor your campaigns and make real-time
                        adjustments to ensure optimal performance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reporting">
                <Card>
                  <CardHeader>
                    <CardTitle>Transparent Reporting</CardTitle>
                    <CardDescription>
                      Clear, comprehensive reports on your campaign&apos;s
                      performance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <PieChartIcon className="h-12 w-12 text-primary" />
                      <p>
                        Receive detailed, easy-to-understand reports that
                        showcase the impact of our PPC management.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Our Process
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>1. Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We start by thoroughly analyzing your current PPC
                    performance, industry trends, and competitor strategies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2. Strategy Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Based on our analysis, we create a tailored PPC strategy
                    designed to meet your specific business goals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>3. Implementation & Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We implement the strategy and continuously optimize your
                    campaigns for maximum performance and ROI.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Choose Your Plan
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>
                    Perfect for small businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">£499/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Up to 100 keywords
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Weekly optimisation
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Monthly reporting
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>Ideal for growing companies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">£999/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Up to 500 keywords
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Bi-weekly optimisation
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Bi-weekly reporting
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      A/B testing
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large-scale operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">£1,999/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Unlimited keywords
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Daily optimisation
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Weekly reporting
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Advanced A/B testing
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Dedicated account manager
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Clients Say
            </h2>
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <Card>
                    <CardHeader>
                      <CardTitle>Incredible Results</CardTitle>
                      <CardDescription>
                        John Smith, CEO of TechCorp
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        &quot;Profici has transformed our PPC campaigns.
                        We&apos;ve seen a 200% increase in ROI since partnering
                        with them.&quot;
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <CardHeader>
                      <CardTitle>Expert Team</CardTitle>
                      <CardDescription>
                        Sarah Johnson, Marketing Director at GrowFast
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        &quot;The level of expertise and attention to detail
                        from Profici&apos;s team is unmatched. They truly
                        understand PPC.&quot;
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <CardHeader>
                      <CardTitle>Game-Changing Strategies</CardTitle>
                      <CardDescription>
                        Mike Brown, Founder of StartupX
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        &quot;Profici&apos;s innovative strategies have helped
                        us outperform our competitors and scale our business
                        rapidly.&quot;
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section
          id="case-studies"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Case Studies
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Success Story</CardTitle>
                  <CardDescription>
                    How we helped an online retailer increase sales by 150%
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our tailored PPC strategy for this e-commerce client
                    resulted in:
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      150% increase in online sales
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      200% improvement in ROAS (Return on Ad Spend)
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      30% reduction in cost per acquisition
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read Full Case Study</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>B2B Lead Generation</CardTitle>
                  <CardDescription>
                    Driving quality leads for a SaaS company
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our PPC campaign for this B2B client achieved:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      250% increase in qualified leads
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      40% reduction in cost per lead
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      75% improvement in lead quality score
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read Full Case Study</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Our Expertise
            </h2>
            <Table>
              <TableCaption>
                Platforms and ad types we specialize in
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Platform</TableHead>
                  <TableHead>Ad Types</TableHead>
                  <TableHead>Expertise Level</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Google Ads</TableCell>
                  <TableCell>Search, Display, Shopping, Video</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4 fill-primary" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Facebook Ads</TableCell>
                  <TableCell>Image, Video, Carousel, Collection</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>LinkedIn Ads</TableCell>
                  <TableCell>
                    Sponsored Content, Message Ads, Text Ads
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4 fill-primary" />
                      <Star className="w-4 h-4" />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
        <section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is PPC management?</AccordionTrigger>
                <AccordionContent>
                  PPC management involves overseeing and optimizing
                  pay-per-click advertising campaigns to maximize their
                  effectiveness and return on investment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How long does it take to see results?
                </AccordionTrigger>
                <AccordionContent>
                  While some improvements can be seen almost immediately,
                  significant results typically start to show within 3-6 months
                  of consistent optimization and management.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can you work with my existing campaigns?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we can take over and optimize your existing campaigns, or
                  we can create new campaigns from scratch based on your
                  business goals and target audience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What platforms do you work with?
                </AccordionTrigger>
                <AccordionContent>
                  We specialize in Google Ads, Microsoft Advertising (Bing Ads),
                  Facebook Ads, and LinkedIn Ads, but we can also work with
                  other platforms based on your needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Boost Your PPC Performance?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Get started with Profici today and see the difference our
                  expert PPC management can make for your business.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  <Button type="submit" className="w-full">
                    Start Your Free Trial
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link href="#" className="underline underline-offset-2">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Profici Ltd. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Cookie Policy
          </Link>
        </nav>
        <div className="flex items-center space-x-1">
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <ChevronDown className="h-4 w-4" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Light</DropdownMenuItem>
              <DropdownMenuItem>Dark</DropdownMenuItem>
              <DropdownMenuItem>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </footer>
    </div>
  );
}
