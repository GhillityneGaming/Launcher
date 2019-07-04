<template>
    <ul class="nav">
        <li class="active">Play</li>
        <li class="">News</li>
        <li class="">Profiles</li>
        <li class="">Skins</li>
    </ul>
</template>

<style>
.nav {
    display: block;
    margin: 0;
    list-style-type: none;
    padding: 0;
    z-index: 999;
}

.nav li {
    padding: 15px 75px;
    background: rgba(0, 0, 0, 0.40);
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    /* font-size: 1.2rem; */
    font-size: calc(14px + 3.5 * ((100vw - 320px) / 670));
    transition: background .2s ease-in-out;
    cursor: pointer;
    float: left;
}

.nav .active {
    background: rgba(0, 0, 0, 0.20);
}

.nav li:hover {
    background: rgba(0, 0, 0, 0.50);
}

.nav li:not(:last-child) {
    margin-right: 15px;
}
</style>
