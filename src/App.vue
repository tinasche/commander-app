
<template>
  <div class="container" id="main">
    <h2>Commands App</h2>

    <div id="commandList" v-for="command in commandStore.commandsList" :key="command.Id">
      <CommandItem :commandString="command.CommandString" :commandDesc="command.Description" :commandPlatform="command.Platform" />
    </div>

  </div>
</template>

<script>
import { useCommandsStore } from './stores/commandsStore'
import CommandItem from './components/CommandItem.vue'
export default {
  components: { CommandItem },
  setup() {
    const commandStore = useCommandsStore()

    return { commandStore }
  }
}
</script>