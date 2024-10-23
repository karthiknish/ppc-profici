"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="faq"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is PPC management?</AccordionTrigger>
            <AccordionContent>
              PPC management involves overseeing and optimizing pay-per-click
              advertising campaigns to maximize their effectiveness and return
              on investment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How long does it take to see results?
            </AccordionTrigger>
            <AccordionContent>
              While some improvements can be seen almost immediately,
              significant results typically start to show within 3-6 months of
              consistent optimization and management.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can you work with my existing campaigns?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we can take over and optimize your existing campaigns, or we
              can create new campaigns from scratch based on your business goals
              and target audience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What platforms do you work with?
            </AccordionTrigger>
            <AccordionContent>
              We specialize in Google Ads, Microsoft Advertising (Bing Ads),
              Facebook Ads, and LinkedIn Ads, but we can also work with other
              platforms based on your needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.section>
  );
}
