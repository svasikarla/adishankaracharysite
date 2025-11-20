# Sanskrit Audio Setup Guide

This guide explains how to add authentic Sanskrit audio recordings to the website.

## Overview

The site now supports authentic pre-recorded Sanskrit audio for verses, with automatic fallback to computer-generated text-to-speech (TTS) when recordings aren't available.

**Features:**
- ✅ Pre-recorded authentic Sanskrit recitations (when available)
- ✅ Automatic fallback to improved TTS
- ✅ Visual badges showing audio quality (Authentic vs Computer Generated)
- ✅ Speed control (0.5x - 1.5x)
- ✅ Volume control for authentic audio
- ✅ Download option for authentic recordings
- ✅ Links to external authentic sources when using TTS

---

## Directory Structure

Audio files should be organized by text in the `public/audio/` directory:

```
public/
└── audio/
    ├── bhaja-govindam/
    │   ├── verse-1.mp3
    │   ├── verse-2.mp3
    │   └── ... (up to verse-33.mp3)
    ├── atma-bodha/
    │   ├── verse-1.mp3
    │   ├── verse-2.mp3
    │   └── ... (up to verse-68.mp3)
    └── vivekachudamani/
        ├── verse-1.mp3
        ├── verse-2.mp3
        └── ... (up to verse-15.mp3, eventually 581)
```

**Naming Convention:**
- Format: `verse-{number}.mp3`
- Examples: `verse-1.mp3`, `verse-15.mp3`, `verse-100.mp3`

---

## Audio File Specifications

### Recommended Format
- **Format:** MP3 (most compatible)
- **Bitrate:** 128-192 kbps (good balance of quality and file size)
- **Sample Rate:** 44.1 kHz
- **Channels:** Mono (Sanskrit recitation is typically single voice)
- **File Size:** Target 1-3 MB per verse

### Alternative Formats
You can also use:
- **OGG Vorbis** (open format, good compression)
- **M4A/AAC** (good quality, Apple-friendly)
- **WAV** (uncompressed, large files - not recommended for web)

### Audio Quality Guidelines
1. **Clear pronunciation** - Each syllable should be distinct
2. **Moderate tempo** - Not too fast for learners to follow
3. **Minimal background noise** - Professional or studio-quality preferred
4. **Consistent volume** - Normalize audio levels across all files
5. **Proper Sanskrit pronunciation** - Authentic recitation by trained speakers

---

## Adding Audio Files

### Step 1: Obtain Audio Files

**Option A: Download from Existing Sources**
1. **Shlokam.org** - Has Bhaja Govindam verses
   - Visit: https://shlokam.org/bhajagovindamall/
   - Look for audio download options
   - Save files with proper naming convention

2. **Chinmaya Publications**
   - Visit: https://www.chinmayapublications.com/
   - Search for MP3 recordings of texts
   - Purchase and download authentic recordings

3. **YouTube/Archive.org**
   - Search for authentic recitations
   - Use youtube-dl or similar tools (respect copyright!)
   - Extract audio and convert to MP3

**Option B: Commission Recordings**
1. Contact Sanskrit universities or Vedanta centers
2. Hire professional Sanskrit reciters
3. Record with proper equipment
4. Process audio files (normalize, trim, export)

**Option C: Use Existing MS Subbulakshmi Recordings**
- Classic Bhaja Govindam recordings available
- High quality and culturally respected
- Check copyright and fair use

### Step 2: Process Audio Files

Use audio editing software like Audacity (free) or Adobe Audition:

1. **Import audio file**
2. **Trim silence** at beginning and end
3. **Normalize** volume (Effect > Normalize to -1.0 dB)
4. **Remove noise** if needed (Effect > Noise Reduction)
5. **Export as MP3**:
   - Bitrate: 128-192 kbps
   - Quality: High
   - Stereo to Mono if applicable

### Step 3: Place Files in Correct Directory

```bash
# Create directory structure if it doesn't exist
mkdir -p public/audio/bhaja-govindam
mkdir -p public/audio/atma-bodha
mkdir -p public/audio/vivekachudamani

# Copy your processed files
cp ~/Downloads/bhaja-govindam-verse-1.mp3 public/audio/bhaja-govindam/verse-1.mp3
cp ~/Downloads/bhaja-govindam-verse-2.mp3 public/audio/bhaja-govindam/verse-2.mp3
# ... etc
```

### Step 4: Update Audio Configuration

Edit `data/audio-config.ts` to mark verses as having audio:

```typescript
// Before (no audio):
{ verseNumber: 1, hasAudio: false },

// After (audio added):
{
  verseNumber: 1,
  hasAudio: true,
  source: "Shlokam.org",
  reciter: "MS Subbulakshmi",
  quality: "studio"
},
```

