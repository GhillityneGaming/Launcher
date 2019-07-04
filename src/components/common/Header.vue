<template>
    <div id="title-bar">
        <div id="title"><img src="@/assets/icon.png" alt=""><span>ValiantLauncher</span></div>
        <div id="title-bar-btns">
           <button id="min-btn" v-on:click="minimize"><span>&#xE921;</span></button>
           <button id="max-btn" v-on:click="maximize" ref="maximizeBtn"><span>&#xE922;</span></button>
           <button id="restore-btn" ref="restoreBtn" v-on:click="restore"><span>&#xE923;</span></button>
           <button id="close-btn" v-on:click="close"><span>&#xE8BB;</span></button>
    </div>
 </div>
</template>

<script>
import { remote } from 'electron';
export default {
    methods: {
        minimize: function() {
            remote.getCurrentWindow().minimize();
        },
        maximize: function() {
            remote.getCurrentWindow().maximize();
            this.toggleButtons();
        },
        restore: function() {
            remote.getCurrentWindow().unmaximize();
            this.toggleButtons();
        },
        close: function() {
            remote.getCurrentWindow().close();
        },
        toggleButtons: function() {
            if (remote.getCurrentWindow().isMaximized()) {
                this.$refs.maximizeBtn.style.display = "none";
                this.$refs.restoreBtn.style.display = "inline-block";
                return;
            }
            this.$refs.maximizeBtn.style.display = "inline-block";
            this.$refs.restoreBtn.style.display = "none";
        }
    },
    mounted: function() {
        this.toggleButtons();
    }
}
</script>

<style scoped>
#title-bar {
    display: block;
    -webkit-app-region: drag;
    height: 35px; 
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0;
    margin: 0px; 
    z-index: 1000;
}

#title {
    display: flex;
    height: 100%;
    align-items: center;
    font-family: "Segoe UI", sans-serif;
    font-size: 14px;
    margin-left: 15px;
    overflow-x: hidden;
}

#title img {
    width: 25px;
    margin-right: 5px;
}

#title span {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
}

#title-bar-btns {
    -webkit-app-region: no-drag;
    position: absolute;
    top: 0px;
    right: 0px;
}

#title-bar-btns button {
    background: transparent;
    border: none;
    color: #eee;
    height: 35px;
    width: 39px;
    font-family: "Segoe MDL2 Assets";
    font-size: 10px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

#title-bar-btns button:hover {
    cursor: pointer;
}

#title-bar-btns button:focus {
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
    -webkit-tap-highlight-color: transparent;
}

#min-btn:hover,
#max-btn:hover,
#restore-btn:hover {
    background: rgba(255, 255, 255, 0.2) !important;
}

#close-btn:hover {
    background: rgba(255, 53, 53, 0.61) !important;
}
</style>
