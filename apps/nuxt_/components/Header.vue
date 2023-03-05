<template>
	<header class="sticky w-full top-0 bg-white shadow-md">
      <div class="container mx-auto px-4">
        <nav class="flex justify-between items-center py-4">
          <div class="text-xl font-semibold">
            <router-link to="/"><span class="mr-1">🚀</span> Cosmeak</router-link>
          </div>
          <div class="flex space-x-4">
            <router-link to="/" class="text-gray-600 hover:text-gray-900">Accueil</router-link>
            <router-link to="/projects" class="text-gray-600 hover:text-gray-900">Projets</router-link>
            <router-link to="/contact" class="text-gray-600 hover:text-gray-900">Contact</router-link>
          </div>
        </nav>
      </div>
    </header>
</template>