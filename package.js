Package.describe({
    name: 'kevinchen:echarts',
    version: '0.3.0',
    summary: 'baidu echarts',
    git: 'https://github.com/chendong0120/heytz-echarts.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.addFiles('src/echarts.min.js', 'client', {bare: true});
});