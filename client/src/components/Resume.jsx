import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'
import resume from '../images/Devin Parkinson Resume.pdf'


class Resume extends Component {
  state = {
    pageNumber: 1,
  }

  render() {
    const { pageNumber } = this.state;

    return(
      <div>
        <div
          style={styles.res}
          >
          <Document
            file={resume}
            onLoadSuccess={this.onDocumentLoadSuccess}
            >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
    )
  }
}

const styles = {
  res: {
    display: "block",
    height: "80vh",
    width: "50vw",
  }
}

export default Resume;
