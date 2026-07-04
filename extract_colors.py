import re
import base64
from io import BytesIO
from PIL import Image
from collections import Counter

# Read SVG
with open('public/manageable-living logo 2.svg', 'r') as f:
    content = f.read()

# Extract base64
match = re.search(r'data:image/png;base64,([^"]+)', content)
if match:
    img_data = base64.b64decode(match.group(1))
    img = Image.open(BytesIO(img_data)).convert('RGBA')
    
    # Resize to speed up processing
    img.thumbnail((100, 100))
    
    pixels = list(img.getdata())
    # Filter out transparent pixels
    pixels = [p[:3] for p in pixels if p[3] > 0]
    
    # Get most common colors
    counter = Counter(pixels)
    print("Top colors:")
    for color, count in counter.most_common(10):
        print(f"#{color[0]:02x}{color[1]:02x}{color[2]:02x} (RGB: {color}) - Count: {count}")
else:
    print("No base64 PNG found.")
