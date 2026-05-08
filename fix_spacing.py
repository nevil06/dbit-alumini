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

spacing_class = 'py-32 md:py-48'

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    def replace_section(match):
        cls_str = match.group(1)
        cls_str = re.sub(r'\bp[tyb]-\[?[a-zA-Z0-9_.-]+\]?\b', '', cls_str)
        cls_str = re.sub(r'md:p[tyb]-\[?[a-zA-Z0-9_.-]+\]?\b', '', cls_str)
        cls_str = re.sub(r'lg:p[tyb]-\[?[a-zA-Z0-9_.-]+\]?\b', '', cls_str)
        
        cls_str = re.sub(r'\s+', ' ', cls_str).strip()
        
        return f'<section className="{spacing_class} {cls_str}"'

    content = re.sub(r'<section\s+className="([^"]+)"', replace_section, content, count=1)
    
    if 'ImpactStats' in filepath:
        content = re.sub(r'\{/\* 20px space, line, 20px space before next section \*/\}\s*<div className="mt-\[20px\] mb-\[20px\]">\s*<hr className="border-t border-white/20" />\s*</div>', '', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Updated section padding in all files.')
