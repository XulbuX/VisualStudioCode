# <span style="color:#8085FF"><b>XulbuX</b></span> <span style="color:#FF806A">Neon</span> <span style="color:#FFAB6A">Pro</span>

## A THEME WHICH FOCUSES ON <span style="color:#8085FF">CLEAR SYNTAX</span> AND <span style="color:#8085FF">BEAUTIFUL COLORS</span>

This VisualStudioCode extension contains two themes, which both try to make VSCode look good and do very clear syntax highlighting. [view on GitHub](https://github.com/XulbuX-dev/VisualStudioCode/tree/main/vscode-theme-xulbux-pro)

> To get a better feeling of how the themes look on the code, continue at the [THEME PREVIEWS](#previews).

**Apply one of the themes:**

* Open the command input: `Cmd+Shift+K` on macOS or `Ctrl+Shift+K` on Windows and Linux or `F1` in general
* Enter «*color theme*» in the input field and click on `Preferences: Color Theme`.
* Search for the themes `XulbuX Neon` or `XulbuX Neon Pro` and select one of them by clicking on it.

<br>

# COLORS

If you can't see the coloured text in this table, take a look at the [colors used in the theme](https://github.com/XulbuX-dev/VisualStudioCode/blob/main/vscode-theme-xulbux-pro/ColorsUsedInTheme.md).

|                  XulbuX Neon                  |              XulbuX Neon Pro              |
|                      :--:                     |                   :--:                    |
| <span style="color:#FF4D9A">rose</span>       | <span style="color:#FF606A">red</span>    |
| <span style="color:#FF65CC">hot-pink</span>   | <span style="color:#FF806A">orange</span> |
| <span style="color:#E565FF">helitrope</span>  | <span style="color:#FFAB6A">gold</span>   |
| <span style="color:#9AFFB0">mint</span>       | <span style="color:#2BFF9A">green</span>  |
| <span style="color:#2BFFAB">neon green</span> | <span style="color:#41F1C2">teal</span>   |
| <span style="color:#55FFEF">cyan</span>       | <span style="color:#77FFEF">cyan</span>   |
| <span style="color:#60AAFF">blue</span>       | <span style="color:#60AAFF">blue</span>   |
| <span style="color:#7075FF">xulbux</span>     | <span style="color:#8085FF">xulbux</span> |
| <span style="color:#AC80FF">purple</span>     | <span style="color:#AC80FF">purple</span> |
| <span style="color:#FC61EF">pink</span>       | <span style="color:#EE60BB">pink</span>   |

<br>

# <span id="previews">THEME PREVIEWS</span>

### <b>XulbuX Neon:</b>

> **PYTHON**

<img src="https://github.com/XulbuX-dev/VisualStudioCode/blob/main/vscode-theme-xulbux-pro/preview/img/python_neon.png?raw=true" alt="Python Code Preview" width="300" height="auto" align="center"></img><br>

> **JAVA**

<img src="https://github.com/XulbuX-dev/VisualStudioCode/blob/main/vscode-theme-xulbux-pro/preview/img/java_neon.png?raw=true" alt="Java Code Preview" width="377" height="auto" align="center"></img><br>

> **C++**

<img src="https://github.com/XulbuX-dev/VisualStudioCode/blob/main/vscode-theme-xulbux-pro/preview/img/cpp_neon.png?raw=true" alt="C++ Code Preview" width="399" height="auto" align="center"></img><br><br>



### <b>XulbuX Neon Pro:</b>

> **PYTHON**

<img src="https://github.com/XulbuX-dev/VisualStudioCode/blob/main/vscode-theme-xulbux-pro/preview/img/python_neon-pro.png?raw=true" alt="Python Code Preview" width="300" height="auto" align="center"></img><br>

> **JAVA**

<img src="https://github.com/XulbuX-dev/VisualStudioCode/blob/main/vscode-theme-xulbux-pro/preview/img/java_neon-pro.png?raw=true" alt="Java Code Preview" width="377" height="auto" align="center"></img><br>

> **C++**

<img src="https://github.com/XulbuX-dev/VisualStudioCode/blob/main/vscode-theme-xulbux-pro/preview/img/cpp_neon-pro.png?raw=true" alt="C++ Code Preview" width="399" height="auto" align="center"></img><br>

<br>
<br>


# <span style="color:#8085FF">Enjoy!</span>


<br>
<br>

## Code used for theme previews

**PYTHON**
```python
import random

for IDX in range(10,0,-1):
  x = random.randint(1,10) + IDX
  print(f'NUMBER: {x}')
```

**JAVA**

```java
import java.util.Random;

public class Example {
  public static void main(String[] args) {
    Random random = new Random();
    for (int IDX = 10; IDX > 0; --IDX) {
      int x = random.nextInt(10) + 1 + IDX;
      System.out.println("NUMBER: " + x);
    }
  }
}
```

**C++**

```cpp
#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
  std::srand(std::time(0));
  for (int IDX = 10; IDX > 0; --IDX) {
    int x = std::rand() % 10 + 1 + IDX;
    std::cout << "NUMBER: " << x << std::endl;
  }
  return 0;
}
```
