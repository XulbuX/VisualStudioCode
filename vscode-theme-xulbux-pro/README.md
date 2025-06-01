# <span style="color:#8085FF"><b>XulbuX</b></span> <span style="color:#FF806A">Neon</span> <span style="color:#FFAB6A">Pro</span>

## A THEME WHICH FOCUSES ON <span style="color:#8085FF">CLEAR SYNTAX</span> AND <span style="color:#8085FF">BEAUTIFUL COLORS</span>

This VisualStudioCode extension contains two themes, which both try to make VSCode look good and do very clear syntax highlighting. [View on GitHub](https://github.com/XulbuX/VisualStudioCode/tree/main/vscode-theme-xulbux-pro)

> To get a better feeling of how the themes look on the code, continue at the [THEME PREVIEWS](#previews).

**Apply one of the themes:**

* Open the command input: `Cmd+Shift+K` on macOS or `Ctrl+Shift+K` on Windows and Linux or `F1` in general
* Enter «*color theme*» in the input field and click on `Preferences: Color Theme`.
* Search for the themes `XulbuX Neon` or `XulbuX Neon Pro` and select one of them by clicking on it.

<br>

# COLORS

|                          XulbuX Neon                           |                      XulbuX Neon Pro                       |
|                              :--:                              |                           :--:                             |
| ![](https://img.shields.io/badge/rose-FF4D9A?style=for-the-badge)       | ![](https://img.shields.io/badge/red-FF606A?style=for-the-badge)    |
| ![](https://img.shields.io/badge/hot_pink-FF65CC?style=for-the-badge)   | ![](https://img.shields.io/badge/orange-FF806A?style=for-the-badge) |
| ![](https://img.shields.io/badge/heliotrope-E565FF?style=for-the-badge) | ![](https://img.shields.io/badge/gold-FFAB6A?style=for-the-badge)   |
| ![](https://img.shields.io/badge/mint-9AFFB0?style=for-the-badge)       | ![](https://img.shields.io/badge/green-2BFF9A?style=for-the-badge)  |
| ![](https://img.shields.io/badge/neon_green-2BFFAB?style=for-the-badge) | ![](https://img.shields.io/badge/teal-41F1C2?style=for-the-badge)   |
| ![](https://img.shields.io/badge/cyan-55FFEF?style=for-the-badge)       | ![](https://img.shields.io/badge/cyan-77FFEF?style=for-the-badge)   |
| ![](https://img.shields.io/badge/blue-60AAFF?style=for-the-badge)       | ![](https://img.shields.io/badge/blue-60AAFF?style=for-the-badge)   |
| ![](https://img.shields.io/badge/xulbux-7075FF?style=for-the-badge)     | ![](https://img.shields.io/badge/xulbux-8085FF?style=for-the-badge) |
| ![](https://img.shields.io/badge/purple-AC80FF?style=for-the-badge)     | ![](https://img.shields.io/badge/purple-AC80FF?style=for-the-badge) |
| ![](https://img.shields.io/badge/pink-FC61EF?style=for-the-badge)       | ![](https://img.shields.io/badge/pink-EE60BB?style=for-the-badge)   |

<br>

# <span id="previews">THEME PREVIEWS</span>

### <b>XulbuX Neon:</b>

> **PYTHON**

<img src="https://github.com/XulbuX/VisualStudioCode/blob/main/vscode-theme-xulbux-pro/preview/img/python_neon.png?raw=true" alt="Python Code Preview" width="300" height="auto" align="center"></img><br>

> **JAVA**

<img src="https://github.com/XulbuX/VisualStudioCode/blob/main/vscode-theme-xulbux-pro/preview/img/java_neon.png?raw=true" alt="Java Code Preview" width="377" height="auto" align="center"></img><br>

> **C++**

<img src="https://github.com/XulbuX/VisualStudioCode/blob/main/vscode-theme-xulbux-pro/preview/img/cpp_neon.png?raw=true" alt="C++ Code Preview" width="399" height="auto" align="center"></img><br><br>



### <b>XulbuX Neon Pro:</b>

> **PYTHON**

<img src="https://github.com/XulbuX/VisualStudioCode/blob/main/vscode-theme-xulbux-pro/preview/img/python_neon-pro.png?raw=true" alt="Python Code Preview" width="300" height="auto" align="center"></img><br>

> **JAVA**

<img src="https://github.com/XulbuX/VisualStudioCode/blob/main/vscode-theme-xulbux-pro/preview/img/java_neon-pro.png?raw=true" alt="Java Code Preview" width="377" height="auto" align="center"></img><br>

> **C++**

<img src="https://github.com/XulbuX/VisualStudioCode/blob/main/vscode-theme-xulbux-pro/preview/img/cpp_neon-pro.png?raw=true" alt="C++ Code Preview" width="399" height="auto" align="center"></img><br>

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
