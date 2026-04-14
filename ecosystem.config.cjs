module.exports = {
  apps: [
    {
      name: "ecoreklama",
      script: "node_modules/.bin/next",
      args: "start -p 4006",
      cwd: "/home/eldar/ecoreklama",
      env: {
        NODE_ENV: "production",
        TG_BOT_TOKEN: "8708555854:AAFVMCmEXRvzkjKSE6W8dPTDc3qHdc9l-wc",
        TG_CHAT_ID: "125861752",
      },
    },
  ],
};
