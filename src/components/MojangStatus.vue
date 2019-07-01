<template>
    <div class="status">
        Mojang Status <span class="online">&nbsp;&bull;</span>
    </div>
</template>

<style scoped>
.status {
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.status span {
    font-family: 'Arial', sans-serif;
    margin-left: 5px;
    font-size: 1.5rem;
}

.online {
    color: #2ecc71;
}
</style>
