import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

declare const nid: any; // Declare the NeuroID function

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  public formId: string = 'form_adopt022';

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.initNeuroIDScript();
    
    var myUuid = this.uuidv4();
    console.log("NeuroID UserId:", myUuid);
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  initNeuroIDScript() {
    // Using Renderer2 for DOM manipulations
    const s = this.renderer.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://scripts.neuro-id.com/c/nid-adopt022-test.js';
    s.async = true;
    this.renderer.appendChild(this.el.nativeElement.ownerDocument.body, s);
    
    nid('setDebug',true);
  }
}
