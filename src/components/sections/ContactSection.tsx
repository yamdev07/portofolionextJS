"use client";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "etienne.mentrel@gmail.com";
  const { t, currentLanguage } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Créer des textes différents pour l'email selon la langue
  const emailSubject =
    currentLanguage === "fr"
      ? "Collaboration%20sur%20un%20projet"
      : "Let's%20Collaborate";

  const emailBody =
    currentLanguage === "fr"
      ? "Bonjour%20Etienne,%0D%0A%0D%0AJ'aimerais%20discuter%20d'un%20projet%20avec%20vous."
      : "Hello%20Etienne,%0D%0A%0D%0AI'd%20like%20to%20discuss%20a%20project%20with%20you.";

  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            {t.contact.title}
          </span>
        </h2>

        <p className="text-lg text-gray-300 mb-12">{t.contact.description}</p>

        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 opacity-70 blur-xl animate-pulse"></div>
            <div className="relative flex items-center justify-center w-full h-full">
              <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-white/20 w-full max-w-md">
                <a
                  href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
                  className="cosmic-button w-full flex items-center justify-center mb-6"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {t.contact.sendEmail}
                </a>

                <div className="flex items-center mb-2">
                  <p className="text-gray-400 text-sm mr-auto">
                    {t.contact.copyEmail}
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="flex-grow p-3 bg-black/30 rounded-l-md border border-white/10 overflow-hidden overflow-ellipsis">
                    {email}
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-3 bg-white/10 rounded-r-md border-t border-r border-b border-white/10 hover:bg-white/20 transition-colors"
                  >
                    {copied ? (
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Show feedback when email is copied */}
                {copied && (
                  <div className="mt-2 text-green-400 text-sm">
                    {t.contact.emailCopied}
                  </div>
                )}

                <div className="mt-8 flex justify-center space-x-6">
                  <a
                    href="https://github.com/H1B0B0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/etiennementrel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
