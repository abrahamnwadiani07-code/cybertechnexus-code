/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ctn: {
          bg: '#030b14',
          'bg-1': '#081e2e',
          'bg-2': '#0c1929',
          'bg-card': '#091520',
          text: '#c8d6e0',
          'text-dim': '#5a7a8a',
          'text-bright': '#eaf2f7',
          border: 'rgba(30, 100, 220, 0.12)',
          blue: '#1a6bff',
          'blue-bright': '#4a90ff',
          'blue-dim': '#1050cc',
          'blue-dark': '#0a1e40',
          red: '#ff3b5c',
          amber: '#ffb039',
          green: '#00d97e',
          purple: '#a855f7',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'grid-drift': 'grid-drift 20s linear infinite',
        'pulse-blue': 'pulseBlue 2s ease-in-out infinite',
        'flutter-blue': 'flutterBlue 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
