"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
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
              </motion.div>
            </CarouselItem>
            <CarouselItem>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Expert Team</CardTitle>
                    <CardDescription>
                      Sarah Johnson, Marketing Director at GrowFast
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      &quot;The level of expertise and attention to detail from
                      Profici&apos;s team is unmatched. They truly understand
                      PPC.&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
            <CarouselItem>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Game-Changing Strategies</CardTitle>
                    <CardDescription>
                      Mike Brown, Founder of StartupX
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      &quot;Profici&apos;s innovative strategies have helped us
                      outperform our competitors and scale our business
                      rapidly.&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </motion.section>
  );
}
