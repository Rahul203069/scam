import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const q = searchParams.get('q'); // This will be "NPTEL...pdf"

  if (!q) {
    return new NextResponse('Missing query parameter', { status: 400 });
  }

  // Remove .pdf from the string if you only want the ID, 
  // but since we need the file, we ensure we are looking for the correct filename
  const fileName = q.endsWith('.pdf') ? q : `${q}.pdf`;

  // Path to your local storage folder
  const filePath = path.join(process.cwd(), 'certificates', fileName);

  try {
    if (!fs.existsSync(filePath)) {
      console.error("File not found at:", filePath);
      return new NextResponse('Certificate file not found', { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    if (fileBuffer.length === 0) {
      return new NextResponse('File is empty', { status: 500 });
    }

    // Return the PDF using the modern NextResponse constructor
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${fileName}"`,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });

  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}