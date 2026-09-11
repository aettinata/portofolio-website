import json
with open(r'C:\Users\LENOVO\AppData\Local\hermes\cache\spillover\toolu_vrtx_01X9de77dxSsZ5V745jnqEj6.txt', 'r', encoding='utf-8') as f:
    raw = f.read()
outer = json.loads(raw, strict=False)
inner = json.loads(outer['result'], strict=False)
skills = inner['skills']
keywords = ['website', 'landing', 'portfolio', 'html', 'hero', 'webpage', 'one-page', 'prototype', 'dark', 'monochrome', 'futurist']
for s in skills:
    sid = s['id'].lower()
    desc = (s.get('description') or '').lower()
    surface = (s.get('surface') or '').lower()
    trigs = [t.lower() for t in (s.get('triggers') or []) if isinstance(t, str)]
    all_text = sid + ' ' + desc + ' ' + surface + ' ' + ' '.join(trigs)
    if any(kw in all_text for kw in keywords):
        d = (s.get('description') or '').replace('\n', ' ')[:140]
        m = s.get('mode', '?')
        print(f"  {s['id']:45s} srf={surface:6s} mode={m:12s} | {d}")
