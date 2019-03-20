import { Component, OnInit } from '@angular/core';
import { FilePickerClass } from './filePicker';
import { ProductService } from './product.service';
// import { FilePicker } from '../../stu-landing/sharedClass/filePicker';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showlist = false;
  obj: any = {
    name: '',
    cost: 0,
    category: '',
    subcategory: '',
    size: '',
    images: []
  }
  fileUploads: any = "";
  productsData: any = []

  constructor(private ps: ProductService) { }
  ngOnInit() {

  }

  attachmentUpload() {
    FilePickerClass
      .returnImageUrl()
      .then(imgBlob => {
        console.log('uploadedFiles', imgBlob);
        this.obj.images = [];
        this.fileUploads = "";
        let tempArr = [];
        for (let i = 0; i < imgBlob.length; i++) {
          
          if (this.obj.images.map(function (e) {
            return e.url;
          }).indexOf(imgBlob[i].filename) === -1) {
            this.obj.images.push({ /*name: imgBlob[i].filename, */url: imgBlob[i].url });
            tempArr.push(imgBlob[i].filename);
          }
        }
        this.fileUploads = this.obj.images;
        console.log('obj.images', this.obj.images);
      });
  }

  addProducts() {
    console.log('imaages', this.obj);
    
    this.ps.addProductsinService(this.obj).subscribe((da: any)=>{
      console.log('da:', da)
    })

  }

  showListofProjects(){
    this.showlist = !this.showlist;
    this.ps.getAllItems().subscribe((da: any)=>{
      console.log('daaaaa:', da)
      this.productsData = da.data;

    })
  }
  showImages(){
    $('#exampleModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })
  }
}
