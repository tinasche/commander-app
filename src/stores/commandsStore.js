import { defineStore } from "pinia";
import axios  from "axios";

// axios.defaults.baseURL = "https://localhost:7188/api/Commands" 
axios.defaults.baseURL = "https://comverse.azurewebsites.net/api/Commands" 

export const useCommandsStore = defineStore("commandsStore", {
  state: () => ({
    commandsList: ["something"],
  }),
  actions: {
    // FIXME: resolve delay from async call?
    getCommands: async function() {
      try {
        const output = await axios.get()
        this.commandsList = output.data
        // console.log(output.data);
      } catch (error) {
        console.error(error);
      }
    }    
  },
  getters: {
    getAllCommands: function () {
      return this.commandsList
    }
  }
})
