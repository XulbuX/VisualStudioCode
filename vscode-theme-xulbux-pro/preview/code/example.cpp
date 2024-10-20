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