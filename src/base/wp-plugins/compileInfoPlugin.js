import console from '../shared/console';

export default class compileInfoPlugin {

  apply(compiler) {
    compiler.plugin('done', (stats) => {
      if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1) {
        console.error(stats.compilation.errors);
      } else {
        console.success('Compilation completed without errors!');
      }
    });
  }
}
