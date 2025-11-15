import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: " Portfolio | Yoann Yamd",
  description:
    "An immersive space-themed portfolio experience showcasing my work through a cosmic journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Script id="favicon-animation" strategy="afterInteractive">
          {`
          setTimeout(() => {
            let favicon_video_image_counter = 0;
            let favicon_video_icon_tag = document.querySelector("link[rel='icon']");
            let favicon_video_images = [
        "https://favicongenerator.s3.amazonaws.com/bdb567b65461d.png","https://favicongenerator.s3.amazonaws.com/94a17bb05df0b.png","https://favicongenerator.s3.amazonaws.com/b93f8520571b1.png","https://favicongenerator.s3.amazonaws.com/8a42314fb9b27.png","https://favicongenerator.s3.amazonaws.com/f0b4c38792dce.png","https://favicongenerator.s3.amazonaws.com/cc55436d4719c.png","https://favicongenerator.s3.amazonaws.com/34447e114bc17.png","https://favicongenerator.s3.amazonaws.com/bf457c8ea87be.png","https://favicongenerator.s3.amazonaws.com/6e2479ca4a7df.png","https://favicongenerator.s3.amazonaws.com/c771da2c216f8.png","https://favicongenerator.s3.amazonaws.com/80391a52d9da5.png","https://favicongenerator.s3.amazonaws.com/39f3e4fd760e.png","https://favicongenerator.s3.amazonaws.com/502f25d3cb0f2.png","https://favicongenerator.s3.amazonaws.com/0f5e24cd05a23.png","https://favicongenerator.s3.amazonaws.com/b7e8d5d133f6e.png","https://favicongenerator.s3.amazonaws.com/3508471b7dd4e.png","https://favicongenerator.s3.amazonaws.com/46f5a7882ae87.png","https://favicongenerator.s3.amazonaws.com/12f56cc2116b7.png","https://favicongenerator.s3.amazonaws.com/21395eea737f4.png","https://favicongenerator.s3.amazonaws.com/f40abb8f8d209.png","https://favicongenerator.s3.amazonaws.com/5cac07133f11a.png","https://favicongenerator.s3.amazonaws.com/e590469a6d5c8.png","https://favicongenerator.s3.amazonaws.com/c8ddf8e3c3cb9.png","https://favicongenerator.s3.amazonaws.com/bbd9272d291f8.png"];
            async function favicon_video_to_data_url(url, callback) {
              let xhr = new XMLHttpRequest();
              xhr.onload = function () {
                let reader = new FileReader();
                reader.onloadend = function () {
                  callback(reader.result);
                };
                reader.readAsDataURL(xhr.response);
              };
              xhr.open("GET", url);
              xhr.responseType = "blob";
              xhr.send();
            }
          
            let favicon_video_loaded_images = [];
          
            favicon_video_images.map((url, idx) => {
              favicon_video_to_data_url(url, function (dataUrl) {
                favicon_video_loaded_images[idx] = dataUrl;
              });
            });
          
            setInterval(function () {
              if(favicon_video_loaded_images[favicon_video_image_counter]) {
                favicon_video_icon_tag.href = favicon_video_loaded_images[
                  favicon_video_image_counter
                ].replace("application/octet-stream", "image/png");
              }
              if (
                favicon_video_image_counter ==
                favicon_video_loaded_images.length - 1
              )
                favicon_video_image_counter = 0;
              else favicon_video_image_counter++;
            }, 100);
          }, 2000);
        `}
        </Script>
      </body>
    </html>
  );
}
