import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "What does GrowPeak Media do?",
    answer: "GrowPeak Media is a creative agency specializing in video production, branding, and social media marketing. We help businesses grow by creating compelling content, optimizing their digital presence, and launching powerful brand identities."
  },
  {
    id:2,
    question: "Whom are your services best suited for?",
    answer: "Our services are ideal for startups, small businesses, influencers, and brands looking to build or enhance their online presence through professional videos and strategic digital marketing."
  },
  { 
    id:3,
    question: "What types of videos do you produce?",
    answer: "We produce a wide range of videos including Brand stories, Product showcases, Corporate promos, Social media reels, Explainer videos, Testimonials & case studies, Event coverage."
  },
  { 
    id:4,
    question: "Do you offer social media management too?",
    answer: "Yes! We offer full social media management services including content planning, design, caption writing, posting, and analytics for platforms like Instagram, Facebook, and LinkedIn."
  },
  { 
    id:5,
    question: "What are your most popular service packages?",
    answer: [
      "Digital Starter Pack – For new businesses",
      "Smart Business Setup – For brands ready to scale",
      "Complete Brand Launch Kit – For full-scale branding and marketing"
    ]
  },
  { 
    id:6,
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope, but most Video Projects take maximum 15 working days while Full Branding Packages take almost 20 days from concept to delivery. Social Media Management is ongoing with a 10-15 days planning."
  },
  { 
    id:7,
    question: "Do you work with clients outside your city?",
    answer: "Absolutely. We work with clients across India and globally. Remote collaboration is seamless through Zoom, WhatsApp, and cloud sharing tools."
  },
  { 
    id:8,
    question: "Can I request custom packages or services?",
    answer: "Yes! We understand every business is unique. Just share your needs, and we’ll create a custom plan tailored to your goals and budget."
  },
  {
    id:9,
    question: "How should I get started?",
    answer: "Getting started is easy! Just fill out our contact form or reach out via email/phone. We’ll schedule a consultation call to discuss your needs and how we can help."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
    <div className="space-y-4">
        {faqs.map((faq, index) => (
    <div key={index} className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-purple-100 transition"
    onClick={() => setOpenIndex(openIndex === index ? null : index)}>

      <h3 className="text-lg font-semibold">{faq.question}</h3>
      {openIndex === index && (
      <div className="mt-2 mb-2 text-gray-950">
        {Array.isArray(faq.answer) ? (
          <ul className="list-disc ml-6">
            {faq.answer.map((item, i) => ( 
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{faq.answer}</p>
        )}
      </div>
      )}
    </div>
    ))}
    </div>
    </section>
  );
}
