import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center tracking-tighter py-4 gradient-title bg-gradient-to-br from-gray-500 via-gray-200 to-white text-transparent bg-clip-text text-4xl font-extrabold sm:text-6xl lg:text-8xl">
          Find your Dream Job <span> and get hired</span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex justify-center gap-6">
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button size="xl" variant="destructive">
            Post a Job
          </Button>
        </Link>
      </div>
      {/* {Carousel} */}
      <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full py-10">
        <CarouselContent className="flex gap-5 lg:gap-20 items-center">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <img src="/banner.png" className=" w-full h-150 rounded-xl border" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl' >For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent className='text-blue-600'>
            Search and apply for jobs, track application, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>For Employers</CardTitle>
          </CardHeader>
          <CardContent className='text-blue-600'>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>
      <Accordion type="single" collapsible className='bg-card text-card-foreground flex flex-col rounded-xl border  shadow-sm px-5'>
        {faqs.map((faq, index)=>{
          return(
          <AccordionItem key={index} value={`item-${index+1}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
        );
        })}
        
      </Accordion>
    </main>
  );
};

export default LandingPage;
