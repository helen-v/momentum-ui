const colors = require("./colors");

const button = {
  prefix: "md",
  component: "button",
  primary: {
    "bg-color": {
      light: colors.blue[60].name,
      dark: colors.blue[60].name
    },
    hover: {
      "bg-color": {
        light: colors.blue[70].name,
        dark: colors.blue[70].name
      }
    },
    pressed: {
      "bg-color": {
        light: colors.blue[80].name,
        dark: colors.blue[80].name
      }
    },
    "text-color": {
      light: colors.gray["05"].name,
      dark: colors.gray["05"].name
    },
    outline: {
      color: {
        light: colors.blue[70].name,
        dark: colors.blue[40].name
      },
      "text-color": {
        light: colors.blue[70].name,
        dark: colors.blue[40].name
      }
    }
  },
  secondary: {
    "bg-color": {
      light: colors.gray[20].name,
      dark: colors.gray[60].name
    },
    hover: {
      "bg-color": {
        light: colors.gray[30].name,
        dark: colors.gray[70].name
      }
    },
    pressed: {
      "bg-color": {
        light: colors.gray[40].name,
        dark: colors.gray[80].name
      }
    },
    "text-color": {
      light: colors.gray[100].name,
      dark: colors.gray["05"].name
    },
    outline: {
      color: {
        light: colors.gray[70].name,
        dark: colors.gray[40].name
      },
      "text-color": {
        light: colors.gray[70].name,
        dark: colors.gray[40].name
      }
    }
  },
  join: {
    "bg-color": {
      light: colors.green[60].name,
      dark: colors.green[60].name
    },
    hover: {
      "bg-color": {
        light: colors.green[70].name,
        dark: colors.green[70].name
      }
    },
    pressed: {
      "bg-color": {
        light: colors.green[80].name,
        dark: colors.green[80].name
      }
    },
    "text-color": {
      light: colors.gray["05"].name,
      dark: colors.gray["05"].name
    },
    outline: {
      color: {
        light: colors.green[70].name,
        dark: colors.green[40].name
      },
      "text-color": {
        light: colors.green[70].name,
        dark: colors.green[40].name
      }
    }
  },
  cancel: {
    "bg-color": {
      light: colors.red[60].name,
      dark: colors.red[60].name
    },
    hover: {
      "bg-color": {
        light: colors.red[70].name,
        dark: colors.red[70].name
      }
    },
    pressed: {
      "bg-color": {
        light: colors.red[80].name,
        dark: colors.red[80].name
      }
    },
    "text-color": {
      light: colors.gray["05"].name,
      dark: colors.gray["05"].name
    },
    outline: {
      color: {
        light: colors.red[70].name,
        dark: colors.red[40].name
      },
      "text-color": {
        light: colors.red[70].name,
        dark: colors.red[40].name
      }
    }
  },
  ghost: {
    "bg-color": {
      light: 'none',
      dark: 'none'
    },
    hover: {
      "bg-color": {
        light: colors.gray[70].name,
        dark: colors.gray[70].name
      }
    },
    pressed: {
      "bg-color": {
        light: colors.gray[80].name,
        dark: colors.gray[60].name
      }
    },
    "text-color": {
      light: colors.gray[100].name,
      dark: colors.gray["05"].name
    }
  },
  "focus-ring": {
    color: {
      light: colors.blue[60].name,
      dark: colors.blue[40].name
    }
  },
  disabled: {
    "bg-color": {
      light: colors.gray[20].name,
      dark: colors.gray[90].name
    },
    "text-color": {
      light: colors.gray[40].name,
      dark: colors.gray[70].name
    }
  }
};

module.exports = button;
