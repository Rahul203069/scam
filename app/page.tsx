import React from 'react';

export default function CourseCertificatePage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <button 
        // fixed: Pins it to the window (ignores scroll)
        // top-[45vh]: Places it 45% down from the top (50% is center, so 45% is slightly above)
        // left-1/2 -translate-x-1/2: Perfect horizontal centering
        className="fixed cursor-pointer top-[35vh] left-1/2 -translate-x-1/2 bg-[#3070bf] text-white font-serif text-base py-2 px-6 rounded-md hover:bg-[#245894] transition-colors z-50"
      >
        Course Certificate
      </button>
    </div>
  );
}