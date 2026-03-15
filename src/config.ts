export const SITE = {
  name: 'Toolsmith Labs',
  tagline: 'Privacy-First Offline Tools',
  github: 'https://github.com/ToolSmithHQ',
}

export const IMAGE_SMITH = {
  name: 'Image Smith',
  description:
    'Convert, compress, resize & strip metadata from images — entirely on your iPhone. Supports HEIC, JPEG, PNG, WebP, TIFF, BMP, and more. Zero data leaves your device.',
  appStoreUrl: 'https://apps.apple.com/us/app/image-smith/id6759870575',
}

export interface Tool {
  name: string
  icon: string
  description: string
  colorClass: string
}

export const UPCOMING_TOOLS: Tool[] = [
  {
    name: 'PDF Tools',
    icon: '\u{1F4C4}',
    description:
      'Merge, split, compress, convert & extract text from PDFs. Powered by PDFium — the same engine behind Google Chrome.',
    colorClass: 'icon-pdf',
  },
  {
    name: 'Audio Tools',
    icon: '\u{1F3B5}',
    description:
      'Trim, merge, convert & compress audio files. MP3, WAV, AAC, FLAC and more — all processed locally.',
    colorClass: 'icon-audio',
  },
  {
    name: 'Video Tools',
    icon: '\u{1F3AC}',
    description:
      'Trim, compress, convert & extract audio from video. Powered by FFmpeg running entirely in your browser.',
    colorClass: 'icon-video',
  },
]

export const PRIVACY_POINTS = [
  {
    icon: '\u{1F6AB}',
    title: 'No Uploads',
    description: 'Files are processed in-memory on your device. Nothing is sent anywhere.',
  },
  {
    icon: '\u{1F50D}',
    title: 'Fully Auditable',
    description: 'Open source — read every line of code yourself.',
  },
  {
    icon: '\u{2708}\u{FE0F}',
    title: 'Works Offline',
    description: 'No internet required. Use it on a plane, in a vault, wherever.',
  },
]
