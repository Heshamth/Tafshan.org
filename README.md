# تفشان | Tafshan.org 🎲

> A fun "bored button" style website for Arabic and English users.
> Press the button → get taken to a random quirky website!

---

## 📁 File Structure

```
tafshan/
├── index.html     ← Main landing page (the home button)
├── portal.html    ← The iframe portal (banner + embedded site)
├── sites.js       ← Curated list of fun websites
└── README.md      ← This file
```

---

## 🚀 Step-by-Step: Deploy to GitHub Pages

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **"+"** button (top right) → **"New repository"**
3. Name it: `tafshan` (or anything you like)
4. Set it to **Public**
5. **Don't** check "Add README" (we already have our files)
6. Click **"Create repository"**

---

### Step 2 — Open in VS Code & Push Files

Open your terminal in VS Code (`Ctrl + `` ` ``) and run:

```bash
# 1. Navigate to where you saved the tafshan folder
cd path/to/tafshan

# 2. Initialize git
git init

# 3. Add all files
git add .

# 4. Commit
git commit -m "🚀 Initial launch of Tafshan"

# 5. Link to your GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/tafshan.git

# 6. Push to GitHub
git branch -M main
git push -u origin main
```

---

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** (left sidebar)
4. Under **"Branch"**, select: `main` and folder: `/ (root)`
5. Click **Save**
6. Wait ~2 minutes, then your site will be live at:

```
https://YOUR_USERNAME.github.io/tafshan/
```

---

### Step 4 — Test Your Site

Visit `https://YOUR_USERNAME.github.io/tafshan/` and:
- ✅ Click the big gold "تفشان!" button
- ✅ Check that the portal banner appears with Next/Back buttons
- ✅ Toggle Arabic ↔ English
- ✅ Test on mobile

---

## 💰 Setting Up Google AdSense

1. Sign up at [google.com/adsense](https://adsense.google.com)
2. Add your site URL (once you have your GitHub Pages URL or tafshan.org)
3. Get approved (may take a few days)
4. Once approved, get your ad code snippets
5. In `index.html`, find the comments that say:
   ```html
   <!-- Google AdSense 728x90 Leaderboard -->
   ```
   And replace the placeholder `<div>` with your AdSense `<ins>` tags
6. There are **3 ad slots** ready:
   - Top leaderboard (728×90) in `index.html`
   - Rectangle (300×250) in `index.html`  
   - Second leaderboard (728×90) at the bottom of `index.html`

---

## ☕ Setting Up Buy Me a Coffee

1. Go to [buymeacoffee.com](https://buymeacoffee.com) and create an account
2. Set up your page
3. In `index.html`, find:
   ```html
   <a href="https://buymeacoffee.com/YOUR_USERNAME" ...>
   ```
4. Replace `YOUR_USERNAME` with your actual Buy Me a Coffee username

---

## 🌐 Connecting Your Custom Domain (tafshan.org)

Once you buy `tafshan.org`:

1. In your domain registrar (GoDaddy, Namecheap, etc.), add these DNS records:

   | Type  | Name | Value                          |
   |-------|------|-------------------------------|
   | A     | @    | 185.199.108.153                |
   | A     | @    | 185.199.109.153                |
   | A     | @    | 185.199.110.153                |
   | A     | @    | 185.199.111.153                |
   | CNAME | www  | YOUR_USERNAME.github.io        |

2. In GitHub Pages settings, under "Custom domain", type: `tafshan.org`
3. Check **"Enforce HTTPS"**
4. Wait up to 24 hours for DNS to propagate

---

## ➕ Adding More Websites to the List

Open `sites.js` and add entries to the `SITES` array:

```javascript
{
  url: "https://example.com",        // The website URL
  name: "Example Site",              // English name
  nameAr: "موقع مثال",               // Arabic name
  desc: "A fun description",         // English description
  descAr: "وصف ممتع",                // Arabic description
  emoji: "🎉"                        // Emoji icon
},
```

---

## 🛠️ Making Updates After Launch

After any changes, push to GitHub:

```bash
git add .
git commit -m "✨ Updated sites list"
git push
```

GitHub Pages will automatically update within ~1 minute.

---

## 📱 Features Summary

| Feature | Status |
|---------|--------|
| Arabic/English language toggle | ✅ |
| RTL (right-to-left) support | ✅ |
| Random website button | ✅ |
| Portal banner with Next/Back | ✅ |
| Open in new tab fallback | ✅ |
| Google Ads placeholders | ✅ (3 slots) |
| Buy Me a Coffee button | ✅ |
| Animated starfield background | ✅ |
| Islamic geometric pattern | ✅ |
| Responsive (mobile/tablet/desktop) | ✅ |
| Language preference saved | ✅ |
| Visit counter | ✅ |

---

Made with ❤️ | Tafshan.org
# Tafshan.org
