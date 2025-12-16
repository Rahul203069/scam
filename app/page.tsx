import React from 'react';
import Link from 'next/link';

export default function CourseCertificatePage() {
  // Store the ID in a variable for easier updates later
  const certificateId = "NPTEL25MG98S45370047010708077";

  return (
    <div className="min-h-screen w-full bg-white">
      <Link 
        href={`/noc/Ecertificate?q=${certificateId}`}
        // The Link needs to be fixed/positioned, or you can keep the button fixed.
        // Usually, it's better to put the positioning on the Link itself 
        // OR keep the button as the visual element inside.
      >
        <button 
          className="fixed cursor-pointer top-[35vh] left-1/2 -translate-x-1/2 bg-[#3070bf] text-white font-serif text-base py-2 px-6 rounded-md  transition-colors z-50"
        >
          Course Certificate
        </button>
      </Link>
    </div>
  );
}