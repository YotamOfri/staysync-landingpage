import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

export default function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);
    setSubmitted(true);
    setIsSubmitting(false);
    reset();

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="lead-form"
      className="py-24 sm:py-32 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white shadow-2xl border-0 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-8 sm:p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Want Your Business to Work While You Sleep?
            </h2>
            <p className="text-lg text-blue-50 leading-relaxed">
              Leave your details and we'll show you how automation and smart
              lead management can save you time and boost your results.
            </p>
          </div>

          <div className="p-8 sm:p-12">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Thank You!
                </h3>
                <p className="text-gray-600 text-lg">
                  We'll be in touch soon to discuss how we can help your
                  business thrive.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-slate-900 font-semibold mb-2 block"
                  >
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="businessName"
                    className="text-slate-900 font-semibold mb-2 block"
                  >
                    Business Name *
                  </Label>
                  <Input
                    id="businessName"
                    {...register("businessName", {
                      required: "Business name is required",
                    })}
                    placeholder="Your Company Ltd."
                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.businessName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.businessName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="text-slate-900 font-semibold mb-2 block"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value:
                          /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    placeholder="+1 (555) 123-4567"
                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="improvements"
                    className="text-slate-900 font-semibold mb-2 block"
                  >
                    What do you want to improve? *
                  </Label>
                  <Textarea
                    id="improvements"
                    {...register("improvements", {
                      required: "Please tell us what you want to improve",
                    })}
                    placeholder="Tell us about your biggest challenges with lead management, customer follow-up, or business automation..."
                    rows={5}
                    className="text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  />
                  {errors.improvements && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.improvements.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Show Me How
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting, you agree to be contacted about our services.
                  We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
