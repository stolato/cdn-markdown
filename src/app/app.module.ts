import {NgModule, NO_ERRORS_SCHEMA, SecurityContext} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {MarkdownModule, MERMAID_OPTIONS} from "ngx-markdown";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {FormsModule} from "@angular/forms";
import {AceModule} from "ngx-ace-wrapper";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      mermaidOptions: {
        provide: MERMAID_OPTIONS,
        useValue: {
          darkMode: true,
          look: 'handDrawn',
        },
      },
    }),
    FormsModule,
    AceModule,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    provideAnimationsAsync(),
  ]
})
export class AppModule {}
