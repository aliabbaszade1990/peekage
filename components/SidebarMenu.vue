<template>
  <aside
    class="w-64 border-r border-gray-200 min-h-screen flex flex-col justify-between"
  >
    <div>
      <div class="mb-8 ps-8 pt-8">
        <img :src="logoUrl" alt="Peekage" class="w-32 h-8" />
      </div>

      <nav class="space-y-2 ps-3 pe-3">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.id"
          :to="item.to"
          class="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors gap-3"
          :class="{
            'bg-[#1B63F5] font-semibold text-white hover:text-gray-700':
              isActive(item.to),
          }"
        >
          <img :src="item.icon" :alt="item.label" class="w-5 h-5" />
          <span>{{ item.label }}</span>
        </NuxtLink>
      </nav>
    </div>

    <div
      class="ps-3 pe-3 text-gray-700 border-t border-gray-200 h-20 flex items-center justify-between"
    >
      <span class="text-italic">[emailaddress]</span>
      <img :src="logoutIconUrl" alt="Logout" class="w-5 h-5 me-3" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import logoUrl from "~/assets/logo.svg";
import offersIconUrl from "~/assets/icons/offers.svg";
import packsIconUrl from "~/assets/icons/packs.svg";
import brandsIconUrl from "~/assets/icons/brands.svg";
import companiesIconUrl from "~/assets/icons/companies.svg";
import logoutIconUrl from "~/assets/icons/logout.svg";

interface MenuItem {
  id: string;
  label: string;
  to: string;
  icon?: string;
}

const route = useRoute();
const isActive = (to: string) => route.path === to;

const menuItems: MenuItem[] = [
  { id: "1", label: "Offers", to: "/offers", icon: offersIconUrl },
  { id: "2", label: "Packs", to: "/packs", icon: packsIconUrl },
  { id: "3", label: "Brands", to: "/brands", icon: brandsIconUrl },
  {
    id: "4",
    label: "Companies",
    to: "/companies",
    icon: companiesIconUrl,
  },
];
</script>
