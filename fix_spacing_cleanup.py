import os
import re

files = [
    'components/sections/MemoriesMarquee.tsx',
    'components/sections/ImpactStats.tsx',
    'components/sections/DistinguishedAlumni.tsx',
    'components/sections/AlumniAssist.tsx',
    'components/sections/Newsroom.tsx',
    'components/sections/ContributeSection.tsx'
]

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Clean up empty md: or lg:
    content = re.sub(r'\bmd:\s', '', content)
    content = re.sub(r'\blg:\s', '', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Cleaned up stray prefixes.')
