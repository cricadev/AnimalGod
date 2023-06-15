<script setup lang="ts"></script>

<template>
  <div>
    <UInput
      icon="i-heroicons-magnifying-glass-20-solid"
      color="white"
      variant="outline"
      size="xl"
      trailing
      placeholder="Search"
      :ui="{
        base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none',
        custom: '',
        color: {
          white:
            'border-0 bg-contSecond dark:bg-darkContSecond text-darkBg dark:text-contInactive rounded-md shadow-sm   placeholder:text-contInactive dark:placeholder:text-contInactive',
        },
        variant: {
          outline:
            'border-0 bg-contSecond dark:bg-darkContSecond text-darkBg dark:text-contInactive rounded-md shadow-sm   placeholder:text-contInactive dark:placeholder:text-contInactive border-2 border-contAccent dark:border-contAccent',
        },

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

        icon: {
          base: 'text-darkContText dark:text-darkContText',
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
              'absolute inset-y-0 left-0 flex items-center pointer-events-none ',
          },
          trailing: {
            wrapper:
              'absolute inset-y-0 right-0 flex items-center pointer-events-none bg-contAccent dark:bg-contAccent p-4 rounded-r-md',
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
      }"
    />
  </div>
</template>

<style></style>
