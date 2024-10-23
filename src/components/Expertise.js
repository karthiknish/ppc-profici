"use client";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Expertise() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
        >
          Our Expertise
        </motion.h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Platform</TableHead>
              <TableHead>Ad Types</TableHead>
              <TableHead>Key Features</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Google Ads</TableCell>
              <TableCell>Search, Display, Shopping, Video</TableCell>
              <TableCell>Keyword targeting, Remarketing, Local ads</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Facebook Ads</TableCell>
              <TableCell>Image, Video, Carousel, Collection</TableCell>
              <TableCell>
                Detailed audience targeting, Lookalike audiences
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>LinkedIn Ads</TableCell>
              <TableCell>Sponsored Content, Message Ads, Text Ads</TableCell>
              <TableCell>Professional targeting, InMail campaigns</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </motion.section>
  );
}
