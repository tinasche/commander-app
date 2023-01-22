<template>
  <div class="container" id="main">
    <h2>Commands App</h2>
    <div v-if="commandStore.getAllCommands != null">
      <div v-for="command in commandStore.getAllCommands" :key="command.id"> 
        <CommandItem :commandString="command['commandString']" :commandDesc="command['description']"  :commandPlatform="command['platform']"/>
      </div>
    </div>
    <div id="noContent" v-else>
      <h4>Nothing to see here</h4>
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
    commandStore.getCommands()

    return { commandStore }
  },

  
  
}
</script>

<style>
#noContent{
  text-align: center;
  margin: 2rem;
  font-style: italic;
}
</style>