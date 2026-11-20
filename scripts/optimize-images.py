#!/usr/bin/env python3
"""Generate responsive WebP variants for logos and editorial photography."""

import shutil
import subprocess
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
LOGO_DIR = ROOT / "public" / "img" / "logo"
PEOPLE_DIR = ROOT / "public" / "img" / "people"

LOGO_WIDTHS = (180, 312)
STALE_LOGO_WIDTHS = (210, 360)
PEOPLE_WIDTHS = (240, 384, 520, 640)
CWEBP_BIN = shutil.which("cwebp")


def encode_webp(src: Path, dest: Path, target_w: int, quality: int, preserve_alpha: bool) -> None:
    with Image.open(src) as img:
        orig_w, orig_h = img.size
    target_h = round(orig_h * target_w / orig_w)

    if CWEBP_BIN:
        cmd = [CWEBP_BIN, "-quiet", "-q", str(quality), "-m", "6", "-resize", str(target_w), str(target_h)]
        if preserve_alpha:
            cmd.extend(["-alpha_q", "70"])
        cmd.extend([str(src), "-o", str(dest)])
        subprocess.run(cmd, check=True)
        return

    with Image.open(src) as img:
        mode = "RGBA" if preserve_alpha else "RGB"
        converted = img.convert(mode)
        resized = converted.resize((target_w, target_h), Image.Resampling.LANCZOS)
        save_kwargs = {"quality": quality, "method": 6}
        if preserve_alpha:
            save_kwargs["alpha_quality"] = 70
        resized.save(dest, "WEBP", **save_kwargs)


def main() -> None:
    for logo_name in ("gemx-payroll-logo-light.png", "gemx-payroll-logo.png"):
        src = LOGO_DIR / logo_name
        stem = src.stem
        for stale_w in STALE_LOGO_WIDTHS:
            stale = LOGO_DIR / f"{stem}-{stale_w}.webp"
            if stale.exists():
                stale.unlink()
        for w in LOGO_WIDTHS:
            dest = LOGO_DIR / f"{stem}-{w}.webp"
            encode_webp(src, dest, w, quality=72, preserve_alpha=True)
            print(f"logo: {dest.name} -> {dest.stat().st_size}B")

    jpg_files = sorted(PEOPLE_DIR.glob("*.jpg"))
    for src in jpg_files:
        slug = src.stem
        for w in PEOPLE_WIDTHS:
            dest = PEOPLE_DIR / f"{slug}-{w}.webp"
            encode_webp(src, dest, w, quality=72, preserve_alpha=False)
    print(f"people: generated {len(jpg_files) * len(PEOPLE_WIDTHS)} WebP variants across {len(jpg_files)} photos.")


if __name__ == "__main__":
    main()
