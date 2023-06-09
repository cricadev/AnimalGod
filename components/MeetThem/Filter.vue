<template>
  <div class="flex justify-between mx-5 items-center">
    <USelectMenu
      placeholder="Animal"
      v-model="selected"
      :options="people"
      id="select-menu"
      ref="selectMenu"
      :ui="{
        wrapper: 'relative inline-flex',
        container: 'z-20',
        width: 'w-full',
        height: 'max-h-60',
        base: 'relative focus:outline-none overflow-y-auto scroll-py-1 bg-contAccent',
        background: 'bg-contAccent',
        shadow: 'shadow-lg',
        rounded: 'rounded-md',
        padding: 'p-1',
        ring: 'ring-1 ring-contAccent-200 dark:ring-contAccent-700',
        input:
          'block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-darkBg dark:text-gray-200 bg-contAccent border-0 border-b border-gray-200 dark:border-gray-700 focus:border-inherit sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-Bg ',
        color: {
          white:
            'shadow-sm bg-contAccent text-Bg dark:text-darkBg ring-1 ring-inset ring-contAccent focus:ring-2 focus:ring-primary-500 dark:focus:ring-contAccent',
          gray: {
            outline:
              'shadow-sm bg-contAccent text-Bg dark:text-darkBg ring-1 ring-inset ring-contAccent focus:ring-2 focus:ring-primary-500 dark:focus:ring-contAccent',
          },
        },
        variant: {
          outline:
            'shadow-sm bg-contAccent text-contAccent ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
          none: 'bg-contAccent focus:ring-0 focus:shadow-none',
        },
        option: {
          base: 'cursor-default select-none relative flex items-center justify-between gap-1 ',
          rounded: 'rounded-md',
          padding: 'px-2 py-1.5',
          size: 'text-sm',
          color: 'dark:text-Bg text-darkBg',
          container: 'flex items-center gap-2 min-w-0',
          active: 'dark:text-Bg text-darkBg',
          inactive: '',
          selected: 'pr-7',
          disabled: 'cursor-not-allowed opacity-50',
          empty: 'text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5',
          icon: {
            base: 'flex-shrink-0 h-4 w-4',
            active: 'text-Bg',
            inactive: 'text-gray-400 dark:text-gray-500',
          },
          selectedIcon: {
            wrapper: 'absolute inset-y-0 right-0 flex items-center',
            padding: 'pr-2',
            base: 'h-4 w-4 text-gray-900 dark:text-white flex-shrink-0',
          },
          avatar: {
            base: 'flex-shrink-0',
            size: '3xs',
          },
          chip: {
            base: 'flex-shrink-0 w-2 h-2 mx-1 rounded-full',
          },
        },
        transition: {
          leaveActiveClass: 'transition ease-in duration-100',
          leaveFromClass: 'opacity-100',
          leaveToClass: 'opacity-0',
        },
        popper: {
          placement: 'bottom-end',
        },
        default: {
          selectedIcon: 'i-heroicons-check-20-solid',
        },
      }"
      :uiSelect="{
        wrapper: 'relative',
        base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 bg-Bg',
        rounded: 'rounded-md',
        placeholder: 'placeholder-contAccent dark:placeholder-contAccent',
        custom: 'bg-Bg',
        size: {
          '2xs': 'text-xs',
          xs: 'text-xs',
          sm: 'text-sm',
          md: 'text-sm',
          lg: 'text-base',
          xl: 'text-base',
        },
        gap: {
          '2xs': 'gap-x-1',
          xs: 'gap-x-1.5',
          sm: 'gap-x-2',
          md: 'gap-x-2',
          lg: 'gap-x-2',
          xl: 'gap-x-2',
        },
        padding: {
          '2xs': 'px-2 py-1',
          xs: 'px-2.5 py-1.5',
          sm: 'px-3 py-1.5',
          md: 'px-3 py-2',
          lg: 'px-4 py-2',
          xl: 'px-4 py-3',
        },
        leading: {
          padding: {
            '2xs': 'pl-[26px]',
            xs: 'pl-8',
            sm: 'pl-9',
            md: 'pl-10',
            lg: 'pl-11',
            xl: 'pl-12',
          },
        },
        trailing: {
          padding: {
            '2xs': 'pr-[26px]',
            xs: 'pr-8',
            sm: 'pr-9',
            md: 'pr-10',
            lg: 'pr-11',
            xl: 'pr-12',
          },
        },
        color: {
          white:
            'shadow-sm bg-contAccent text-Bg dark:text-darkBg ring-1 ring-inset ring-contAccent focus:ring-2 focus:ring-primary-500 dark:focus:ring-contAccent',
        },
        variant: {
          outline:
            'shadow-sm bg-contAccent text-contAccent ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
        },
        icon: {
          base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
          color: 'text-{color}-500 dark:text-{color}-400',
          size: {
            '2xs': 'h-3.5 w-3.5',
            xs: 'h-4 w-4',
            sm: 'h-4 w-4',
            md: 'h-5 w-5',
            lg: 'h-5 w-5',
            xl: 'h-6 w-6',
          },
          leading: {
            wrapper:
              'absolute inset-y-0 left-0 flex items-center pointer-events-none',
            padding: {
              '2xs': 'pl-2',
              xs: 'pl-2.5',
              sm: 'pl-3',
              md: 'pl-3',
              lg: 'pl-4',
              xl: 'pl-4',
            },
          },
          trailing: {
            wrapper:
              'absolute inset-y-0 right-0 flex items-center pointer-events-none',
            padding: {
              '2xs': 'pr-2',
              xs: 'pr-2.5',
              sm: 'pr-3',
              md: 'pr-3',
              lg: 'pr-4',
              xl: 'pr-4',
            },
          },
        },
        default: {
          size: 'sm',
          color: 'white',
          variant: 'outline',
          loadingIcon: 'i-heroicons-arrow-path-20-solid',
        },
      }"
    >
      <UButton
        v-if="selected.icon"
        :name="selected.icon"
        :icon="selected.icon"
        size="xl"
        color="contAccent"
        variant="solid"
        :ui="{
          color: {
            contAccent: {
              solid:
                'shadow-sm  text-darkContText dark:text-white bg-contAccent hover:bg-contAccent-700 disabled:bg-white dark:bg-contAccent dark:hover:bg-contAccent/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
            },
          },
          variant: {
            solid:
              'shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
            outline:
              'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
            soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 dark:bg-{color}-950 dark:hover:bg-{color}-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
            link: 'text-{color}-500 hover:text-{color}-600 dark:text-{color}-400 dark:hover:text-{color}-500 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
          },
          icon: {
            base: 'flex-shrink-0',
            size: {
              '2xs': 'h-3.5 w-3.5',
              xs: 'h-4 w-4',
              sm: 'h-4 w-4',
              md: 'h-5 w-5',
              lg: 'h-5 w-5',
              xl: 'h-6 w-6',
            },
          },
        }"
      >
        {{ selected.label }}
      </UButton>
    </USelectMenu>
    <UButton
      size="xl"
      label="Filter by"
      color="contAccent"
      variant="solid"
      trailingIcon="i-mdi-menu-down"
      :ui="{
        color: {
          contAccent: {
            solid:
              'shadow-sm text-contSecond dark:text-darkContSecond   bg-darkContThird hover:bg-darkContThird-700 disabled:bg-white dark:bg-darkContThird dark:hover:bg-darkContThird/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
          },
        },
        variant: {
          solid:
            'shadow-sm text-contSecond dark:text-darkContSecond bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
          outline:
            'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
          soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 dark:bg-{color}-950 dark:hover:bg-{color}-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
          link: 'text-{color}-500 hover:text-{color}-600 dark:text-{color}-400 dark:hover:text-{color}-500 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
        },
        icon: {
          base: 'flex-shrink-0',
          size: {
            '2xs': 'h-3.5 w-3.5',
            xs: 'h-4 w-4',
            sm: 'h-4 w-4',
            md: 'h-5 w-5',
            lg: 'h-5 w-5',
            xl: 'h-6 w-6',
          },
        },
      }"
    />
  </div>
</template>
<script setup lang="ts">
const selectMenu = ref(null);

const people = [
  {
    id: "dog",
    label: "dog",
    icon: "i-mdi-dog",
  },
  {
    id: "cat",
    label: "cat",
    icon: "i-mdi-cat",
  },
];

const selected = ref(people[0]);
</script>
