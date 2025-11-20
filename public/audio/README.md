# Sanskrit Audio Files

This directory contains authentic Sanskrit audio recordings for the teaching texts.

## Directory Structure

- `bhaja-govindam/` - 33 verses of Bhaja Govindam
- `atma-bodha/` - 68 verses of Atma Bodha
- `vivekachudamani/` - 15+ verses of Vivekachudamani

## File Naming Convention

Files must be named exactly as: `verse-{number}.mp3`

Examples:
- `verse-1.mp3`
- `verse-15.mp3`
- `verse-100.mp3`

## Adding Audio Files

See `/docs/AUDIO_SETUP.md` for complete instructions on:
- Where to source authentic recordings
- How to process and optimize audio files
- How to update the configuration
- Testing and deployment

## Quick Start

1. Place MP3 files in the appropriate directory with correct naming
2. Update `data/audio-config.ts` to mark verses as having audio
3. Test locally with `npm run dev`
4. Commit and push changes

## Current Status

To check which verses have audio, run:
```bash
ls -lh public/audio/*/
```

Or check the configuration:
```bash
cat data/audio-config.ts | grep "hasAudio: true"
```

## Audio Requirements

- **Format:** MP3 (most compatible)
- **Bitrate:** 128-192 kbps
- **Sample Rate:** 44.1 kHz
- **Target Size:** 1-3 MB per verse
- **Quality:** Clear, professional Sanskrit recitation

## Sources

Recommended sources for authentic recordings:
- **Shlokam.org** - Bhaja Govindam verses with audio
- **Chinmaya Publications** - Professional MP3 collections
- **MS Subbulakshmi** - Classic devotional recordings

---

**Note:** When audio is not available, the system automatically falls back to computer-generated text-to-speech with improved pronunciation.
