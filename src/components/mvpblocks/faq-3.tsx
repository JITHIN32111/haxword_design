  'use client';

  import { useState } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { ChevronDown, Mail } from 'lucide-react';
  import { cn } from '../../lib/utils';
  import { Badge } from '../ui/badge';

  interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
  }

  function FAQItem({ question, answer, index }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: index * 0.15,
          ease: 'easeOut',
        }}
        className={cn(
          'group text-white border-border/60 rounded-lg border',
          'transition-all duration-200 ease-in-out',
          isOpen ? ' shadow-sm' : '',
        )}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-4 px-6 py-4"
        >
          <h3
            className={cn(
              'text-left text-base  font-medium transition-colors duration-200',
              'text-white',
              isOpen && 'text-gray-300',
            )}
          >
            {question}
          </h3>
          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0,
              scale: isOpen ? 1.1 : 1,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className={cn(
              'shrink-0 rounded-full p-0.5',
              'transition-colors duration-200',
              isOpen ? 'text-primary' : 'text-muted-foreground',
            )}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: 'auto',
                opacity: 1,
                transition: {
                  height: {
                    duration: 0.4,
                    ease: [0.04, 0.62, 0.23, 0.98],
                  },
                  opacity: {
                    duration: 0.25,
                    delay: 0.1,
                  },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.3,
                    ease: 'easeInOut',
                  },
                  opacity: {
                    duration: 0.25,
                  },
                },
              }}
            >
              <div className="border-border/40 border-t px-6 pt-2 pb-4">
                <motion.p
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                  className="text-gray-400 text-sm leading-relaxed"
                >
                  {answer}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  export default function Faq3() {
  const faqs: Omit<FAQItemProps, 'index'>[] = [
    {
      question: 'What services does your agency provide?',
      answer:
        'We offer end-to-end software development services including web and mobile app development, UI/UX design, and product consultation. We also run a training institute with real-time project exposure and placement assistance.',
    },
    {
      question: 'How does the training program work?',
      answer:
        'Our training programs are designed with industry relevance in mind. You’ll learn through hands-on projects, mentorship from professionals, and get access to internship or placement opportunities upon completion.',
    },
    {
      question: 'Can I work on live projects during the course?',
      answer:
        'Yes! As part of our curriculum, students get the chance to work on real client projects handled by our agency. This bridges the gap between learning and industry readiness.',
    },
    {
      question: 'Is there placement support available?',
      answer:
        'Definitely. We offer placement assistance through our network of hiring partners and provide interview preparation, resume building, and mock interview sessions.',
    },
    {
      question: 'Do you provide customized software solutions?',
      answer:
        'Yes, we build tailored software solutions based on client needs. Whether it’s a startup MVP or a scalable enterprise product, we handle the entire development lifecycle.',
    },
  ];


    return (
      <section className="bg-black relative w-full overflow-hidden py-16">
        {/* Decorative elements */}
        <div className="bg-primary/5 absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -right-20 bottom-20 h-64 w-64 rounded-full blur-3xl" />

        <div className="relative container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <Badge
              variant="outline"
              className="border-primary text-gray-300 mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase"
            >
              FAQs
            </Badge>

            <h2 className="from-primary mb-3 bg-gradient-to-r to-rose-400 bg-clip-text text-3xl font-bold text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm">
              Everything you need to know about MVPBlocks
            </p>
          </motion.div>

          <div className="mx-auto max-w-2xl space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={cn('mx-auto mt-4 max-w-md rounded-lg p-6 text-center')}
          >
            <div className=" text-gray-300 mb-4 inline-flex items-center justify-center rounded-full p-2">
              <Mail className="h-4 w-4" />
            </div>
            <p className="text-gray-300 mb-1 text-sm font-medium">
              Still have questions?
            </p>
            <p className="text-muted-foreground mb-4 text-xs">
              We&apos;re here to help you
            </p>
            <button
              type="button"
              className={cn(
                'rounded-md px-4 py-2 text-sm',
                'bg-primary text-primary-foreground',
                'hover:bg-primary/90',
                'transition-colors duration-200',
                'font-medium',
              )}
            >
              Contact Support
            </button>
          </motion.div>
        </div>
      </section>
    );
  }
