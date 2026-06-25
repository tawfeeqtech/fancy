module.exports = {
    important: false,
    content: [
        "src/views/**/*.twig",
        "src/assets/js/**/*.js",
        'node_modules/@salla.sa/twilight-tailwind-theme/safe-list-css.txt',
    ],
    darkMode: 'class',
    theme   : {
        container : {
            center : true,
            padding: '10px',
            screens: { '2xl': "1280px" }
        },
        fontFamily: {
            sans: ['var(--font-main)', '-apple-system', 'BlinkMacSystemFont'],
            primary: "var(--font-main)"
        },
        extend    : {
            transitionTimingFunction: {
              'elastic': 'cubic-bezier(0.55, 0, 0.1, 1)',
            },
            gridTemplateColumns: { 'auto-fill': 'repeat(auto-fill, 290px)' },
            colors: {
                'dark'         : '#1D1F1F',
                'darker'       : '#0E0F0F',
                'danger'       : '#AE0A0A',
                'primary-dark' : 'var(--color-primary-dark)'
            },
            spacing: {
              '3.75': '15px', '7.5' : '30px', '58': '232px',
              '62': '248px', '100' : '28rem', '116': '464px',
              '132': '528px', '200': '800px',
            },
            borderRadius: { 'large': '22px', 'big': '40px', 'tiny': '3px', DEFAULT: '.75rem' },
            fontSize: { 'icon-lg': '33px', 'xxs': '10px', 'xxxs': '8px', 'title-size': '42px', '22px': '22px' },
            boxShadow: {
                'default' : '5px 10px 30px #2B2D340D',
                'md'      : '5px 10px 99px #2B2D340D',
                'light'   : '0px 4px 15px rgba(1, 1, 1, 0.06)',
            },
            keyframes: {
                slideUpFromBottom: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0%)', opacity: '1' },
                },
            },
            animation: {
                slideUpFromBottom: 'slideUpFromBottom .6s linear',
            },
        },
    },
    corePlugins: { outline: false },
    plugins: [
      require('@salla.sa/twilight-tailwind-theme'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
}
