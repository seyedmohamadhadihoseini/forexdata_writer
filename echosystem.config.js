module.exports = {

  apps: [

    {

      name: 'server', // نام دلخواه برای فرآیند PM2

      script: 'npm', // دستور اصلی

      args: 'start', // آرگومان‌های دستور

      cwd: './', // مسیر پروژه

      interpreter: 'cmd.exe', // برای ویندوز

      interpreter_args: '/c', // آرگومان برای cmd.exe

      env: {

        NODE_ENV: 'production', // یا development بسته به نیاز

      },

    },

  ],

};