**Full example:**

```typescript
export const bhajaGovindamAudio: TextAudioConfig = {
  textId: 'bhaja-govindam',
  textName: 'Bhaja Govindam',
  audioBasePath: '/audio/bhaja-govindam',
  defaultSource: 'MS Subbulakshmi / Shlokam.org',
  verses: [
    {
      verseNumber: 1,
      hasAudio: true,
      source: "Shlokam.org",
      reciter: "MS Subbulakshmi",
      duration: 45, // in seconds
      quality: "studio"
    },
    {
      verseNumber: 2,
      hasAudio: true,
      source: "Shlokam.org",
      reciter: "MS Subbulakshmi",
      duration: 38,
      quality: "studio"
    },
    // Continue for all verses with audio...
    { verseNumber: 3, hasAudio: false }, // Falls back to TTS
    // ...
  ]
}
```

### Step 5: Test Audio Playback

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to teaching page:**
   - http://localhost:3000/teachings/bhaja-govindam

3. **Test each verse:**
   - Click play button
   - Verify audio plays correctly
   - Check that "✓ Authentic Recording" badge appears
   - Test speed control (0.5x - 1.5x)
   - Test volume control
   - Test download button
   - Verify proper playback on mobile devices

4. **Test browsers:**
   - Chrome/Edge
   - Firefox
   - Safari (Mac/iOS)

---

## Bulk Operations

### Add All Bhaja Govindam Verses (Example Script)

Create a script `scripts/add-bhaja-govindam-audio.sh`:

```bash
#!/bin/bash

# Directory containing your source audio files
SOURCE_DIR="~/Downloads/bhaja-govindam-audio"
DEST_DIR="public/audio/bhaja-govindam"

# Create destination directory
mkdir -p "$DEST_DIR"

# Copy and rename files
for i in {1..33}; do
  # Adjust source filename pattern based on your files
  # Example: if files are named "BG_01.mp3", "BG_02.mp3", etc.
  SOURCE_FILE="$SOURCE_DIR/BG_$(printf '%02d' $i).mp3"
  DEST_FILE="$DEST_DIR/verse-$i.mp3"

  if [ -f "$SOURCE_FILE" ]; then
    cp "$SOURCE_FILE" "$DEST_FILE"
    echo "✓ Copied verse $i"
  else
    echo "✗ Missing verse $i (expected: $SOURCE_FILE)"
  fi
done

echo "Done! Added audio files to $DEST_DIR"
```

Make executable and run:
```bash
chmod +x scripts/add-bhaja-govindam-audio.sh
./scripts/add-bhaja-govindam-audio.sh
```

### Update Configuration for Multiple Verses

Create `scripts/update-audio-config.js`:

```javascript
// Script to update audio-config.ts for bulk audio additions
const fs = require('fs');

// Define which verses have audio
const versesWithAudio = [1, 2, 3, 4, 5]; // Add verse numbers here

// Generate verse objects
const verses = Array.from({ length: 33 }, (_, i) => {
  const verseNumber = i + 1;
  const hasAudio = versesWithAudio.includes(verseNumber);

  if (hasAudio) {
    return {
      verseNumber,
      hasAudio: true,
      source: "Shlokam.org",
      reciter: "MS Subbulakshmi",
      quality: "studio"
    };
  } else {
    return { verseNumber, hasAudio: false };
  }
});

console.log('Copy this to audio-config.ts:');
console.log('verses:', JSON.stringify(verses, null, 2));
```

Run with: `node scripts/update-audio-config.js`

---

## Audio Sources & Copyright

### Free/Open Sources
- **Archive.org** - Public domain recordings
- **LibriVox** - Volunteer recordings (check if Sanskrit available)
- **Wikimedia Commons** - Creative Commons licensed audio

### Commercial Sources
- **Chinmaya Publications** - Professional recordings, requires purchase
- **Shlokam.org** - Some free, some paid
- **Vedanta Hub** - Various sources

### Copyright Considerations
⚠️ **Important:** Always verify you have rights to use audio:

1. **Public Domain** - Safe to use (typically 70+ years old)
2. **Creative Commons** - Check license terms (CC-BY, CC-BY-SA, etc.)
3. **Fair Use** - Educational use may qualify, but consult legal advice
4. **Purchased/Licensed** - Ensure license covers web distribution
5. **Original Recordings** - If you commission/create, you own rights

**Best Practice:** Add source attribution in `audio-config.ts` and consider adding a credits page.

---

## Troubleshooting

### Audio Not Playing

