"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChartIcon, LineChartIcon, PieChartIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Why() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
        >
          Why Choose Profici?
        </motion.h2>
        <Tabs defaultValue="strategies" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="strategies">Data-Driven Strategies</TabsTrigger>
            <TabsTrigger value="optimisation">
              Real-Time Optimisation
            </TabsTrigger>
            <TabsTrigger value="reporting">Transparent Reporting</TabsTrigger>
          </TabsList>
          <TabsContent value="strategies">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
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
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <BarChartIcon className="h-12 w-12 text-primary" />
                    </motion.div>
                    <p>
                      Our team of experts uses cutting-edge analytics tools to
                      craft strategies that maximize your ROI.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="optimisation">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Real-Time Optimisation</CardTitle>
                  <CardDescription>
                    Continuous monitoring and adjustments for peak efficiency.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <LineChartIcon className="h-12 w-12 text-primary" />
                    </motion.div>
                    <p>
                      We constantly monitor your campaigns and make real-time
                      adjustments to ensure optimal performance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="reporting">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
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
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <PieChartIcon className="h-12 w-12 text-primary" />
                    </motion.div>
                    <p>
                      Receive detailed, easy-to-understand reports that showcase
                      the impact of our PPC management.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
}
