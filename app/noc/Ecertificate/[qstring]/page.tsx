"use client";
import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function CourseCertificatePage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Try standard way (?q=...)
  let certificateId = searchParams.get("q");

  // 2. Fallback: If URL is /q=NPTEL... (no question mark)
  if (!certificateId && pathname.includes("q=")) {
    certificateId = pathname.split("q=")[1];
  }

  const handleRedirect = () => {
    if (!certificateId) {
      alert("No certificate ID found in the URL.");
      return;
    }

    // Clean the ID (remove .pdf if it's already there to avoid double .pdf.pdf)
    const cleanId = certificateId.replace(".pdf", "");

    router.replace(
      `/content/noc/NOC25/SEM2/Ecertificates/110/noc25-mg98/Course?q=${cleanId}.pdf`
    );
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <button
        onClick={handleRedirect}
        className="fixed cursor-pointer top-[35vh] left-1/2 -translate-x-1/2 bg-[#3070bf] text-white font-serif text-base py-2 px-6 rounded-md transition-colors z-50"
      >
        Course Certificate 
      </button>
    </div>
  );
}