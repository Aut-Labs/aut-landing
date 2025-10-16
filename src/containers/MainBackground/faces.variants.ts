export const faceOneMovementVariant = {
  initial: {
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      y: { stiffness: 200, velocity: -100 },
      x: { stiffness: 200, velocity: -100 },
    },
  },
  after: {
    y: 182 - 361,
    x: 510 - 323,
    scale: 0.6,
    transition: {
      y: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
      x: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  },
};

export const faceTwoMovementVariant = {
  initial: {
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      y: { stiffness: 200, velocity: -100 },
    },
  },
  after: {
    y: 182 - 200,
    x: 510 - 160,
    scale: 0.6,
    transition: {
      y: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
      x: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  },
};

export const faceThreeMovementVariant = {
  initial: {
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      y: { stiffness: 200, velocity: -100 },
    },
  },
  after: {
    y: 592.167 - 451,
    x: 302 - 90,
    scale: 0.6,
    transition: {
      y: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
      x: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  },
};

export const faceFourMovementVariant = {
  initial: {
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      y: { stiffness: 200, velocity: -100 },
    },
  },
  after: {
    y: 592.167 - 814,
    x: 302 - 179,
    scale: 0.6,
    transition: {
      y: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
      x: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  },
};

export const faceFiveMovementVariant = {
  initial: {
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      y: { stiffness: 200, velocity: -100 },
    },
  },
  after: {
    y: 454 - 626,
    x: 1232 - 946,
    scale: 0.6,
    transition: {
      y: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
      x: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  },
};

export const faceSixMovementVariant = {
  initial: {
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      y: { stiffness: 200, velocity: -100 },
    },
  },
  after: {
    y: 454 - 744,
    x: 1232 - 1074,
    scale: 0.6,
    transition: {
      y: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
      x: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  },
};

export const faceSevenMovementVariant = {
  initial: {
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      y: { stiffness: 200, velocity: -100 },
    },
  },
  after: {
    y: 454 - 92,
    x: 1232 - 1357,
    scale: 0.6,
    transition: {
      y: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
      x: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  },
};

export const faceScaleVariant = {
  initial: {
    scale: 1,
  },
  after: {
    scale: 0.6,
  },
};
