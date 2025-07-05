import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Clock,
  Zap,
  Shield,
  FileText,
  Settings,
  Brain,
  ScanLine,
  Briefcase,
  GraduationCap,
  Scale,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 }
  })
};
const iconHover = { scale: 1.15, rotate: 8, transition: { type: "spring", stiffness: 300 } };

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-fuchsia-50 to-sky-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Summarize Documents
            </span>
            <br />
            <span className="text-gray-900">in Seconds with AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl"
          >
            Transform lengthy documents into concise, actionable summaries using advanced AI technology. Save hours of
            reading time and focus on what matters most.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
              onClick={() => navigate("/gen")}
            >
              Start Summarizing Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Why Choose Our AI Summarizer?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 text-lg text-gray-600"
            >
              Experience the power of AI-driven document analysis
            </motion.p>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Save Time",
                description: "Reduce hours of reading into minutes of focused insights. Get to the point faster.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Process documents in seconds, not hours. Our AI works at superhuman speed.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description: "Your documents are processed securely and never stored. Complete privacy guaranteed.",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <Card className="group relative overflow-hidden border-0 bg-white/60 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={iconHover}
                      className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${benefit.gradient} shadow-lg`}
                    >
                      <benefit.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="mb-4 text-xl font-bold text-gray-900"
                    >
                      {benefit.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-gray-600"
                    >
                      {benefit.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 80, z: 10 }}
        whileInView={{ opacity: 1, y: 0, z: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Powerful Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 text-lg text-gray-600"
            >
              Everything you need for intelligent document processing
            </motion.p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FileText,
                title: "Multiple Formats",
                description: "Support for PDF, JPEG, PNG, and more file types",
              },
              {
                icon: Settings,
                title: "Flexible Length",
                description: "Choose from brief, standard, or detailed summaries",
              },
              {
                icon: Brain,
                title: "AI-Powered",
                description: "Advanced language models for accurate analysis",
              },
              {
                icon: ScanLine,
                title: "Smart OCR",
                description: "Extract text from images and scanned documents",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <Card className="group border-0 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={iconHover}
                      className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"
                    >
                      <feature.icon className="h-6 w-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="mb-2 font-semibold text-gray-900"
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-sm text-gray-600"
                    >
                      {feature.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Use Cases Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Perfect for Every Professional
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 text-lg text-gray-600"
            >
              Trusted by professionals across industries
            </motion.p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: Briefcase,
                title: "Business Professionals",
                gradient: "from-blue-600 to-purple-600",
                features: [
                  "Executive summaries of reports",
                  "Contract and proposal analysis",
                  "Market research insights",
                  "Meeting notes compilation",
                ],
              },
              {
                icon: GraduationCap,
                title: "Students & Researchers",
                gradient: "from-purple-600 to-pink-600",
                features: [
                  "Academic paper summaries",
                  "Research literature reviews",
                  "Study material condensation",
                  "Thesis and dissertation analysis",
                ],
              },
              {
                icon: Scale,
                title: "Legal & Medical",
                gradient: "from-green-600 to-blue-600",
                features: [
                  "Case law summaries",
                  "Medical record analysis",
                  "Regulatory document review",
                  "Compliance report insights",
                ],
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <Card className={`border-0 bg-gradient-to-br ${useCase.gradient} text-white hover:scale-105 transition-all hover:shadow-2xl`}>
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={iconHover}
                      className="mb-6 flex items-center"
                    >
                      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                        <useCase.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">{useCase.title}</h3>
                    </motion.div>
                    <ul className="space-y-3">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-white/80" />
                          <span className="text-white/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              What Our Users Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 text-lg text-gray-600"
            >
              Join thousands of satisfied professionals
            </motion.p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {[
              {
                rating: 5,
                quote:
                  "This AI summarizer has revolutionized how I handle research papers. What used to take me hours now takes minutes, and I don't miss any important details.",
                name: "Dr. Sarah Chen",
                title: "Research Director, TechCorp",
              },
              {
                rating: 5,
                quote:
                  "As a lawyer, I deal with hundreds of pages of documents daily. This tool helps me quickly identify key points and focus on what matters most for my cases.",
                name: "Michael Rodriguez",
                title: "Senior Partner, Rodriguez & Associates",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <Card className="border-0 bg-white/60 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-4 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="mb-6 text-lg text-gray-700">"{testimonial.quote}"</blockquote>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.title}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Ready to Transform Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Document Workflow?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-lg text-gray-600 sm:text-xl"
          >
            Join thousands of professionals who save hours every week with AI-powered document summarization.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-4 text-xl font-semibold text-white shadow-xl transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:scale-105"
              onClick={() => navigate("/gen")}
            >
              Get Started Free Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500"
          >
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              No credit card required
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
