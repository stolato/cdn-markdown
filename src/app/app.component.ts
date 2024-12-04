import { Component } from "@angular/core";
import 'brace';
import 'brace/mode/markdown.js';
import 'brace/mode/text';
import 'brace/theme/monokai.js';

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    standalone: false
})
export class AppComponent {
  title = "markdown";

  markdown = `## Markdown __rulez__!
---

### > Syntax highlight
---
\`\`\`typescript
const language = 'typescript';
\`\`\`

### > Lists
---
1. Ordered list
2. Another bullet point
   - Unordered list
   - Another unordered bullet

### > Blockquote
---
> Blockquote to the max

### > Checklist
---
- [ ] item 1
- [ ] item 2
- [x] item checked

### > Table
---
| Column 1 | Column 2 |
:--- | :--- |
| Content 1 | Content 2 |

### Fluxo Grama usando [Mermaid](https://mermaid.js.org)

\`\`\`mermaid
graph LR
A[Quadrado] -- Texto --> B(Arredondado)
A --> C{Triangulo}
C --> D{D}
B --> D
`;
}

