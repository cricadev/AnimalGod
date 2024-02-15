export default defineAppConfig({
  ui: {
    icons: "all",
    primary: "contAccent",
    gray: "darkContSecond",
    button: {
      base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 justify-center",
      font: "font-medium",
      rounded: "rounded-md",
      size: {
        "2xs": "text-xs",
        xs: "text-Captionlg",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-sm",
        xl: "text-Body1sm",
        providers: "text-Captionlg",
      },
      gap: {
        "2xs": "gap-x-1",
        xs: "gap-x-1.5",
        sm: "gap-x-1.5",
        md: "gap-x-2",
        lg: "gap-x-2.5",
        xl: "gap-x-2.5",
        providers: "gap-x-2.5",
      },
      padding: {
        "2xs": "px-2 py-1",
        xs: "px-2.5 py-1.5",
        sm: "px-2.5 py-1.5",
        md: "px-3 py-2",
        lg: "px-3.5 py-2.5",
        xl: "px-3.5 py-2.5",
        providers: "px-4 py-4",
      },
      square: {
        "2xs": "p-1",
        xs: "p-1.5",
        sm: "p-1.5",
        md: "p-2",
        lg: "p-2.5",
        xl: "p-2.5",
        providers: "p-2.5",
      },
      color: {
        primary: {
          solid:
            "shadow-sm disabled:text-darkBg  text-contSecond-50 bg-contAccent hover:bg-contAccent-700 disabled:bg-white dark:bg-contAccent dark:hover:bg-contAccent/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",

          ghost:
            "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",

        },
        darkContThird: {
          solid:
            "shadow-sm  text-contSecond-50 bg-darkContThird hover:bg-darkContThird-700 disabled:bg-white dark:bg-darkContThird dark:hover:bg-darkContThird/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        }
        ,
        secondary: {
          solid:
            "shadow-sm  text-gray dark:text-white bg-darkContThird hover:bg-darkContThird-700 disabled:bg-white dark:bg-darkContThird dark:hover:bg-darkContThird/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
          ghost:
            "text-black font-bold dark:text-black font-bold hover:text-black font-bold dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
          link: "text-black font-bold dark:text-black font-bold hover:text-black font-bold dark:hover:text-black font-bold underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
          outline:
            "ring-1 ring-inset ring-contAccent dark:bg-Bg bg-darkBg text-Bg dark:text-darkBg",
        },
        invisible: {
          solid: " text-darkBg dark:text-Bg bg-transparent",
          ghost: "text-transparent bg-transparent",
          outline: "text-transparent bg-transparent",
        },
        toggle: {
          solid: "text-darkBg dark:text-Bg",
        },
        third: {
          solid:
            "shadow-sm  text-gray dark:text-white bg-darkContText hover:bg-darkContText-700 disabled:bg-white dark:bg-darkContText dark:hover:bg-darkContText/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        },
      },
      variant: {
        solid:
          "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
        outline:
          "ring-1 ring-inset ring-contAccent text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
        soft: "text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 dark:bg-{color}-950 dark:hover:bg-{color}-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
        ghost:
          "text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
        link: "text-{color}-500 hover:text-{color}-600 dark:text-{color}-400 dark:hover:text-{color}-500 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
      },
      icon: {
        base: "flex-shrink-0",
        size: {
          "2xs": "h-4 w-4",
          xs: "h-4 w-4",
          sm: "h-5 w-5",
          md: "h-5 w-5",
          lg: "h-5 w-5",
          xl: "h-6 w-6",
          providers: "h-6 w-6",
        },
      },
      default: {
        size: "sm",
        variant: "solid",
        color: "primary",
        loadingIcon: "i-heroicons-arrow-path-20-solid",
      },
    },
    checkbox: {
      wrapper: "relative flex items-start ",
      base: "h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",
      rounded: "rounded",
      color: "text-{color}-500 dark:text-{color}-400",
      background: "bg-white dark:bg-gray-900",
      border: "border border-gray-300 dark:border-gray-700",
      ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
      label: "font-regular text-[#5C6D82] text-Footer",
      required: "text-red-500 dark:text-red-400",
      help: "text-gray-500 dark:text-gray-400",
      default: {
        color: "primary",
      },
    },
    input: {
      color: {
        white:
          'border-0 bg-contSecond dark:bg-darkContSecond text-darkBg dark:text-contInactive rounded-l-md rounded-r-none shadow-sm   placeholder:text-contInactive dark:placeholder:text-contInactive',


      },

      variant: {
        outline:
          'border-0 bg-contSecond dark:bg-darkContSecond text-darkBg dark:text-contInactive rounded-l-md rounded-r-none shadow-sm   placeholder:text-contInactive dark:placeholder:text-contInactive border-2 border-contAccent dark:border-contAccent',
      }
    },
    select: {

      color: {
        white: {
          outline: ' shadow-md shadow-contSecond dark:shadow-darkContSecond bg-white dark:bg-darkContSecond text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
        },
      },
      padding: {
        'lg': 'py-2 px-5'
      },

    }
  },
});
