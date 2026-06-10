@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 4%;
    --foreground: 0 0% 100%;
    --card: 0 0% 8%;
    --card-foreground: 0 0% 100%;
    --popover: 0 0% 8%;
    --popover-foreground: 0 0% 100%;
    --primary: 5 100% 60%;
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 8%;
    --secondary-foreground: 0 0% 100%;
    --muted: 0 0% 12%;
    --muted-foreground: 0 0% 54%;
    --accent: 5 100% 60%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 15%;
    --input: 0 0% 15%;
    --ring: 5 100% 60%;
    --radius: 0.25rem;
  }

  body {
    @apply bg-[#0A0A0A] text-white antialiased;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }
}

@layer utilities {
  .font-display {
    font-family: 'Playfair Display', serif;
  }

  .font-body {
    font-family: 'Inter', sans-serif;
  }

  .text-shadow-hero {
    text-shadow: 0 4px 24px rgba(0,0,0,0.6);
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
