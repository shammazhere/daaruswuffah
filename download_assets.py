import os
import urllib.request

ASSETS_DIR = "/home/mohammed/Documents/asswuffa/daaruswuffah/src/assets"
os.makedirs(ASSETS_DIR, exist_ok=True)

assets = {
    "chairman.png": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop",
    "vice_chairman.png": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop",
    "hero_campus.png": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop",
    "classroom.png": "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop",
    "library.png": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop",
    "logo.png": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&auto=format&fit=crop",
    "program_nurture_1769973836325.png": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&fit=crop",
    "program_bloom_1769973856803.png": "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop",
    "program_sparkle_1769973875382.png": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&auto=format&fit=crop",
    "program_thrive_1769973893522.png": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop",
    "program_empowher_1769973930527.png": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop",
    "program_valueplus_1769973948913.png": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop"
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

for name, url in assets.items():
    filepath = os.path.join(ASSETS_DIR, name)
    print(f"Downloading {name} from {url}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            with open(filepath, 'wb') as f:
                f.write(response.read())
        print(f"Successfully downloaded {name}")
    except Exception as e:
        print(f"Error downloading {name}: {e}")