**Check:**
1. File exists at correct path: `public/audio/{text-id}/verse-{number}.mp3`
2. Configuration updated: `hasAudio: true` in `audio-config.ts`
3. File name matches exactly: `verse-1.mp3` (not `Verse-1.mp3` or `verse-01.mp3`)
4. File format is supported: MP3 is most compatible
5. Browser console for errors: Press F12 > Console tab

**Fix corrupted file:**
```bash
# Re-encode with ffmpeg
ffmpeg -i broken-audio.mp3 -acodec libmp3lame -b:a 192k fixed-audio.mp3
```

### Audio Quality Issues

**Too quiet:**
```bash
# Normalize with ffmpeg
ffmpeg -i quiet.mp3 -af "volume=2.0" louder.mp3
```

**Background noise:**
- Use Audacity: Effect > Noise Reduction
- Record in quieter environment
- Use better microphone

**Wrong speed:**
- Speed control in player should help
- Alternatively, adjust in audio editing software before upload

### Large File Sizes

**Compress audio:**
```bash
# Reduce bitrate
ffmpeg -i large.mp3 -b:a 128k smaller.mp3

# Convert stereo to mono (saves 50% size)
ffmpeg -i stereo.mp3 -ac 1 mono.mp3
```

**Batch compress all files:**
```bash
for file in public/audio/bhaja-govindam/*.mp3; do
  ffmpeg -i "$file" -b:a 128k -ac 1 "${file%.mp3}-compressed.mp3"
done
```

---

## Testing Checklist

Before deploying audio files, verify:

- [ ] All audio files are in correct directories
- [ ] File naming matches convention exactly
- [ ] `audio-config.ts` updated with correct `hasAudio: true`
- [ ] Audio plays correctly in development
- [ ] "✓ Authentic Recording" badge shows
- [ ] Speed control works (0.5x - 1.5x)
- [ ] Volume control works
- [ ] Download button works
- [ ] Mobile playback tested (iOS & Android)
- [ ] Different browsers tested (Chrome, Firefox, Safari)
- [ ] File sizes are reasonable (1-3 MB per verse)
- [ ] Copyright/licensing verified

---

## Deployment

### Vercel/GitHub Deployment

Audio files in `public/` directory are automatically deployed:

```bash
# Commit audio files
git add public/audio/
git add data/audio-config.ts
git commit -m "feat: add authentic Sanskrit audio for Bhaja Govindam verses 1-10"

# Push to GitHub
git push origin main
```

Vercel will automatically deploy with audio files included.

### Storage Considerations

**Bhaja Govindam (33 verses):**
- Average: 2 MB per verse
- Total: ~66 MB

**Atma Bodha (68 verses):**
- Average: 2 MB per verse
- Total: ~136 MB

**Vivekachudamani (581 verses):**
- Average: 2 MB per verse
- Total: ~1.16 GB

**Vercel Limits:**
- Free plan: 100 GB bandwidth/month (should be fine)
- Serverless Function Size: 50 MB (not applicable - static files)

**Alternative: CDN Hosting**
For very large collections (Vivekachudamani), consider:
- AWS S3 + CloudFront
- Cloudinary (audio hosting)
- Update `audioBasePath` in config to point to CDN

---

## Future Enhancements

### Planned Features
- [ ] Playlist mode (play all verses continuously)
- [ ] Verse-by-verse highlighting during playback
- [ ] Synchronized text display with audio
- [ ] User upload community recordings
- [ ] Multiple reciter options per verse
- [ ] Waveform visualization
- [ ] Adjustable pitch (for learning)

### Advanced Options
- Audio CMS for easy management
- Automated audio processing pipeline
- Quality metrics and ratings
- Collaborative transcription/translation alignment

---

## Support & Resources

### Audio Editing Tools
- **Audacity** (Free) - https://www.audacityteam.org/
- **Ocenaudio** (Free) - https://www.ocenaudio.com/
- **Adobe Audition** (Paid) - Professional audio editing

### Format Conversion
- **FFmpeg** (Free) - https://ffmpeg.org/
  ```bash
  # Install on Mac
  brew install ffmpeg

  # Install on Ubuntu/Debian
  sudo apt install ffmpeg
  ```

### Sanskrit Resources
- **Samskrita Bharati** - Sanskrit teaching organization
- **Chinmaya Mission** - Vedanta education and resources
- **Sanskrit From Home** - Online Sanskrit learning

---

## Contact

For questions or issues with audio setup:
1. Check this documentation first
2. Open an issue on GitHub
3. Check browser console for errors
4. Test with sample audio file first

---

**Last Updated:** 2025-11-20
**Version:** 1.0.0
