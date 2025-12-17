import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const certificateId = searchParams.get('q'); 


  // 1. Point to the specific hardcoded file
  const filePath = path.join(process.cwd(), 'certificates', 'NPTEL25MG98S358900037.pdf');

  try {
    if (!fs.existsSync(filePath)) {
      console.error("File missing at:", filePath);
      return new NextResponse('Certificate file not found', { status: 404 });
    }

    // 2. Read the file
    const fileBuffer = fs.readFileSync(filePath);

    // Debugging: check your terminal to see if the file actually has content
    console.log(`Serving PDF. Size: ${fileBuffer.length} bytes`);

    if (fileBuffer.length === 0) {
        return new NextResponse('File is empty', { status: 500 });
    }

    // 3. FIX: Convert Node Buffer to a Web Blob
    const blob = new Blob([fileBuffer], { type: 'application/pdf' });

    // 4. Return the Blob
    return new NextResponse(blob, {
      headers: {
        'Content-Type': 'application/pdf',
        // 'inline' ensures it opens in the browser viewer
        'Content-Disposition': `inline; filename="NPTEL25MG98S358900037.pdf"`, 
      },
    });

  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}