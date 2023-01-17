<template>
    <div id="commandItem">
        <article>
            <header><b>Platform</b>: {{ commandPlatform }}</header>
            <em>
                {{ commandString }}</em>
            <footer>Description: {{ commandDesc }}</footer>
        </article>
    </div>
</template>

<script>
export default {
    props: ['commandString', 'commandDesc', 'commandPlatform']
}
</script>