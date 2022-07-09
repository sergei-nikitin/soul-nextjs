export const toTopAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,

    transition: { delay: custom * 0.3, duration: 0.5 },
  }),
};
