# Dr. Bijal Rajput - Personal Academic Website

A clean, responsive, and modern personal academic and clinical website for Dr. Bijal Rajput (PGY-3 Internal Medicine Resident at NYU Grossman School of Medicine, Harvard Medical School MD, and Aspiring Cardiologist).

## 🌟 Features
- **Modern Academic Aesthetic**: Clean slate/navy palette, typography (Plus Jakarta Sans & Source Serif), accessible layout.
- **Interactive Publications**: Filter by category (Peer-Reviewed Journals, In-Press, Conference Presentations) with real-time keyword search and one-click citation copying.
- **Academic & Clinical Highlights**: Research pillars (Medical AI / LLMs, Mechanical Circulatory Support, Transplant Safety Net Policy), Education timeline, and Honors.
- **Direct Profiles**: Google Scholar, Doximity, GitHub, and NYU Langone institutional email.
- **Zero Build Dependencies**: Pure HTML5, Tailwind CSS, Lucide Icons, and Vanilla JS—100% compatible with GitHub Pages out of the box.

## 💻 Local Preview
You can preview this website locally in any of the following ways:

### Option 1: Open Directly in Your Web Browser
Double-click `index.html` or open the file in Chrome / Safari:
```bash
open index.html
```

### Option 2: Run a Local Web Server
```bash
python3 -m http.server 8000
```
Then visit: [http://localhost:8000](http://localhost:8000)

---

## 🚀 How to Deploy to GitHub Pages

### Method A: Deploy to `bijalrajput.github.io` (User Site)
1. Create a repository on GitHub named `bijalrajput.github.io`.
2. Push the files in this directory to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of academic website"
   git branch -M main
   git remote add origin https://github.com/bijalrajput/bijalrajput.github.io.git
   git push -u origin main
   ```
3. Your site will automatically be live at `https://bijalrajput.github.io`!

### Method B: Deploy as a Project Repository
1. Push to any repository (e.g. `website`):
   ```bash
   git remote add origin https://github.com/bijalrajput/website.git
   git push -u origin main
   ```
2. In GitHub repository **Settings** &rarr; **Pages**, set **Source** to `Deploy from a branch` (Branch: `main` / `root`).
3. Your site will be published at `https://bijalrajput.github.io/website/`.
