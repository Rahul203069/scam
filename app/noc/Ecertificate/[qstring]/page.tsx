"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function CourseCertificatePage() {
  const certificateId = "NPTEL25MG98S45370047010708077";
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-white">
      <button
        onClick={() => {
          router.replace(
            `/content/noc/NOC25/SEM2/Ecertificates/110/noc25-mg98/Course?q=${certificateId}.pdf`
          );
        }}
        className="fixed cursor-pointer top-[35vh] left-1/2 -translate-x-1/2 bg-[#3070bf] text-white font-serif text-base py-2 px-6 rounded-md transition-colors z-50"
      >
        Course Certificate
      </button>
    </div>
  );
}
