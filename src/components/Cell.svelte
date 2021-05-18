<script>
    import {wolf,bunny} from "../characters/characters";

    export let character
</script>
<button class:wolf={character===wolf} class:bunny={character===bunny} on:click></button>

<style>
    button {
        background: #fff;
        border: 1px solid #999;
        float: left;
        font-size: 24px;
        font-weight: bold;
        line-height: 34px;
        height: 160px;
        margin-right: -1px;
        margin-top: -1px;
        margin-bottom: -1px;
        padding: 0;
        text-align: center;
        width: 160px;
    }

    .wolf {
        background-image: url("/images/wolf.png");
        background-size: cover;
    }

    .bunny {
        background-image: url("/images/bunny.png");
        background-size: cover;
    }

    button:focus {
        outline: none;
    }
</style>