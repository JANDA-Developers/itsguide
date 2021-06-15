import React, { Component, useState } from 'react';
import Editor from 'pinkloader-ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { SERVER_URI } from 'apollo/uri';

export class UploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }

    upload() {
        return this.loader.file.then( file => new Promise(((resolve, reject) => {
            this._initRequest();
            this._initListeners( resolve, reject, file );
            this._sendRequest( file );
        })))
    }

    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();
        xhr.open('POST', SERVER_URI.replace("/graphql",'') +'/upload', true);
        xhr.responseType = 'json';
    }

    _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = '파일을 업로드 할 수 없습니다.'

        xhr.addEventListener('error', () => {reject(genericErrorText)})
        xhr.addEventListener('abort', () => reject())
        xhr.addEventListener('load', () => {
            const response = xhr.response
            if(!response || response.error) {
                return reject( response && response.error ? response.error.message : genericErrorText );
            }

            resolve({
                default: response.url //업로드된 파일 주소
            })
        })
    }

    _sendRequest(file) {
        const data = new FormData()
        data.append('upload',file)
        this.xhr.send(data)
    }
}


function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new UploadAdapter(loader)
    }
  }

const editorConfiguration = {
    extraPlugins: [MyCustomUploadAdapterPlugin],
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            '|',
            'imageUpload',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'undo',
            'redo',
            'fontBackgroundColor',
            'alignment',
            'fontColor',
            'fontSize',
            'fontFamily',
            'highlight',
            'horizontalLine',
            'imageInsert',
            'underline',
            'strikethrough'
        ]
    },
    mediaEmbed: {
        previewsInData: true
    },
    resizeOptions: [
        {
            name: 'imageResize:original',
            label: 'Original',
            value: null
        },
        {
            name: 'imageResize:50',
            label: '50%',
            value: '50'
        },
        {
            name: 'imageResize:75',
            label: '75%',
            value: '75'
        },
        {
            name: 'imageResize:100',
            label: '100%',
            value: '100'
        }
    ],
    language: 'ko',
    image: {
        styles: [
            'full',
            'side',
            'alignLeft', 'alignCenter', 'alignRight'
        ],
        toolbar: [
            'imageStyle:alignLeft', 
            'imageStyle:alignCenter', 
            'imageStyle:alignRight',
            'imageTextAlternative',
            'imageStyle:full',
            'imageStyle:side'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableProperties'
        ]
    },
    licenseKey: '',
  } 


  const CKEDITOR = ({data,onChange, edit = true, holderHeight = 220, ...props}) => {
    const [loading, setLoading] = useState(true);

    if(edit === undefined) edit = true;

      return (
          <div {...props} className={`myckeditor ${props.className} ${loading && "editor--loading"}`} >
              {!edit && <div className="ck-content editorHolder" style={{minHeight: holderHeight}} dangerouslySetInnerHTML={{__html: data }} />}
              {edit && <div className="ck-content editorHolder editorHolder--loadingHolder" style={{minHeight: holderHeight}} dangerouslySetInnerHTML={{__html: data }} />}
              {edit && <CKEditor
                  editor={ Editor }
                  config={ editorConfiguration }
                  data={data}
                  onReady={ editor => {
                    setLoading(false);
                      // You can store the "editor" and use when it is needed.
                  }}
                  onChange={ ( event, editor ) => {
                      const data = editor.getData();
                      onChange(data);
                  } }
                  onBlur={ ( event, editor ) => {
                  } }
                  onFocus={ ( event, editor ) => {
                  } }
              />}
          </div>
      );

  }

export default CKEDITOR;

