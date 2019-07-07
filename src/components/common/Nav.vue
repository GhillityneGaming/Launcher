<template>
    <nav>
        <ul class="nav">
            <li class="active">Play</li>
            <li class="">News</li>
            <li class="">Profiles</li>
            <li class="">Settings</li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    background: rgba(0, 0, 0, 0.40);
}
ul {
    display: flex;
    margin: 0;
    list-style-type: none;
    z-index: 999;
}

ul li {
    display: block;
    flex: 1 1 0;
    padding: 15px 75px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: calc(8px + 3.5 * ((100vw - 320px) / 670));
    transition: background .2s ease-in-out;
    cursor: pointer;
    float: left;
}

ul .active {
    border-bottom: 3px solid #0072ff;
}

ul .active,
ul li:hover {
    background: rgba(0, 0, 0, 0.50);
}

@media screen and (max-width: 768px) {
    nav {
        margin-bottom: 25px;
    }
    nav ul {
        display: block;
        padding: 0;
    }
    ul li {
        width: 100%;
    }
}
</style>
