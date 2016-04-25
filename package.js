Package.describe({
  name: 'kevinchen:echarts',
  version: '0.3.0',
  summary: 'baidu echarts',
  git: 'https://chendong0120@github.com/chendong0120/heytz-echarts.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('src/echarts.min.js', ['web.browser', 'web.cordova']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('kevinchen:echarts');
  api.addFiles('echarts-tests.js');
});
