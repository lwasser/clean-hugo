---
title: "Testing Code Syntax Highlighting"
date: 2025-12-24
draft: false
excerpt: "A test post to verify code block styling and syntax highlighting works correctly across different languages."
category: "Tutorial"
show_author: false
tags:
  - testing
  - code
  - syntax-highlighting
image:
  src: "images/unsplash-green-fields.webp"
  alt: "Lush green agricultural fields"
  credit: "Photo by Unsplash"
---

This post tests code block styling and syntax highlighting with various code examples.

## Inline code examples

Here's some inline `code` with backticks. You can also use `console.log('hello')` or `import pandas as pd` inline.

## Python code block

Here's a Python example with syntax highlighting:

```python
import pandas as pd
import numpy as np
from pathlib import Path

def process_data(file_path: str) -> pd.DataFrame:
    """
    Process data from a CSV file.
    
    Args:
        file_path: Path to the CSV file
        
    Returns:
        DataFrame with processed data
    """
    df = pd.read_csv(file_path)
    
    # Clean the data
    df = df.dropna()
    df['date'] = pd.to_datetime(df['date'])
    
    # Calculate statistics
    mean_value = df['value'].mean()
    std_value = df['value'].std()
    
    print(f"Mean: {mean_value:.2f}, Std: {std_value:.2f}")
    
    return df

# Example usage
if __name__ == "__main__":
    data = process_data("data.csv")
    print(data.head())
```

## Console/shell commands

Here are some shell commands:

```bash
# Install dependencies
pip install pandas numpy matplotlib

# Run a Python script
python process_data.py

# Check Python version
python --version

# List files
ls -la

# Navigate directories
cd ~/projects
pwd
```

## JavaScript/TypeScript code

```javascript
// JavaScript example
const processData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Filter and map
    const processed = data
      .filter(item => item.active)
      .map(item => ({
        id: item.id,
        name: item.name.toUpperCase(),
        value: item.value * 2
      }));
    
    console.log('Processed items:', processed.length);
    return processed;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Usage
processData('/api/data')
  .then(result => console.log(result))
  .catch(err => console.error(err));
```

## Markdown code block

Here's a markdown example:

```markdown
# Heading 1

## Heading 2

- List item 1
- List item 2

**Bold text** and *italic text*

[Link](https://example.com)

> Blockquote

| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

## YAML configuration

```yaml
# Configuration file
server:
  host: localhost
  port: 8080
  debug: true

database:
  type: postgresql
  host: db.example.com
  name: myapp
  user: admin
  password: secret

features:
  - authentication
  - authorization
  - api
```

## JSON data

```json
{
  "name": "Example Package",
  "version": "1.0.0",
  "description": "An example package",
  "dependencies": {
    "pandas": ">=1.5.0",
    "numpy": ">=1.20.0"
  },
  "author": {
    "name": "Jane Developer",
    "email": "jane@example.com"
  }
}
```

## HTML example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example Page</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</body>
</html>
```

## CSS example

```css
/* Stylesheet example */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
```

## R code example

```r
# R code example
library(dplyr)
library(ggplot2)

# Load data
data <- read.csv("data.csv")

# Process data
processed_data <- data %>%
  filter(value > 0) %>%
  mutate(
    log_value = log(value),
    category = case_when(
      value < 10 ~ "low",
      value < 50 ~ "medium",
      TRUE ~ "high"
    )
  )

# Create plot
ggplot(processed_data, aes(x = category, y = value)) +
  geom_boxplot() +
  labs(title = "Value by Category")
```

## Code without language specified

```
This is plain text code block
without syntax highlighting
It should still be styled
as a code block
```

## Mixed content

Here's a paragraph with inline `code` and then a code block:

```python
def example():
    return "This is Python code"
```

And here's more text with `more inline code`.

---

## Customizing syntax highlighting theme

The Clean Hugo theme uses Hugo's built-in Chroma syntax highlighter with the **Monokai** theme by default. You can easily change to a different theme if you prefer.

### Available themes

Hugo supports many Chroma themes. Popular options include:
- `monokai` (default) - Dark theme with vibrant colors
- `github` - Light theme similar to GitHub
- `dracula` - Dark theme with purple accents
- `solarized-dark` / `solarized-light` - Solarized color scheme
- `vs` - Visual Studio style
- `pygments` - Classic Pygments style

See the [Chroma Style Gallery](https://xyproto.github.io/sublime/docs/) for all available themes.

### How to change the theme

**Step 1:** Update your `hugo.toml` configuration:

```toml
[markup]
  [markup.highlight]
    style = 'github'  # Change this to your preferred theme
    lineNos = false
    noClasses = false
    codeFences = true
    guessSyntax = true
```

**Step 2:** Regenerate the syntax CSS file:

```bash
cd exampleSite
hugo gen chromastyles --style=github > ../static/css/syntax.css
```

Replace `github` with your chosen theme name.

**Step 3:** Restart your Hugo server:

```bash
hugo server
```

The new theme will be applied to all code blocks across your site.

### Notes

- The `syntax.css` file is located in `static/css/syntax.css`
- This file is automatically included in `layouts/_default/baseof.html`
- You only need to regenerate the CSS when changing themes
- The theme applies globally to all code blocks on your site
