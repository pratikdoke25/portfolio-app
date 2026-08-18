"use client";

import { isValidEmail } from "@/utils/check-email";
import axios, { AxiosError } from "axios";
import { ChangeEvent, JSX, MouseEvent, useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

interface ErrorState {
  email: boolean;
  required: boolean;
}

interface UserInput {
  name: string;
  email: string;
  message: string;
}

interface ErrorResponse {
  message: string;
}

function ContactForm(): JSX.Element {
  const [error, setError] = useState<ErrorState>({
    email: false,
    required: false,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [userInput, setUserInput] = useState<UserInput>({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = (): void => {
    if (userInput.email && userInput.message && userInput.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    }

    if (error.email) {
      return;
    }

    setError((prev) => ({ ...prev, required: false }));

    try {
      setIsLoading(true);

      await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");

      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;

      toast.error(
        error.response?.data?.message || "Something went wrong!"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const messageLength = userInput.message.length;
  const maxLength = 500;

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-1 w-12 bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3]"></div>
        <p className="font-semibold text-[#16f2b3] text-xs uppercase tracking-[0.15em]">
          Get in Touch
        </p>
      </div>

      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
        Let's Connect
      </h2>

      <p className="text-gray-400 text-base mb-8 leading-relaxed max-w-lg">
        Have a question or want to collaborate? Drop me a message and I'll get back to you as soon as possible.
      </p>

      <div className="max-w-xl text-white">
        <div className="relative p-6 lg:p-8 rounded-2xl border border-[#16f2b3]/20 bg-gradient-to-br from-[#16f2b3]/5 to-transparent backdrop-blur-sm hover:border-[#16f2b3]/40 transition-all duration-300">
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#16f2b3]/10 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="space-y-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-200 uppercase tracking-wide">
                Your Name
              </label>
              <input
                className="bg-[#10172d] w-full border border-[#353a52] rounded-lg focus:border-[#16f2b3] focus:shadow-lg focus:shadow-[#16f2b3]/20 ring-0 outline-0 transition-all duration-300 px-4 py-3 text-white placeholder-gray-500"
                type="text"
                placeholder="Enter your name"
                maxLength={100}
                required
                value={userInput.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUserInput({
                    ...userInput,
                    name: e.target.value,
                  })
                }
                onBlur={checkRequired}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-200 uppercase tracking-wide">
                Your Email
              </label>
              <input
                className="bg-[#10172d] w-full border border-[#353a52] rounded-lg focus:border-[#16f2b3] focus:shadow-lg focus:shadow-[#16f2b3]/20 ring-0 outline-0 transition-all duration-300 px-4 py-3 text-white placeholder-gray-500"
                type="email"
                placeholder="your@email.com"
                maxLength={100}
                required
                value={userInput.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUserInput({
                    ...userInput,
                    email: e.target.value,
                  })
                }
                onBlur={() => {
                  checkRequired();
                  setError((prev) => ({
                    ...prev,
                    email: !isValidEmail(userInput.email),
                  }));
                }}
              />
              {error.email && (
                <p className="text-xs text-red-400 font-medium">
                  ✕ Please provide a valid email
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-200 uppercase tracking-wide">
                  Your Message
                </label>
                <span className={`text-xs ${messageLength >= maxLength - 50 ? 'text-red-400' : 'text-gray-500'}`}>
                  {messageLength}/{maxLength}
                </span>
              </div>
              <textarea
                className="bg-[#10172d] w-full border border-[#353a52] rounded-lg focus:border-[#16f2b3] focus:shadow-lg focus:shadow-[#16f2b3]/20 ring-0 outline-0 transition-all duration-300 px-4 py-3 text-white placeholder-gray-500 resize-none"
                maxLength={maxLength}
                placeholder="Share your thoughts..."
                name="message"
                required
                rows={5}
                value={userInput.message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setUserInput({
                    ...userInput,
                    message: e.target.value,
                  })
                }
                onBlur={checkRequired}
              />
            </div>

            <div className="flex flex-col items-center gap-4 pt-4">
              {error.required && (
                <p className="text-sm text-red-400 font-medium">
                  ✕ Please fill in all fields
                </p>
              )}

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#16f2b3] to-[#0ef9f3] px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-gray-900 hover:shadow-lg hover:shadow-[#16f2b3]/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                onClick={handleSendMail}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <TbMailForward size={18} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;