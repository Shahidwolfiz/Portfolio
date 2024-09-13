import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'linear-gradient': 'linear-gradient(var(--tw-gradient-stops))',
        'nht-card': "url('/nhtcard.png')",
        'lp-card': "url('/leadpadlerscards.png')",
        'rzfx-card': "url('/rockzfxcard.png')",
        'rzfx-bg1': "url('/csimages/rzfxbg1.png')",
        'rzfx-bg2': "url('/csimages/rzfxbg2.png')",
        'rzfx-bg3': "url('/csimages/rzfxbg3.png')",
        'rzfx-bg4': "url('/csimages/rzfxbg4.png')",
        'rzfx-bg5': "url('/csimages/rzfxbg5.png')",
        'rzfx-bg6': "url('/csimages/rzfxbg6.png')",
        'rzfx-bg7': "url('/csimages/rzfxbg7.png')",
        'rzfx-bg8': "url('/csimages/rzfxbg8.png')",
        'rzfx-bg9': "url('/csimages/rzfxbg9.png')",
        'rzfx-bg10': "url('/csimages/rzfxbg10.png')",
        'nht-bg1': "url('/nht/nhtbg1.png')",
        'nht-bg2': "url('/nht/nhtbg2.png')",
        'nht-bg3': "url('/nht/nhtbg3.png')",
        'nht-bg4': "url('/nht/nhtbg4.png')",
        'nht-bg5': "url('/nht/nhtbg5.png')",
        'nht-bg6': "url('/nht/nhtbg6.png')",
        'nht-bg7': "url('/nht/bgps.png')",
        'nht-bg8': "url('/nht/nhtabc.png')",
        nhtbg1: "url('/nhtbg.webp')",
        lp1: "url('/lp/bg1.png')",
        lp2: "url('/lp/bg2.png')",
        lp3: "url('/lp/bg3.png')",
        lp4: "url('/lp/bg4.png')",
        sfcard: "url('/scantifix/card.png')",
        sf1: "url('/scantifix/bg1.png')",
        sf2: "url('/scantifix/bg2.png')",
        sf3: "url('/scantifix/bg3.png')",
        sf4: "url('/scantifix/bg4.png')",
        sf5: "url('/scantifix/bg5.png')",
        sf6: "url('/scantifix/bg6.png')",
        sf7: "url('/scantifix/bg7.png')",
        sf8: "url('/scantifix/bg8.png')",
        na1: "url('/na/bg1.png')",
        pg1: "url('/pg/bg1.png')",
        pg2: "url('/pg/bg2.png')",
        pg3: "url('/pg/bg3.png')",
        ippc1: "url('/ippc/bg1.png')",
        ippc2: "url('/ippc/bg2.png')",
        ippc3: "url('/ippc/bg3.png')",
        ippc4: "url('/ippc/text.png')",
        ippc5: "url('/ippc/bg5.png')",
        ippc6: "url('/ippc/bg6.png')",
        ippc7: "url('/ippc/bg7.png')",
        ippc8: "url('/ippc/bg8.png')",
        ippc9: "url('/ippc/bg9.png')",
        apollo2: "url('/apollo/bg2.png')",
        apollo1: "url('/apollo/bg1.png')",
        pfbcard: "url('/pfb/Card.png')",
        pfb1: "url('/pfb/bg1.png')",
        pfb2: "url('/pfb/cake.png')",
        pfb3: "url('/pfb/bg3.png')",
        pfb4: "url('/pfb/bg4.png')",
        pfb5: "url('/pfb/bg5.png')",
        bc1: "url('/bc/bg1.png')",
        bc2: "url('/bc/bg2.png')",
        bc3: "url('/bc/bg3.png')",
        bengal1: "url('/bengal/bg1.png')",
        bengal2: "url('/bengal/bg2.png')",
        bengal3: "url('/bengal/bg3.png')",
        sccard: "url('/mobileapps/sc/card.png')",
        scbg1: "url('/mobileapps/sc/bg1.png')",
        scbg2: "url('/mobileapps/sc/bg2.png')",
        scbg3: "url('/mobileapps/sc/bg3.png')",
        scbg4: "url('/mobileapps/sc/bg4.png')",
        scbg5: "url('/mobileapps/sc/bg5.png')",
        ylbg1: "url('/mobileapps/yalaxi/bg1.png')",
        srbg1: "url('/mobileapps/sr/bg1.png')",
        srbg2: "url('/mobileapps/sr/bg2.png')",
        srbg3: "url('/mobileapps/sr/bg3.png')",
        srbg4: "url('/mobileapps/sr/bg4.png')",
        drbg1: "url('/mobileapps/doroos/bg1.png')",
        drbg2: "url('/mobileapps/doroos/bg2.png')",
        drbg3: "url('/mobileapps/doroos/bg3.png')",
        drbg4: "url('/mobileapps/doroos/bg4.png')",
        ndubg1: "url('/mobileapps/ndusapp/bg1.png')",
        ndubg2: "url('/mobileapps/ndusapp/bg2.png')",
        ndubg3: "url('/mobileapps/ndusapp/bg3.png')",
        ndubg4: "url('/mobileapps/ndusapp/bg4.png')",
        ndubg5: "url('/mobileapps/ndusapp/bg5.png')",
        ndubg6: "url('/mobileapps/ndusapp/box42.png')",
        peptidebg1: "url('/mobileapps/peptide/bg1.png')",
        peptidebg2: "url('/mobileapps/peptide/bg2.png')",
        viennabg1: "url('/mobileapps/vienna/bg1.png')",
        viennabg2: "url('/mobileapps/vienna/cbg1.png')",
        viennabg3: "url('/mobileapps/vienna/cbg2.png')",
        viennabg4: "url('/mobileapps/vienna/bg3.png')",
        avconscard: "url('/mobileapps/avcons/card.png')",
        dorooscard: "url('/mobileapps/doroos/card.png')",
        yalaxicard: "url('/mobileapps/yalaxi/card.png')",
        nducard: "url('/mobileapps/ndusapp/card.png')",
        peptidecard: "url('/mobileapps/peptide/card.png')",
        apployeebg1: "url('/mobileapps/apployee/bg1.png')",
        apployeebg2: "url('/mobileapps/apployee/bg2.png')",
        apployeebg3: "url('/mobileapps/apployee/bg3n.png')",
        srcard: "url('/mobileapps/sr/card.png')",
        apployeecard: "url('/mobileapps/apployee/card.png')",
      },

      colors: {
        nht: '#006360',
        lp: '#792C21',
        na: '#4580AE',
        pg: '#00E0C5',
        pgc2: '#3E638F',
        ippc_pc: '#283E62',
        ippc_pc2: '#243A5F',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      clipPath: {
        'custom-polygon':
          'polygon(83% 23%, 100% 47%, 85% 69%, 25% 69%, 0% 50%, 21% 23%)',
      },
      boxShadow: {
        'glow-white': '0 0 10px 5px rgba(255, 255, 255, 0.6)',
        'glow-yellow': '0 0 10px 5px rgba(238, 173, 4, 0.6)',
        'glow-blue': '0 0 10px 5px rgba(9, 24, 75, 0.6)',
        'glow-gray': '0 0 10px 5px rgba(190, 190, 190, 0.6)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slow-spin': 'spin 5s linear infinite', // Adjust the duration (e.g., 5s)
        'slow-bounce': 'bounce 2s linear infinite', // Adjust the duration (e.g., 5s)
        'bounce-once': 'bounce 2s linear once', // Adjust the duration (e.g., 5s)
        'zoom-in': 'zoom-in 1s ease-in-out forwards',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
        marquee: 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        ripple: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(0.9)',
          },
        },
        'zoom-in': {
          '0%': {
            opacity: '0',
            transform: 'scale3d(0.3, 0.3, 0.3)',
          },
          '80%': {
            opacity: '0.8',
            transform: 'scale3d(1.1, 1.1, 1.1)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
