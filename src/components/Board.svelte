<script>
    import Cell from './Cell.svelte';
    import {GameState} from '../models/state';

    let state = new GameState();

    $: winner = state.getWinner()

    function handleClick(i) {
        console.log(winner, state.cells)
        if (winner !== null || state.isCellNotBlank(i)) {
            return;
        }

        state = state.changeState(i, state.nextCharacter())
    }

    function reset() {
        state = new GameState();
    }
</script>


<div class="board">

    <div class="status">
        {#if winner !== null}
            <span><b>{winner.name}</b> is the winner!</span>
            <button class:reset on:click={e => reset()}>Try again</button>
        {:else if state.isTie()}
            It was a tie...
            <button class:reset on:click={e => reset()}>Try again</button>
        {:else}
            <span><b>{state.nextCharacter().name}</b> is the next player</span>
        {/if}
    </div>

    <div class="cells">
        {#each state.cells as character, i}
            <Cell {character} on:click={e => handleClick(i)}/>
        {/each}
    </div>

</div>

<style>
    .board {
        width: 480px;
    }

    .status {
        display: flex;
        height: 40px;
        margin-bottom: 10px;
        justify-content: space-between;
        align-items: center;
    }

    .reset {
        background-color: #44c767;
        border-radius: 28px;
        border: 1px solid #18ab29;
        display: inline-block;
        cursor: pointer;
        color: #ffffff;
        font-family: Arial;
        font-size: 17px;
        padding: 2px 15px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #2f6627;
        height: 35px;
    }

    .reset:hover {
        background-color: #5cbf2a;
    }

    .reset:active {
        position: relative;
        top: 1px;
    }
</style>