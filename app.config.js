module.exports = {
  apps: [
    {
      name: "MAIN",
      namespace: "Pusha",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "1G",
      cwd: "./BOTLAR/BOTS/Ana",
      output: '../../../Logger/[1]out.log',
      error: '../../../Logger/[2]error.log',
      log: '../../../Logger/[3]combined.outerr.log'
    },
    {
      name: "GUARDI",
      namespace: "Pusha",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "1G",
      cwd: "./BOTLAR/BOTS/Guard_I",
      output: '../../../Logger/[1]out.log',
      error: '../../../Logger/[2]error.log',
      log: '../../../Logger/[3]combined.outerr.log'
    },
    {
      name: "GUARDII",
      namespace: "Pusha",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "1G",
      cwd: "./BOTLAR/BOTS/Guard_II",
      output: '../../../Logger/[1]out.log',
      error: '../../../Logger/[2]error.log',
      log: '../../../Logger/[3]combined.outerr.log'
    },
    {
      name: "GUARDIII",
      namespace: "Pusha",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "1G",
      cwd: "./BOTLAR/BOTS/Guard_III",
      output: '../../../Logger/[1]out.log',
      error: '../../../Logger/[2]error.log',
      log: '../../../Logger/[3]combined.outerr.log'
    },
    {
      name: "GUARDIV",
      namespace: "Pusha",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "1G",
      cwd: "./BOTLAR/BOTS/Guard_IV",
      output: '../../../Logger/[1]out.log',
      error: '../../../Logger/[2]error.log',
      log: '../../../Logger/[3]combined.outerr.log'
    },
    {
      name: "INVITE",
      namespace: "Pusha",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "1G",
      cwd: "./BOTLAR/BOTS/Invite",
      output: '../../../Logger/[1]out.log',
      error: '../../../Logger/[2]error.log',
      log: '../../../Logger/[3]combined.outerr.log'
    },
    {
      name: "STATS",
      namespace: "Pusha",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "1G",
      cwd: "./BOTLAR/BOTS/Stats",
      output: '../../../Logger/[1]out.log',
      error: '../../../Logger/[2]error.log',
      log: '../../../Logger/[3]combined.outerr.log'
    }, 
     {
      name: "CHAT_GUARD",
      namespace: "Pusha",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "1G",
      cwd: "./BOTLAR/BOTS/Chat_Guard",
      output: '../../../Logger/[1]out.log',
      error: '../../../Logger/[2]error.log',
      log: '../../../Logger/[3]combined.outerr.log'
    }, 
  ]
};
