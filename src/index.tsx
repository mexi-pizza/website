import * as React from 'react';
import ReactDOM from 'react-dom';
import { Document, Page } from 'react-pdf/dist/umd/entry.parcel';
import Menu from './assets/menu.pdf';

// import('./assets/menu.pdf').then(res => console.log('hello world', res));

const App = () => {
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file={Menu}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={2} />
                <Page pageNumber={pageNumber} />
            </Document>
            {/* <p>Page {pageNumber} of {numPages}</p> */}
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('app'))
