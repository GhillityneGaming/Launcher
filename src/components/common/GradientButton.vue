<template>
    <button class="btn">{{ text }}</button>
</template>


<script>
export default {
    props: {
        text: String
    }
}
</script>

<style>
.btn {
    font-family: 'Lato';
    font-weight: 500;
    text-transform: uppercase;
    box-sizing: border-box;
    /* padding: 15px 150px; */
    padding: 1rem 9.4rem !important;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    opacity: 0.8;
    cursor: pointer;
    background-image: linear-gradient(to right, #00c6ff, #0072ff);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.btn:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    opacity: 1;
}
</style>
