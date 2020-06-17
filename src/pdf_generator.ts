import Fs = require('fs');
import Path = require('path');
import Util = require('util');
import Handlebars = require('handlebars');
import yenv = require('yenv');

const wkhtmltopdf = require('wkhtmltopdf');

let html = async function() : Promise<string> {
  try {
    const templatePath = Path.resolve('path', 'to', 'invoice.html')
    const ReadFile = Util.promisify(Fs.readFile)
    const content = await ReadFile(templatePath, 'utf8')

    // compile and render the template with handlebars
    const template = Handlebars.compile(content)

    const data = {
      your: 'data'
    }

    return template(data)
  } catch (error) {
    throw new Error('Cannot create invoice HTML template.')
  }
}

let pdfCompile = async function() {
  const env = yenv('env.yaml', { env: 'dev' })
  wkhtmltopdf.command = env.PDF_UTIL_PATH;

  //const html = await this.html()
  var htmlContent = "<h1>Test</h1><p>Hello world</p>";

  // URL
  wkhtmltopdf(htmlContent, { pageSize: 'letter' })
  .pipe(Fs.createWriteStream('demo.pdf'));
}

module.exports = pdfCompile