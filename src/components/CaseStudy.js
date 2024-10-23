"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CaseStudy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="case-studies"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
        >
          Case Studies
        </motion.h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>E-commerce Success Story</CardTitle>
                <CardDescription>
                  How we helped an online retailer increase sales by 150%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our tailored PPC strategy for this e-commerce client resulted
                  in:
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
