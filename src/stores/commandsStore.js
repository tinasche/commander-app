import { defineStore } from "pinia";

export const useCommandsStore = defineStore("commandsStore", {
  state: () => ({
    commandsList: [
      {
        Id: 1,
        CommandString: "dotnet watch run",
        Description:
          "executes dotnet with 'watch' parameter for file changes and hot reloads",
        Platform: "dotnet",
      },
      {
        Id: 2,
        CommandString: "dotnet build",
        Description: "build the current project/solution",
        Platform: "dotnet",
      },
      {
        Id: 3,
        CommandString: "npm init vue@latest",
        Description: "start a new vue project",
        Platform: "vuejs",
      },
    ],
    }),
    actions: {

    },
    getters: {
        getAllCommands: function () {
            return this.commandsList
        }
    }
});
