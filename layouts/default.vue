<template>
    <div class="body">
        <nav-header/>
        <main>
            <slot/>
        </main>
        <nav-footer/>
    </div>
</template>

<style scoped>
.body {
    min-width: 1000px;
    @apply flex flex-col min-h-screen bg-gray-100
}
</style>