import { motion } from 'framer-motion';

function AnimatedNasdaqLogo() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        version="1.1"
        viewBox="0 0 2000 2000"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="2000" height="2000" fill="#FEFEFE" />
        <motion.g
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <path
            transform="translate(720,764)"
            d="m0 0h275l-4 2-13 4-10 6-8 8-7 14-21 58-14 38-9 24-9 26-10 27-56 154-23 63-21 58-21 57-23 64-18 49-28 77-2 3h-274l3-10 23-64 19-52 40-110 15-41 92-253 19-52 20-55 21-58 8-16 9-10 11-7z"
            fill="#018FB8"
          />
        </motion.g>
        <motion.g
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
        >
          <path
            transform="translate(1012,775)"
            d="m0 0h9l10 2 9 4 8 6 8 9 5 11 23 63 20 55 10 27-1 5-23 64-15 41-20 55-19 52-13 36-5 11-6 9-5 5-8 6-11 4-5 1h-14l-13-4-10-7-7-7-7-14-16-44-23-63-14-38 3-11 21-58 16-43 7-20 9-24 8-23 11-30 16-44 6-14 9-10 9-7 11-4z"
            fill="#018FB8"
          />
        </motion.g>
        <motion.g
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.4 }}
        >
          <path
            transform="translate(1293,520)"
            d="m0 0h275l-3 10-11 31-21 57-18 50-21 58-14 38-21 58-14 38-17 47-21 57-11 31-21 57-21 58-20 55-17 47-7 16-6 8-9 8-12 6-10 2h-274l2-2 13-4 10-6 7-7 7-12 17-47 21-57 11-31 18-49 13-36 21-57 7-20 21-57 22-61 20-55 21-58 11-29 9-26 10-27 20-55z"
            fill="#018FB8"
          />
        </motion.g>
      </svg>
    </div>
  );
}

export default AnimatedNasdaqLogo;
