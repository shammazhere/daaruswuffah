import os
import urllib.request
from PIL import Image, ImageDraw, ImageFont

ASSETS_DIR = "/home/mohammed/Documents/asswuffa/daaruswuffah/src/assets"
os.makedirs(ASSETS_DIR, exist_ok=True)

# List of assets to download with highly relevant Islamic/educational photos from Unsplash
assets = {
    "chairman.png": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop", # Respectful senior portrait
    "classroom.png": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop", # Clean, modern classroom/study area
    "program_thrive_1769973893522.png": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop" # Young student/youth (Thrive)
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

# Download the remaining/failed Unsplash photos
for name, url in assets.items():
    filepath = os.path.join(ASSETS_DIR, name)
    print(f"Downloading {name}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            with open(filepath, 'wb') as f:
                f.write(response.read())
        print(f"Successfully downloaded {name}")
    except Exception as e:
        print(f"Error downloading {name}: {e}")

# Generate custom professional green & gold logo with Islamic motifs
print("Generating custom logo...")
try:
    # Try downloading Playfair Display from static directory or use system font/default
    font_urls = [
        "https://github.com/google/fonts/raw/main/ofl/playfairdisplay/static/PlayfairDisplay-Bold.ttf",
        "https://github.com/google/fonts/raw/main/ofl/cinzel/Cinzel-Bold.ttf",
        "https://github.com/google/fonts/raw/main/ofl/playfairdisplay/PlayfairDisplay%5Bwght%5D.ttf"
    ]
    
    font_path = "temp_font.ttf"
    font_loaded = False
    
    for url in font_urls:
        try:
            print(f"Trying to download font from {url}...")
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req) as response:
                with open(font_path, 'wb') as f:
                    f.write(response.read())
            font_loaded = True
            print("Font downloaded successfully.")
            break
        except Exception as e:
            print(f"Failed to download from {url}: {e}")
            
    # Create a 500x500 RGBA image
    size = 500
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Colors
    navy = (14, 47, 54, 255) # #0e2f36
    gold = (197, 168, 128, 255) # #c5a880
    white = (255, 255, 255, 255)
    
    # Draw Navy circular background
    draw.ellipse([30, 30, 470, 470], fill=navy)
    
    # Draw Gold borders
    draw.ellipse([40, 40, 460, 460], outline=gold, width=6)
    draw.ellipse([55, 55, 445, 445], outline=gold, width=2)
    
    # Draw Mosque Dome Silhouette in center
    # Dome Base
    draw.rectangle([190, 240, 310, 290], fill=gold)
    # Dome Arch
    draw.chord([190, 160, 310, 280], start=180, end=0, fill=gold)
    # Minaret/Spire
    draw.rectangle([247, 110, 253, 160], fill=gold)
    # Crescent at the top of spire
    draw.ellipse([240, 85, 260, 105], fill=gold)
    draw.ellipse([246, 85, 266, 105], fill=navy) # Mask to create crescent
    
    # Load fonts
    if font_loaded:
        font_large = ImageFont.truetype(font_path, 34)
        font_small = ImageFont.truetype(font_path, 18)
    else:
        # Fallback to default PIL font
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # Draw text "AS-SWUFFAH" centered
    text_large = "AS-SWUFFAH"
    try:
        text_w = draw.textlength(text_large, font=font_large)
    except AttributeError:
        # Older Pillow versions fallback
        text_w = draw.textsize(text_large, font=font_large)[0] if hasattr(draw, 'textsize') else 150
        
    draw.text((size/2 - text_w/2, 330), text_large, fill=gold, font=font_large)
    
    # Draw subtext "ISLAMIC ACADEMY"
    text_small = "ISLAMIC ACADEMY"
    try:
        text_sw = draw.textlength(text_small, font=font_small)
    except AttributeError:
        text_sw = draw.textsize(text_small, font=font_small)[0] if hasattr(draw, 'textsize') else 150
        
    draw.text((size/2 - text_sw/2, 380), text_small, fill=white, font=font_small)
    
    # Save the logo
    logo_path = os.path.join(ASSETS_DIR, "logo.png")
    img.save(logo_path, "PNG")
    print("Successfully generated logo.png")
    
    # Clean up downloaded font
    if os.path.exists(font_path):
        os.remove(font_path)
        
except Exception as e:
    print(f"Error generating logo: {e}")
