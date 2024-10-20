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